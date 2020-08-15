import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        totalDishKcal: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default {
    store: store
}