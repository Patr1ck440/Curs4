<script setup>
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  console.log('App mounted');
});

onUpdated(() => {
  console.log('App updated');
});

import { ref } from 'vue';
const message = ref('Button clicked!');
const clickHandler = () => {
  message.value = 'Button clicked!';
};

const link = ref('https://emanuel.ro/');


const randomNumber = ref(null)
const updateRandomNumber = () => {
  randomNumber.value = Math.random();
};
</script>

<template>
  <a :href="link" target="_blank">Go to the link!</a>
<div v-if ="Math.random() > 0.5">
  <p>Random number is greater than 0.5</p>
</div>


<div v-else>
  <p>Random number is less than or equal to 0.5</p>
</div>

  <h1>You did it!</h1>
  <button @click="clickHandler">Click me</button>
  <p>{{ message }}</p>
  <br>
  <input
    type="text"
    v-model="message"
    @change="console.log('Input changed!')"
    @input="console.log('You have typed: ' + $event.target.value)"
    @keyup="console.log('Key up event detected!')"
  />
  </br>
<br>
<hr>
<h3>Display a random numbers</h3>
<button @click="updateRandomNumber">Get a random number</button>
<div v-if ="randomNumber">
  <div v-if="randomNumber >=0.5">Number is bigger or equal than 0.5</div>
  <div v-else>Number is lower than 0.5</div>
</div>
</br>


</template>

<style scoped></style>*