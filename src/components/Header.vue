<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>The</span>
            <span class="font-weight-light">Trader</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Inicio</v-btn>
            <v-btn flat to="/Portifolio">Portifólio</v-btn>
            <v-btn flat to="/stocks">Ações</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>Finalizar Dia</v-btn>
            <v-menu offset-y>
                <v-btn flat slot="activator">Salvar e Carregar</v-btn>
                <v-list>
                    <v-list-tile>Salvar Dados</v-list-tile>
                </v-list>

                <v-list>
                    <v-list-tile>Carregar Dados</v-list-tile>
                </v-list>


            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>

</style>