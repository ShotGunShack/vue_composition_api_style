<template>
    <h1>Event Listener</h1>
    <p>Counter value : {{ count }}</p>
    <button v-on:click="increment" :class="buttonClass">Increment</button>
    <button @click="decrement" :class="buttonClass">Decrement</button>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0);
    const buttonClass = ref('button');

    const increment = () => {
        count.value++;
    };

    function decrement() {
        count.value--;
    }
</script>

<style scoped>

    .button {
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
    }

</style>