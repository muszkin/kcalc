<template>
    <div class="modal fade" id="dishListModal" ref="dishListModal" tabindex="-1" role="dialog" aria-labelledby="dishListModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="dishListModalLabel">Lista dań</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col alert alert-info" v-for="(dish,index) in dishList" :key="index">
                        {{dish.dishName}} - {{dish.currentDishKcal}} kcal / {{dish.currentDishWeight}} g
                        <button class="btn btn-danger" @click="deleteDish(index)"><span class="oi oi-x"></span></button>
                        <button class="btn btn-info" @click="loadDish(index)"><span class="oi oi-arrow-top"></span></button>
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
        name: "DishList",
        computed: {
            dishList() {
                return this.$store.state.dishList;
            }
        },
        methods:{
            loadDish(index) {
                this.$store.commit('loadDish', index);
                $('#dishListModal').modal('hide');
                this.$forceUpdate();
            },
            deleteDish(index) {
                this.$store.commit('deleteDish', index);
                this.$forceUpdate();
            },
        }
    }
</script>

<style scoped>

</style>