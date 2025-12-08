<script setup>
import { useTask } from '@/stores/task';
const taskStore = useTask();

const addNewTask = () => {
    taskStore.addTask({
        title: newTaskTitle.value,
        done: false,
        favorite: false,
    });
    isAddingTask.value = false;
}

const newTaskTitle = ref('');


import{ref} from 'vue';
const isAddingTask =ref(false);

</script>


<template>
    <div v-if="!isAddingTask">
    <button
     type ="button" class ="border bg-blue-500 text-white px-2 rounded"
     @click="isAddingTask =true">
    Add new tasks
    </button>
    </div>

    <div v-else>
        <input
        type="text"
        palceholder ="Enter text description"
        class ="border border-gray-300 rouunded px-2 py-1 w-3/4 ml-4"
        v-model="newTaskTitle"
        />
        <button
     type ="button" class ="border bg-green-500 text-white px-2 rounded"
     @click="addNewTask">
    Save
    </button>
         <button
     type ="button" class ="border bg-red-500 text-white px-2 rounded"
     @click="isAddingTask =false">
    Cancel
    </button>
    </div>

</template>