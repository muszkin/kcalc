import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'open-iconic/font/css/open-iconic-bootstrap.css'
import UUID from 'vue-uuid'

import Vuex from "vuex";

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(UUID)

const store = new Vuex.Store({
  state: {
    totalDishKcal: 0,
    totalDishKcalHe: 0,
    totalDishKcalShe: 0,
    dishProducts: [],
    currentDishKcal: 0,
    currentDishHeKcal: 0,
    currentDishSheKcal: 0,
    currentDishWeight: 0,
    currentDishHeWeight: 0,
    currentDishSheWeight: 0,
    dishName: '',
    dishUUID: null,
    dishList: localStorage.dishList ? JSON.parse(localStorage.dishList) : [],
    productList: localStorage.productList ? JSON.parse(localStorage.productList): [],
  },
  mutations: {
    totalDishKcalHeIncrement (state) {
      state.totalDishKcalHe++;
      if (state.totalDishKcalHe > state.totalDishKcal) state.totalDishKcalHe = state.totalDishKcal;
      this.commit('totalDishKcalSheChange',state.totalDishKcal - state.totalDishKcalHe);
    },
    totalDishKcalHeDecrease (state) {
      state.totalDishKcalHe--;
      if (state.totalDishKcalHe < 0) state.totalDishKcalHe = 0;
      this.commit('totalDishKcalSheChange',state.totalDishKcal - state.totalDishKcalHe);
    },
    totalDishKcalHeChange (state, value) {
      state.totalDishKcalHe = value;
      state.totalDishKcalShe = state.totalDishKcal - value;
    },
    totalDishKcalSheIncrement (state) {
      state.totalDishKcalShe++;
      if (state.totalDishKcalShe > state.totalDishKcal) state.totalDishKcalShe = state.totalDishKcal;
      this.commit('totalDishKcalHeChange',state.totalDishKcal - state.totalDishKcalShe);
    },
    totalDishKcalSheDecrease (state) {
      state.totalDishKcalShe--;
      if (state.totalDishKcalShe < 0) state.totalDishKcalShe = 0;
      this.commit('totalDishKcalHeChange',state.totalDishKcal - state.totalDishKcalShe);
    },
    totalDishKcalSheChange (state, value) {
      state.totalDishKcalShe = value;
      state.totalDishKcalHe = state.totalDishKcal - value;
    },
    totalDishKcalIncrement (state) {
      state.totalDishKcal++;
    },
    totalDishKcalDecrease (state) {
      state.totalDishKcal--;
      if (state.totalDishKcal < 0) {
        state.totalDishKcal = 0;
      }
    },
    totalDishKcalChange (state, value) {
      state.totalDishKcal = value;
    },
    addDishProduct (state, product) {
      product.baseWeight = parseFloat(product.baseWeight);
      product.baseKcal = parseFloat(product.baseKcal);
      product.currentWeight = product.baseWeight;
      product.currentKcal = product.baseKcal;
      product.balance = 50;
      product.balanceHeWeight = 0;
      product.balanceSheWeight = 0;
      product.balanceHeKcal = 0;
      product.balanceSheKcal = 0;
      state.dishProducts.push(product);
      this.commit('balanceSliderUpdate', product);
      this.commit('update');
    },
    productWeightChange (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].currentWeight = parseFloat(value);
      state.dishProducts[productIndex].currentKcal = Math.round(((parseFloat(value) * product.baseKcal)/product.baseWeight));
      this.commit('update');
      this.commit('balanceSliderUpdate', state.dishProducts[productIndex]);
    },
    productKcalChange (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].currentKcal = parseFloat(value);
      state.dishProducts[productIndex].currentWeight = Math.round(((parseFloat(value) * product.baseWeight) / product.baseKcal));
      this.commit('update');
      this.commit('balanceSliderUpdate', state.dishProducts[productIndex]);
    },
    reset(state) {
      state.totalDishKcal = 0;
      state.totalDishKcalHe = 0;
      state.totalDishKcalShe = 0;
      state.dishProducts = [];
      state.currentDishKcal = 0;
      state.currentDishHeKcal = 0;
      state.currentDishSheKcal = 0;
      state.currentDishWeight = 0;
      state.currentDishHeWeight = 0;
      state.currentDishSheWeight = 0;
      state.dishName = null;
      state.dishUUID = null;
      this.commit('update');
    },
    update() {
      this.commit('updateDishKcal');
      this.commit('updateDishWeight');
    },
    updateDishWeight (state) {
      let currentWeight = 0.0;
      let currentHeWeight = 0.0;
      let currentSheWeight = 0.0;
      state.dishProducts.forEach(product => {
        currentWeight += product.currentWeight;
        currentHeWeight += product.balanceHeWeight;
        currentSheWeight += product.balanceSheWeight;
      })
      state.currentDishWeight = Math.round(currentWeight);
      state.currentDishWeight = Math.round(currentHeWeight);
      state.currentDishSheWeight = Math.round(currentSheWeight);
    },
    updateDishKcal (state) {
      let currentKcal = 0.0;
      let currentHeKcal = 0.0;
      let currentSheKcal = 0.0;
      state.dishProducts.forEach(product => {
        currentKcal += product.currentKcal;
        currentHeKcal += product.balanceHeKcal;
        currentSheKcal += product.balanceSheKcal;
      })
      state.currentDishKcal = Math.round(currentKcal);
      state.currentDishHeKcal = Math.round(currentHeKcal);
      state.currentDishSheKcal = Math.round(currentSheKcal);
    },
    balanceSliderUpdate (state, product) {
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      let percentShe = (product.balance <= 0) ? 0 : product.balance / 100;
      let percentHe = ((100 - product.balance) <= 0) ? 0 : (100 - product.balance) / 100 ;
      state.dishProducts[productIndex].balanceHeWeight = Math.round(product.currentWeight * percentHe);
      state.dishProducts[productIndex].balanceHeKcal = Math.round(product.currentKcal * percentHe);
      state.dishProducts[productIndex].balanceSheWeight = Math.round(product.currentWeight * percentShe);
      state.dishProducts[productIndex].balanceSheKcal = Math.round(product.currentKcal * percentShe);
      this.commit('update');
    },
    balanceSliderValueUpdate (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].balance = value;
      this.commit('balanceSliderUpdate', state.dishProducts[productIndex]);
    },
    balanceHeWeightUpdate (state, payload) {
      let product = payload.product;
      let value = parseInt(payload.value);
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].balanceHeWeight = value;
      state.dishProducts[productIndex].balanceHeKcal = Math.round((value * product.baseKcal)/product.baseWeight);
      state.dishProducts[productIndex].balanceSheWeight = state.dishProducts[productIndex].currentWeight - value;
      state.dishProducts[productIndex].balanceSheKcal = Math.round(state.dishProducts[productIndex].currentKcal - state.dishProducts[productIndex].balanceHeKcal);
      state.dishProducts[productIndex].balance = Math.round((state.dishProducts[productIndex].balanceHeWeight * 100) / state.dishProducts[productIndex].currentWeight);
      this.commit('update');
    },
    balanceSheWeightUpdate (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].balanceSheWeight = value;
      state.dishProducts[productIndex].balanceSheKcal = Math.round((value * product.baseKcal)/product.baseWeight);
      state.dishProducts[productIndex].balanceHeWeight = Math.round(state.dishProducts[productIndex].currentWeight - value);
      state.dishProducts[productIndex].balanceHeKcal = Math.round(state.dishProducts[productIndex].currentKcal - state.dishProducts[productIndex].balanceSheKcal);
      state.dishProducts[productIndex].balance = Math.round((state.dishProducts[productIndex].balanceHeWeight * 100) / state.dishProducts[productIndex].currentWeight);
      this.commit('update');
    },
    balanceHeKcalUpdate (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].balanceHeKcal = value;
      state.dishProducts[productIndex].balanceHeWeight = Math.round((value * product.baseWeight)/product.baseKcal);
      state.dishProducts[productIndex].balanceSheKcal = Math.round(state.dishProducts[productIndex].currentKcal - value);
      state.dishProducts[productIndex].balanceSheWeight = Math.round(state.dishProducts[productIndex].currentWeight - state.dishProducts[productIndex].balanceHeWeight);
      state.dishProducts[productIndex].balance = Math.round((state.dishProducts[productIndex].balanceHeKcal * 100) / state.dishProducts[productIndex].currentKcal);
      this.commit('update');
    },
    balanceSheKcalUpdate (state, payload) {
      let product = payload.product;
      let value = payload.value;
      let productIndex = state.dishProducts.findIndex(function(ele) {
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts[productIndex].balanceSHeKcal = value;
      state.dishProducts[productIndex].balanceSheWeight = Math.round((value * product.baseWeight)/product.baseKcal);
      state.dishProducts[productIndex].balanceHeKcal = Math.round(state.dishProducts[productIndex].currentKcal - value);
      state.dishProducts[productIndex].balanceHeWeight = Math.round(state.dishProducts[productIndex].currentWeight - state.dishProducts[productIndex].balanceSheWeight);
      state.dishProducts[productIndex].balance = Math.round((state.dishProducts[productIndex].balanceHeKcal * 100) / state.dishProducts[productIndex].currentKcal);
      this.commit('update');
    },
    saveDishName (state, value) {
      state.dishName = value;
    },
    saveDish(state, value) {
      if (state.dishUUID === null) {
        state.dishUUID = value;
      }
      let dish = {
        totalDishKcal: state.totalDishKcal,
        totalDishKcalHe: state.totalDishKcalHe,
        totalDishKcalShe: state.totalDishKcalShe,
        dishProducts: state.dishProducts,
        currentDishKcal: state.currentDishKcal,
        currentDishHeKcal: state.currentDishHeKcal,
        currentDishSheKcal: state.currentDishSheKcal,
        currentDishWeight: state.currentDishWeight,
        currentDishHeWeight: state.currentDishHeWeight,
        currentDishSheWeight: state.currentDishSheWeight,
        dishName: state.dishName,
        dishUUID: state.dishUUID
      };
      let dishIndex = state.dishList.findIndex(function(ele){
        return ele.dishUUID === dish.dishUUID;
      },dish);
      if (dishIndex !== -1) {
        state.dishList[dishIndex] = dish;
      }else {
        state.dishList.push(dish);
      }
      this.commit('syncDishListLocalStorage');
    },
    deleteDish(state, index) {
      state.dishList.splice(index, 1);
      this.commit('syncDishListLocalStorage');
    },
    loadDish(state, index) {
      let dish = state.dishList[index];
      state.totalDishKcal = dish.totalDishKcal;
      state.totalDishKcalHe = dish.totalDishKcalHe;
      state.totalDishKcalShe = dish.totalDishKcalShe;
      state.dishProducts = dish.dishProducts;
      state.currentDishKcal = dish.currentDishKcal;
      state.currentDishHeKcal = dish.currentDishHeKcal;
      state.currentDishSheKcal = dish.currentDishSheKcal;
      state.currentDishWeight = dish.currentDishWeight;
      state.currentDishHeWeight = dish.currentDishHeWeight;
      state.currentDishSheWeight = dish.currentDishSheWeight;
      state.dishName = dish.dishName;
      state.dishUUID = dish.dishUUID;
      this.commit('update');
    },
    syncDishListLocalStorage(state) {
      localStorage.dishList = JSON.stringify(state.dishList);
    },
    syncProductListLocalStorage(state) {
      localStorage.productList = JSON.stringify(state.productList);
    },
    saveProduct(state, product) {
      let productListIndex = state.productList.findIndex(function(ele){
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      if (productListIndex !== -1) {
        state.productList[productListIndex] = product;
      } else {
        state.productList.push(product);
      }
      this.commit('syncProductListLocalStorage');
    },
    deleteProductFromDish(state, product) {
      let dishProductsProductIndex = state.dishProducts.findIndex(function(ele){
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      state.dishProducts.splice(dishProductsProductIndex, 1);
      this.commit('update');
    },
    deleteProductFromStorage(state, index) {
      state.productList.splice(index, 1);
      this.commit('syncProductListLocalStorage');
    },
    loadProductFromStorage(state, index) {
      let product = state.productList[index];
      let dishProductsProductIndex = state.dishProducts.findIndex(function(ele){
        return ele.uniqueKey === product.uniqueKey;
      }, product);
      if (dishProductsProductIndex !== -1) {
        state.dishProducts[dishProductsProductIndex] = product;
      }else {
        state.dishProducts.push(product);
      }
      this.commit('update');
    }
  },
})
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
