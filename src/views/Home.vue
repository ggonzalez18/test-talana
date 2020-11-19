<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="4">
          <tab-category></tab-category>
        </v-col>
        
        <v-col cols="6">
          <products></products>
        </v-col>
      </v-row>
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
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>
