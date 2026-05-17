<template>
    <h1 v-bind:class="titleClass">Attribute Binding</h1>
</template>

<script setup>
    import { ref } from 'vue';

    const titleClass = ref('title');

    console.log("Attribute h1 class bound : "+titleClass.value);

</script>

<style>
    .title {
        color: red;
        font-size: 2rem;
    }
</style>