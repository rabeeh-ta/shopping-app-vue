<template>
  <v-container>
    <p>cart section</p>
  </v-container>
</template>

<script>
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
      // this.cart.forEach((item) => {
      //   console.log(item.name, item.quantity);
      // });
    },
  },
};
</script>

<style scoped>
.items-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
