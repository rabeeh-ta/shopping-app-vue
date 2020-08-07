<template>
  <v-toolbar max-height="60" dense>
    <router-link :to="{name:'Home'}">
      <img class="logo-nav" src="../assets/logo.png" alt />
    </router-link>

    <v-toolbar-title class="black--text">{{$route.name}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{name:'Admin'}">
      <v-btn icon>
        <v-icon color="black">mdi-pencil</v-icon>
      </v-btn>
    </router-link>
    <router-link :to="{name:'Cart'}">
      <v-btn icon>
        <v-icon color="black">mdi-cart</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-nav {
  width: 30px;
  margin: 4px;
}
</style>
