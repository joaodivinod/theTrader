<template>
    <v-flex class="pr-3 mb-3 xs12 md6 lg4">
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }}
                </strong>
                <small>
                    (Preço:{{stock.price}} | Qtde: {{stock.quantity}})
                </small>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity"></v-text-field>
                <v-btn :disabled="quantity<=0 || !Number.isInteger(quantity)"  class="blue darken-3 white--text"
                       @click="sellStock"
                >Vender</v-btn>
            </v-container>
            <p v-show="quantity<0 || !Number.isInteger(quantity) ">Por favor insira um valor válido</p>
        </v-card>

    </v-flex>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: "Stock",
    props:['stock'],
    data(){
        return{
            quantity:0
        }
    },
    methods:{
        ...mapActions({sellStockAction: 'sellStock' }),
        sellStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.sellStockAction(order)
            // this.$store.dispatch('sellStock',order)
            this.quantity = 0

        }

    }

}
</script>

<style scoped>

</style>