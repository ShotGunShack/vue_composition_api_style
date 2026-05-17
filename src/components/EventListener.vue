<template>
    <h1>Event Listener</h1>
    <p>Counter value : {{ count }}</p>
    <button v-on:click="increment">Increment</button>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0);

    const increment = () => {
        count.value++;
    };
</script>