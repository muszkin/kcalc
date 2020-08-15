<template>
    <div class="modal fade" id="productListModal" ref="productListModal" tabindex="-1" role="dialog" aria-labelledby="productListModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="productListModalLabel">Lista produktów</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col alert alert-info" v-for="(product,index) in productList" :key="index">
                        {{product.name}} - {{product.baseKcal}} kcal / {{product.baseWeight}} {{product.unit}}
                        <button class="btn btn-danger" @click="deleteProductFromStorage(index)"><span class="oi oi-x"></span></button>
                        <button class="btn btn-info" @click="loadProductFromStorage(index)"><span class="oi oi-arrow-top"></span></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "ProductList",
        computed: {
            productList() {
                return this.$store.state.productList;
            }
        },
        methods: {
            loadProductFromStorage(index) {
                this.$store.commit('loadProductFromStorage', index);
                $('#productListModal').modal('hide');
                this.$forceUpdate();
            },
            deleteProductFromStorage(index) {
                this.$store.commit('deleteProductFromStorage', index);
                this.$forceUpdate();
            },
        }
    }
</script>

<style scoped>

</style>