<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(item , index) in items" :key="index">
        <v-card class="ma-2" max-width="350px">
          <v-container>
            <v-list-item-content>
              <v-list-item-title class="headline items-title">
                {{item.name}}
                <v-chip small outlined># {{item.tag}}</v-chip>
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
            <v-btn
              small
              class="ml-2"
              @click="addCart(item.name, item.qty,item.price)"
              color="primary"
            >Add</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import db from "../assets/fbconfig.js";
import { bus } from "../main.js";
export default {
  name: "Home",

  data: () => ({
    items: [],
    cart: [],
  }),
  methods: {
    addCart(name, qty, price) {
      this.cart.push({ name: name, quantity: qty, price: price });
      this.items.forEach((item) => {
        item.qty = 0;
      });
    },
  },
  beforeDestroy() {
    bus.$emit("addCart", this.cart);
  },
  created() {
    db.collection("shop")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let item = doc.data();
          item.id = doc.id;
          item.qty = 0;
          this.items.push(item);
        });
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
