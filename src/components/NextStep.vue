<template>
    <h1 @click="showConfetti">🎉 Congratulations!</h1>
    <h2>Next Step</h2>

</template>

<script setup>
    // execute  npm install js-confetti to import it like that
    // import JSConfetti from 'js-confetti';
    //Alternative filthy solution  
    import JSConfetti from 'https://cdn.jsdelivr.net/npm/js-confetti/+esm';
    import { useRoute } from 'vue-router'; 

    const route = useRoute();
    //Change the title of the page to the name of the route
    document.title = route.name;

    const confetti = new JSConfetti();

    function showConfetti() {
        confetti.addConfetti()
    }

    showConfetti()
</script>

<style scoped>
    h1 {
        text-align: center;
        cursor: pointer;
        margin-top: 3em;
    }
</style>