<template>
  <v-row justify="space-around">

    <v-menu :rounded="rounded" offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          color="orange"
          class="white--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
          Categorías
          <v-icon class="ml-5">mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in items" :key="item" link
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
import {mapState} from 'vuex'
export default {
 computed: {
   ...mapState(['items'])
 }
}
</script>

<style>

</style>