<template>
  <v-app>
    <nav-comp></nav-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavComp from './components/NavComp';

export default {
  name: 'App',

  components: {
    NavComp,
  },

  data: () => ({
    //
  }),
};
</script>
