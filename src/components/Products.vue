<template>
<div>
  <v-row>
    <v-col cols="3" v-for="product in products" :key="product.id">
      <v-card class="mx-auto mr-5" max-width="380px">
        <v-img :src="product.photo" height="250px" width="250px"></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>Precio: $ {{product.price}}</v-card-subtitle>

    <v-card-actions>
      <!-- <v-spacer></v-spacer> -->
      <span>
        <v-btn small text>-</v-btn>
        <v-text small>1</v-text>
        <v-btn text>+</v-btn>

      <v-btn icon @click.stop="dialog = true">
        <v-icon color="deep-purple darken-3">mdi-cart</v-icon>
      </v-btn>
      </span>
    </v-card-actions>
  </v-card>   
    </v-col>
  </v-row>

  <!-- <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">
          Producto Agregado
        </v-card-title>
        <v-col>
          <v-img :src="product.photo"></v-img>
        </v-col>
        <v-col></v-col>



        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Seguir comprando
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agregar al Carro
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
    <modal :product='product' @close-dialog='dialog = false' :dialog="dialog"></modal>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Modal from './Modal'

export default {
  name: 'Home',
  components: {
    Modal
  },
  data () {
      return {
        dialog: false,
      }
    },
    computed: {
    ...mapState(['products', 'product'])
  },
  methods: {
    ...mapActions(['getProducts', 'getProduct'])
  },
  created() {
    this.getProducts()
  }
}
</script>
