<template>
  <v-container>
    <v-card class max-width="350px" color="blue darken-1" dark>
      <v-card-title class="headline">Shopping Cart</v-card-title>

      <v-card-text>
        <h2>Items {{totalItems}}</h2>

        <h2>
          <span class="text-small">approx</span>
          ₹{{approxPrice}}
        </h2>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="orderWhatspp()" text>
          <img src="../assets/whatsapp.svg" class="whatsapp-logo" alt />Order
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-simple-table class="mt-3">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item , index) in items" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { bus } from "../main.js";
export default {
  name: "Cart",

  data: () => ({
    items: [],
    approxPrice: 0,
    totalItems: 0,
    redirectURL: "http://wa.me/+919048814964/?text=",
    redirectText: "",
  }),
  methods: {
    totalPriceCal() {
      this.items.forEach((el) => {
        this.approxPrice = this.approxPrice + el.price * el.quantity;
      });
    },
    totalItemsCal() {
      this.items.forEach((el) => {
        if (el.name) {
          this.totalItems++;
        }
      });
    },
    orderWhatspp() {
      this.items.forEach((el) => {
        this.redirectText =
          this.redirectText + `${el.name} = ${el.quantity}%20`;
      });
      window.open(
        `http://wa.me/+919048814964/?text=*Items*%0A${this.redirectText}`
      );
    },
  },
  created() {
    bus.$on("addCart", (cart) => {
      this.items = cart;
      this.totalPriceCal();
      this.totalItemsCal();
    });
  },
};
</script>

<style scoped>
.whatsapp-logo {
  width: 25px;
  margin-right: 4px;
}
.text-small {
  font-size: 15px;
}
</style>
