<script>
import { ref } from 'vue';

export default {
  name: 'YouDidIt',
  setup() {
    const message = ref('Button clicked!');
    const clickHandler = () => {
      message.value = 'Button clicked!';
    };

    return {
      message,
      clickHandler
    };
  }
};
</script>

<template>
  <h1>You did it!</h1>
  <button @click="clickHandler">Click me</button>
  <p>{{ message }}</p>
  <br />
  <input
    type="text"
    v-model="message"
    @change="console.log('Input changed!')"
    @input="console.log('You have typed: ' + $event.target.value)"
    @keyup="console.log('Key up event detected!')" />
</template>