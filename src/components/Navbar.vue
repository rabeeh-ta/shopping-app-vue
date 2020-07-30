<template>
  <v-toolbar max-height="60" dense>
    <img class="logo-nav" src="../assets/logo.png" alt />
    <v-toolbar-title class="black--text">Home</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon color="black">mdi-cart</v-icon>
    </v-btn>
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
