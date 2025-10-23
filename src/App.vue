<script setup>
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  console.log('App mounted');
});

onUpdated(() => {
  console.log('App updated');
});

import { ref } from 'vue';
const message = ref('Hello from App.3!');
const clickHandler = () => {
  console.log('Button clicked!');
};
</script>

<template>
  <h1>You did it!</h1>
  <button @click="clickHandler">Click me</button>
  <p>{{ message }}</p>
  <br>
  <input
    type="text"
    @change="console.log('Input changed!')"
    @input="console.log('You have typed: ' + $event.target.value)"
    @keyup="console.log('Key up event detected!')"
  />
  </br>
</template>

<style scoped></style>
