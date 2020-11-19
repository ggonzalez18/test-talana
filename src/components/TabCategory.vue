<template>
  <v-row justify="space-around">

    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          color="deep-purple darken-3"
          class="white--text ma-5"
          v-bind="attrs"
          large
          v-on="on"
        >
          Categorías
          <v-icon class="ml-5">mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in itemsCategory" :key="item.id" link>
          <v-list-item-icon></v-list-item-icon>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
 computed: {
   ...mapState(['itemsCategory'])
 },
 methods: {
   ...mapActions(['getCategories'])
 },
 created() {
   this.getCategories()
 }
}
</script>

<style>

</style>