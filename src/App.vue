<script setup>


import { RouterLink, RouterView } from 'vue-router'
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
  console.log('App mounted');
});

onUpdated(() => {
  console.log('App updated');
});

import { ref } from 'vue';
import YouDidIt from './components/YouDidIt.vue';
const message = ref('Button clicked!');
const clickHandler = () => {
  message.value = 'Button clicked!';
};

const link = ref('https://emanuel.ro/');

const students = ref([
  {name: 'Emanuel', grade: 9},
  {name: 'Ana', grade: 10},
  {name: 'Ion', grade: 8},
  {name: 'Maria', grade: 9.5}
]);


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


  <YouDidIt />

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

<br><i class="bi bi-airplane"></i></br>



<h3>
  Test v-for
</h3>
<ul>
  <li v-for="(student,index) in students" :key="index">
    Name:  {{student.name}},
    Grade: {{student.grade}}  
  </li>
</ul>



</template>

<style>
@import "bootstrap-icons";
@import 'tailwindcss';
</style>