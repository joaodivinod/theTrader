
# The trader

## Project setup
```  
npm install  
```  

### Compiles and hot-reloads for development
```  
npm run serve  
```  

## O que é o projeto

The trader é uma aplicação SPA que simula e compra e venda de ações desenvolvido em Vue JS com banco de dados real
### Como a aplicação funciona

Na tela de início é possível ver seu saldo e duas dicas do que fazer na aplicação, que é salvar e carregar dados e finalizar o dia

![enter image description here](https://i.imgur.com/zCqeRJN.png)

Na aba ações é possível escolher Quais e quantas ações deseja comprar

![enter image description here](https://i.imgur.com/zVWtlRT.png)

Após realizar a compra das ações você pode consultar elas no aba portfolio

![enter image description here](https://i.imgur.com/bxDzQLW.png)
Aqui é possível visualizar quantas ações você tem e qual e o valor de mercado atual delas e o mais importante você pode vendê-las, e assim como na hora de comprar sempre que você vende uma ação o seu saldo é atualizado automaticamente

Ao clicar em finalizar dia, acontece a flutuação de valores de mercado, o preço das ações pode subir ou descer

Em salvar e carregar é possível salvar seus dados atuais no banco de dados e carregar ele sempre que você entrar na aplicação.
![enter image description here](https://i.imgur.com/GZMFbTt.png)

# Tecnologias usadas no projeto

-   vue-router

-   vuetify

-   vuex
# Dificuldade que encontrei durante o desenvolvimento do projeto

Durante o desenvolvimento do projeto me deparei com diversos obstáculos o primeiro deles foi que decidi usar o vuetify que e bem diferente de usar bootstrap onde você tem apenas classes para estilizar seus projetos, no vuetify você tambem usa classes mais principalmente as tag personalizadas do vuetify que são incríveis, mais demora um pouco para se acostumar.



Além desta principal quero citar aqui algumas outras coisas que eu nunca tinha usado antes e precisei usar nesse projeto e me deram muita dor de cabeça que virou muito aprendizado depois, são essas



-   Funções de callback

-   Operadores spread

-   Mutations






# Considerações

-   Os dados da aplicação foram externalizados dentro da pasta data no arquivo stocks.js por que em um caso real esses dados viriam de uma API e para tentar fazer o mais próximo disso decidi deixar esses dados fora dos componentes




-   A Aplicação tem módulos criados dentro da pasta store para facilitar a organização, a aplicação é pequena e não necessariamente precisa disso, poderia muito bem funcionar sem mais como o objetivo é mostrar o meu conhecimento decidi fazer desta forma.