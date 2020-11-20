<template>
  <div>
    <v-app-bar color="purple darken-4" dense dark height="100">
        <v-toolbar-title class="mr-1 display-1 font-weight-black"><v-icon x-large>mdi-cat</v-icon>
          MyPet</v-toolbar-title>
        <v-spacer></v-spacer>

       <v-col cols="12" sm="6" md="3">
          <v-text-field
            class="mt-6"
            label="Bucador de producto o categoría"
            outlined
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      <cart></cart>
    </v-app-bar>
  </div>
</template>

<script>
import Cart from '@/components/Cart'
import {mapActions} from 'vuex'
  export default {
    components: {
      Cart
    },
  
    methods: {
      ...mapActions(['filterBySearch'])
    }
  }
</script>
