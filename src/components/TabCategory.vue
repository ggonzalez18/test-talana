<template>
  <v-row justify="space-around">
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          color="teal lighten-2"
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
          <v-list-item-title v-text="item.name"></v-list-item-title>

          <v-list-item-action>
          <v-icon @click="filterByCategory(item)">mdi-arrow-right</v-icon>
          </v-list-item-action>
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
   ...mapActions(['getCategories', 'filterByCategory'])
 },
 created() {
   this.getCategories()
 }
}
</script>

<style>

</style>