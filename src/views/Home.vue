<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(item , index) in items" :key="index">
        <v-card class="ma-2" max-width="350px">
          <v-container>
            <v-list-item-content>
              <v-list-item-title class="headline items-title">
                {{item.name}}
                <v-chip small># {{item.tag}}</v-chip>
              </v-list-item-title>
              <h3>₹ {{item.price}}</h3>
            </v-list-item-content>
          </v-container>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn @click="item.qty--" color="red" small>
              <v-icon color="white">mdi-minus</v-icon>
            </v-btn>
            <v-btn @click="item.qty++" color="success" small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-chip>qty: {{item.qty}}</v-chip>
            <v-btn small class="ml-2" @click="addCart(item.name, item.qty)" color="primary">Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { bus } from "../main.js";
export default {
  name: "Home",

  data: () => ({
    items: [
      { name: "banana", price: 34, awailability: true, tag: "fruite", qty: 0 },
      {
        name: "tomato",
        price: 10,
        awailability: true,
        tag: "vegetable",
        qty: 0,
      },
      { name: "milk", price: 34, awailability: true, tag: "dairy", qty: 0 },
      { name: "padha ari", price: 20, awailability: true, tag: "rice", qty: 0 },
      { name: "biscuts", price: 48, awailability: true, tag: "bakery", qty: 0 },
    ],
    cart: [],
  }),
  methods: {
    addCart(name, qty) {
      this.cart.push({ name: name, quantity: qty });
      //alert(`your item ${name} no. ${qty} added`);
    },
  },
  beforeDestroy() {
    bus.$emit("addCart", this.cart);
  },
};
</script>

<style scoped>
.items-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
