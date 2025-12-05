<script setup>
import GreenFlower from "@/flowers/GreenFlower.vue";
import WaterTheFlowers from "@/flowers/WaterTheFlowers.vue";

</script>

<template>
    <h3>Growth</h3>
    <hr />

    <div class="flex justify-between w-5/6">
        <WaterTheFlower
            v-for="flower in [0, 1, 2, 3]"
            :key="flower"
        ></WaterTheFlower>
    </div>

    <div class="flex justify-between w-5/6">
        <GreenFlower v-for="flower in [0, 1, 2, 3]" :key="flower" />
    </div>

    <hr />
    <h3>Earth</h3>
</template>

<style>
@import "tailwindcss";
@import "bootstrap-icons";
</style>