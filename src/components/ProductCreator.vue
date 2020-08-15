<template>
    <div class="modal fade" id="addProductModal" ref="addProductModal" tabindex="-1" role="dialog" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addProductModalLabel">Dodawanie produktu</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="product-name">Nazwa</label>
                        <input type="text" name="product-name" id="product-name" ref="productName" v-model="product.name" class="form-control"/>
                        <label for="measure-unit">Sposób mierzenia</label>
                        <select name="measure-unit" class="custom-select form-control" id="measure-unit" v-model="product.measureType">
                            <option :value="measureWeight" selected="selected">Wagowo</option>
                            <option :value="measurePiece">Sztuki</option>
                        </select>
                        <label for="pieceWeight" v-if="product.measureType === measurePiece">Waga sztuki (g)</label>
                        <input class="form-control" type="number" v-if="product.measureType === measurePiece" name="pieceWeight" v-model="product.pieceWeight" id="pieceWeight"/>
                        <div class="form-inline justify-content-center p-1">
                            <label for="unit" class="p-1">Jednostka</label>
                            <input class="form-control w-25" type="text" v-model="product.unit" id="unit" name="unit"/>
                            <label v-if="product.unit !== 'g'" for="unitFactor" class="p-1">Przelicznik</label>
                            <input title="Jak ta jednostka ma się do 1 grama ? Przez ile trzeba pomonożyć gram by ją otrzymać ? " v-if="product.unit !== 'g'" class="form-control w-25" type="number" step="0.001" min="0" id="unitFactor" name="unitFactor" v-model="product.unitCalculationFactor"/>
                        </div>
                        <div class="form-inline justify-content-center p-1">
                            <label for="baseKcal" class="p-1">Kcal</label>
                            <input class="form-control w-25" id="baseKcal" name="baseKcal" v-model="product.baseKcal"/>
                            <label for="baseWeight" class="p-1">Waga ({{product.unit}})</label>
                            <input class="form-control w-25" id="baseWeight" name="baseWeight" v-model="product.baseWeight"/>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                    <button type="button" class="btn btn-primary" @click="addProduct">Dodaj</button>
                </div>
                <input type="hidden" v-model="product.uniqueKey"/>
            </div>
        </div>
    </div>
</template>

<script>
    const MEASURE_TYPE_WEIGHT = 'weight';
    const MEASURE_TYPE_PIECE = 'piece';
    const UNIT_GRAMS = 'g';
    const UNIT_CALCULATION_FACTOR = 1;
    export default {
        name: "ProductCreator",
        data() {
            return {
                product: {
                    uniqueKey: this.getUniqueKey(),
                    baseKcal: 0,
                    baseWeight: 100,
                    measureType: MEASURE_TYPE_WEIGHT,
                    name: '',
                    pieceWeight: 0,
                    unit: UNIT_GRAMS,
                    unitCalculationFactor: UNIT_CALCULATION_FACTOR
                }
            }
        },
        computed: {
            measureWeight() {
                return MEASURE_TYPE_WEIGHT;
            },
            measurePiece() {
                return MEASURE_TYPE_PIECE;
            }
        },
        methods: {
            getUniqueKey() {
                return this.$uuid.v1();
            },
            addProduct: function() {
                this.$emit('addProduct',this.product);
                this.product = {
                    baseKcal: 0,
                    baseWeight: 100,
                    measureType: MEASURE_TYPE_WEIGHT,
                    name: '',
                    pieceWeight: 0,
                    unit: UNIT_GRAMS,
                    unitCalculationFactor: UNIT_CALCULATION_FACTOR,
                    uniqueKey: this.getUniqueKey()
                }
            }
        }
    }
</script>

<style scoped>

</style>