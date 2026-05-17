<template>
    <h1>Conditionnal Rendering</h1>
    <button @click="isVisible = !isVisible">
        {{ isVisible ? 'Hide Awesome' : 'Show Awesome' }} Content
    </button>
    <p v-if="isVisible">Vue is awesome!</p>
    <p v-else>Oh no 😢</p>
</template>

<script setup>
    import { ref } from 'vue';

    const isVisible = ref(true);
</script>