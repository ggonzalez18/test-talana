<template>
<div>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="400" v-for="product in products" :key="product.id">
      <v-card>
        <v-card-title class="headline">Producto Agregado</v-card-title>
        <v-col cols="6">
            <v-img :src="product.photo"></v-img>
        </v-col>
        <v-col cols="6">
          <v-card-text>{{product.name}}</v-card-text>
          <v-card-text>SKU: {{product.code}}</v-card-text>
          <v-card-text>Price: $ {{product.price}}</v-card-text>
          <v-card-text>Cantidad:</v-card-text>
          <v-card-text>sub-Total: $</v-card-text>

        </v-col>

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
  </v-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
      dialog: Boolean,
      product: Object
  },
  methods: {
      closeModal(){
          this.$emit('close-dialog')
      }
  }
}
</script>
