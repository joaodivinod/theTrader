export default {
    state:{
        founds:1000,
        stocks:[]
    },
    mutations:{
        buyStock(state, {stockid, quantity, sotockPrice } ){
            const record = state.stocks.find(element => element.id === sotockId)
            if(record){
                record.quantity += quantity
            }else {
                state.stocks.push({
                    id:stockid,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, {stockId, quantity, stockPrice}){
            const record = state.stocks.find(element => element.id === stockId)
            if(record.quantity > quantity){
                record.quantity -= quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        }
    },
    action:{
        sellStock({commit},order) {
            commit ('setStocks',order)
        }
    },
    getters:{
        stockPortifolio(state, getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id === stock.id)
                return{
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        found(state){
            return state.funds
        }
    }
}