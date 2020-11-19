<template>
<div>
  <v-row>
    <v-col cols="3" v-for="product in products" :key="product.id">
      <v-card class="mx-auto mr-3" max-width="380px">
        <v-img :src="product.photo" height="200px"></v-img>

        <v-card-title>{{ product.name }}</v-card-title>

        <v-card-subtitle>Precio: $ {{product.price}}</v-card-subtitle>

    <v-card-actions>
      <!-- <v-spacer></v-spacer> -->
      <span>
        <v-btn small text>-</v-btn>
        <v-text small>1</v-text>
        <v-btn text>+</v-btn>

      <v-btn icon @click.stop="dialog = true">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      </span>
    </v-card-actions>
  </v-card>   
    </v-col>
  </v-row>

  <v-row justify="center">
    <!-- <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Open Dialog
    </v-btn> -->

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>

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
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  data () {
      return {
        dialog: false,
      }
    },
    computed: {
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
