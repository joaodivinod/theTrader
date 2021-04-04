# stock-trader

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Os dados da aplicação foram externalizados dentro da pasta data no arquivo stocks.js por que em um caso real
esses dados viriam de uma API e para tentar fazer o mais proximo disso decidi deixar esses dados fora dos
componentes

A Aplicação tem modulos criados dentro da pasta store para faciltar a organização,
a aplicação e pequena e não nessesarimanebnte precisa disso, poderia muito bem
funcionar sem mais como o objetivo e mostrar o meu conhecimento decidi fazer desta forma
Coisas que eu nunca tinha usado antes e usei nesse projeto

**Feaatures
*caso seu saldo seja insuficiente ou ou o valor seja negativo ou float o label de compra fica vermelho
*Filtros para mostrar os valores como real (R$)
* Os prezos são randomicos e mudam sempre que você finaliza o dia o que gera a ideia de flutuação de preço das ações.
  **Coisas que eu nunca tinha usado antes e usei nesse projeto
  
* Função callback
* operador spread
* mutations

* Criar mensagem para quando o saldo for insuficiente.