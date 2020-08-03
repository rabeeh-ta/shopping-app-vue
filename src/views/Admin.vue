<template>
  <v-container>
    <v-btn color="teal darken-3
" dark absolute right fab @click.stop="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="headline">Item Info</v-card-title>

        <v-card-text>
          <v-text-field label="Item Name" required prepend-icon="mdi-application"></v-text-field>
          <v-text-field label="Item Price" required prepend-icon="mdi-cash"></v-text-field>
          <v-text-field label="Item Tag" required prepend-icon="mdi-tag"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="(item , index) in items" :key="index">
        <v-card class="ma-2" max-width="350px">
          <v-container>
            <v-list-item-content>
              <v-list-item-title class="headline items-title">{{item.name}}</v-list-item-title>
              <h3>₹ {{item.price}}</h3>
            </v-list-item-content>
            <v-chip># {{item.tag}}</v-chip>
          </v-container>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-chip v-if="!items.awailabilty" color="green " class="white--text">Instock</v-chip>
            <v-spacer></v-spacer>

            <v-btn small class="ml-2" color="grey">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn small class="ml-2" color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
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
    dialog: false,
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
