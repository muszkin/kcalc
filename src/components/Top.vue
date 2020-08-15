<template>
    <div>
        <div class="row">
            <div class="col-sm-2">
                Kalkulator posiłków dla par.
            </div>
            <div class="col">
                <div class="form-inline">
                    <label for="totalDishKcal" class="p-2">Całkowita ilość kalorii dla dania</label>
                    <input min="0" class="form-control w-25" type="number" id="totalDishKcal" :value="totalDishKcal" @input="changeTotalDishKcal($event.target.value)" @wheel="wheelTotalDishKcal"/>
                </div>
                <div class="form-inline">
                    <label for="totalDishKcalHe" class="p-2">Całkowita ilość kalorii dla niego</label>
                    <input min="0" class="form-control w-25" type="number" id="totalDishKcalHe" :value="totalDishKcalHe" @input="changeTotalDishKcalHe($event.target.value)" @wheel="wheelTotalDishKcalHe"/>
                </div>
                <div class="form-inline">
                    <label for="totalDishKcalShe" class="p-2">Całkowita ilość kalorii dla niej</label>
                    <input min="0" class="form-control w-25" type="number" id="totalDishKcalShe" :value="totalDishKcalShe" @input="changeTotalDishKcalShe($event.target.value)" @wheel="wheelTotalDishKcalShe"/>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-6">
                        <div class="alert alert-info">Całkowita waga:{{currentDishWeight}}</div>
                    </div>
                    <div class="col-6">
                        <div class="alert alert-info">Całkowite kalorie:{{currentDishKcal}}</div>
                    </div>
                    <div class="col">
                        <div class="alert alert-info">On:{{currentDishHeKcal}} kcal/{{currentDishHeWeight}} g</div>
                    </div>
                    <div class="col">
                        <div class="alert alert-info">Ona:{{currentDishSheKcal}} kcal/{{currentDishSheWeight}} g</div>
                    </div>
                </div>
            </div>
            <div class="col-3 btn-group-vertical">
                <button class="btn btn-success btn-sm text-center m-1" data-toggle="modal" data-target="#addProductModal">
                    <span class="oi oi-plus" title="add product" aria-hidden="true">
                    </span>
                    Dodaj nowy produkt
                </button>
                <button class="btn btn-info btn-sm text-center m-1" data-toggle="modal" data-target="#dishListModal">
                    <span class="oi oi-list"></span>
                    Lista dań
                </button>
                <button class="btn btn-info btn-sm text-center m-1" data-toggle="modal" data-target="#productListModal">
                    <span class="oi oi-list-rich"></span>
                    Lista produktów
                </button>
            </div>
            <ProductCreator @addProduct="addProduct"/>
            <DishList/>
            <ProductList/>
        </div>
        <div class="row">
            <div class="col">
                <div class="justify-content-center align-content-center form-inline">
                    <label for="dishName" class="m-1">Nazwa dania</label>
                    <input type="text" id="dishName" :value="dishName" @input="saveDishName($event.target.value)" class="form-control m-1"/>
                    <button class="btn btn-success m-1" @click="saveDish()"><span class="oi oi-plus">Zapisz</span></button>
                    <button class="btn btn-danger m-1" @click="reset()"><span class="oi oi-x"></span>Reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductCreator from "@/components/ProductCreator";
    import $ from 'jquery';
    import DishList from "@/components/DishList";
    import ProductList from "@/components/ProductList";

    export default {
        name: "Top",
        components: {ProductList, DishList, ProductCreator},
        computed: {
            dishName() {
                return this.$store.state.dishName;
            },
            totalDishKcal() {
                return this.$store.state.totalDishKcal;
            },
            totalDishKcalHe() {
                return this.$store.state.totalDishKcalHe;
            },
            totalDishKcalShe() {
                return this.$store.state.totalDishKcalShe;
            },
            currentDishWeight() {
                return this.$store.state.currentDishWeight;
            },
            currentDishKcal() {
                return this.$store.state.currentDishKcal;
            },
            currentDishHeWeight() {
                return this.$store.state.currentDishHeWeight;
            },
            currentDishSheWeight() {
                return this.$store.state.currentDishSheWeight;
            },
            currentDishHeKcal() {
                return this.$store.state.currentDishHeKcal;
            },
            currentDishSheKcal() {
                return this.$store.state.currentDishSheKcal;
            },
        },
        methods: {
            reset() {
                this.$store.commit('reset');
            },
            saveDish() {
                this.$store.commit('saveDish', this.$uuid.v1());
                this.$children.forEach(function(child){ child.$forceUpdate()});
            },
            saveDishName(value) {
                this.$store.commit('saveDishName', value);
                this.$forceUpdate();
            },
            wheelTotalDishKcal: function(event) {
                if (event.deltaY > 0) {
                    this.$store.commit('totalDishKcalDecrease');
                } else {
                    this.$store.commit('totalDishKcalIncrement');
                }
            },
            changeTotalDishKcal: function(value) {
                if (value <= 0) value = 0;
                this.$store.commit('totalDishKcalChange', value);
            },
            wheelTotalDishKcalHe: function(event) {
                if (event.deltaY > 0) {
                    this.$store.commit('totalDishKcalHeDecrease');
                } else {
                    this.$store.commit('totalDishKcalHeIncrement');
                }
            },
            changeTotalDishKcalHe: function(value) {
                if (value <= 0) value = 0;
                this.$store.commit('totalDishKcalHeChange', value);
            },
            wheelTotalDishKcalShe: function(event) {
                if (event.deltaY > 0) {
                    this.$store.commit('totalDishKcalSheDecrease');
                } else {
                    this.$store.commit('totalDishKcalSheIncrement');
                }
            },
            changeTotalDishKcalShe: function(value) {
                if (value <= 0) value = 0;
                this.$store.commit('totalDishKcalSheChange', value);
            },
            addProduct: function(product) {
                $('#addProductModal').modal('hide');
                this.$store.commit('addDishProduct', product);
            }
        }
    }
</script>

<style scoped>

</style>