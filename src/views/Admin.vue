<template>
  <v-container>
    <v-btn color="teal darken-3
" dark absolute right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(item , index) in items" :key="index">
        <v-card class="ma-5" max-width="350px">
          <v-container>
            <v-list-item-content>
              <v-list-item-title class="headline items-title">{{item.name}}</v-list-item-title>
              <h3>₹ {{item.price}}</h3>
            </v-list-item-content>
          </v-container>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-chip v-if="!items.awailabilty" color="green " class="white--text">Instock</v-chip>
            <v-spacer></v-spacer>
            <v-chip># {{item.tag}}</v-chip>
            <v-btn small class="ml-2 white--text" color="black">EDIT</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Admin",

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
  }),
};
</script>

<style scoped>
.items-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
