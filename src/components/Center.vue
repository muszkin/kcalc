<template>
    <div class="row">
        <div class="col-12">
            <div class="container p-5" v-for="product in dishProducts" :key="product.uniqueKey">
                <div class="row">
                    <div class="col">
                        <div class="alert alert-info">{{product.name}}</div>
                        <button class="btn btn-success btn-sm" @click="saveProduct(product)">
                            <span class="oi oi-check"></span>
                        </button>
                        <button class="btn btn-danger btn-sm" @click="deleteProductFromDish(product)">
                            <span class="oi oi-x"></span>
                        </button>
                    </div>
                    <div class="col">
                        <div>
                            <label for="currentProductWeight">Waga produktu</label>
                            <input class="form-control" type="number" @input="productWeightInput(product,$event.target.value)" v-model="product.currentWeight" id="currentProductWeight"/>
                            <br/>
                            <range-slider v-model="product.currentWeight" min="0" max="1000" class="form-input" name="weightSlider" @input="productWeightInput(product)"/>

                            <label for="currentProductKcal">Kalorie produktu</label>
                            <input class="form-control" type="number" @input="productKcalInput(product,$event.target.value)" v-model="product.currentKcal" id="currentProductKcal"/>
                            <br/>
                            <range-slider v-model="product.currentKcal" min="0" max="1000" class="form-input" name="kcalSlider" @input="productKcalInput(product)"/>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label>On</label>
                            <label for="balanceHeWeight">Waga</label>
                            <input class="form-control" min="0" type="number" id="balanceHeWeight" v-model="product.balanceHeWeight" @input="balanceHeWeightUpdate(product)"/>
                            <label for="balanceHeKcal">Kcal</label>
                            <input class="form-control" min="0" type="number" id="balanceHeKcal" v-model="product.balanceHeKcal" @input="balanceHeKcalUpdate(product)"/>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label>Balans</label>
                            <range-slider class="form-control"  name="On" v-model="product.balance" min="0" max="100" @input="balanceSliderUpdate(product)"/>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <label>Ona</label>
                            <label for="balanceSheWeight">Waga</label>
                            <input class="form-control" min="0" type="number" id="balanceSheWeight" v-model="product.balanceSheWeight" @input="balanceSheWeightUpdate(product)"/>
                            <label for="balanceSheKcal">Kcal</label>
                            <input class="form-control" min="0" type="number" id="balanceSheKcal" v-model="product.balanceSheKcal" @input="balanceSheKcalUpdate(product)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RangeSlider from 'vue-range-slider';
    import 'vue-range-slider/dist/vue-range-slider.css'

    export default {
        name: "Center",
        components: {RangeSlider},
        computed: {
            dishProducts() {
                return this.$store.state.dishProducts;
            }
        },
        methods: {
            saveProduct(product) {
                this.$store.commit('saveProduct', product);
            },
            deleteProductFromDish(product) {
                this.$store.commit('deleteProductFromDish', product);
            },
            balanceHeWeightUpdate(product) {
                this.$store.commit('balanceHeWeightUpdate',{product: product, value: product.balanceHeWeight});
                this.$forceUpdate();
            },
            balanceHeKcalUpdate(product) {
                this.$store.commit('balanceHeKcalUpdate',{product: product, value: product.balanceHeKcal});
                this.$forceUpdate();
            },
            balanceSheWeightUpdate(product) {
                this.$store.commit('balanceSheWeightUpdate',{product: product, value: product.balanceSheWeight});
                this.$forceUpdate();
            },
            balanceSheKcalUpdate(product) {
                this.$store.commit('balanceSheKcalUpdate',{product: product, value: product.balanceSheKcal});
                this.$forceUpdate();
            },
            balanceSliderUpdate(product) {
                this.$store.commit('balanceSliderValueUpdate', {product: product, value: product.balance});
                this.$forceUpdate();
            },
            productWeightInput(product) {
                this.$store.commit('productWeightChange', {product: product, value: product.currentWeight});
                this.$forceUpdate();
            },
            productKcalInput(product) {
                this.$store.commit('productKcalChange', {product: product, value: product.currentKcal});
                this.$forceUpdate();
            }
        }
    }
</script>

<style scoped>

</style>