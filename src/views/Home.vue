<template>
  <div class="mt-5">
    <v-container>
      <v-row>
        <v-col cols="3">
          <tab-category></tab-category>
        </v-col>
        
        <v-col cols="9">
          <products></products>
        </v-col>
     </v-row>

      <div class="text-center mt-12">
      <v-pagination
        v-model="page"
        :length="10"
        circle
        color="deep-purple darken-3"
      ></v-pagination>
     </div>

    </v-container>
  </div>
</template>

<script>
import TabCategory from '@/components/TabCategory'
import Products from '@/components/Products'

import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    TabCategory,
    Products
  },
  data () {
      return {
        page: 1,
      }
    },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>
