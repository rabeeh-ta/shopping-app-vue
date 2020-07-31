<template>
  <v-container>
    <p>cart section</p>
    <ul v-for="(item , index) in items" :key="index">
      <li>{{item.name}} => {{item.quantity}}</li>
    </ul>
  </v-container>
</template>

<script>
import { bus } from "../main.js";
export default {
  name: "Cart",

  data: () => ({
    items: [],
  }),
  methods: {
    addCart(name, qty) {
      this.cart.push({ name: name, quantity: qty });
    },
  },
  created() {
    bus.$on("addCart", (cart) => {
      this.items = cart;
    });
  },
};
</script>

<style scoped>
.items-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
