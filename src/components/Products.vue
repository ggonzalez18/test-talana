<template>
  <div>
   <p>{{products}}</p>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {

  },computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>
