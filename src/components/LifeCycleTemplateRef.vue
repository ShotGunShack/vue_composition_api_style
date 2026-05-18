<template>
    <h1>Lifecycle Template Rendering</h1>
    <p ref="pElmtRef">Template rendering</p>

</template>

<script setup>

    import { ref, onMounted } from 'vue';

    const pElmtRef = ref(null);

    onMounted(() => {
        setTimeout(() => {
            console.log('pElmtRef : ', pElmtRef.value);
            pElmtRef.value.textContent = "Template ref rendered through onMounted method";
        }, 5000);
    });

</script>