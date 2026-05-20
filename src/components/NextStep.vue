<template>
    <h1 @click="showConfetti">🎉 Congratulations!</h1>
    <h2>Next Step</h2>

    <ul>
        <li v-for="[key, link] in nextStepsArr" :key="key">
            <a :href="link">{{key}}</a>
        </li>
    </ul>

</template>

<script setup>
    // execute  npm install js-confetti to import it like that
    // import JSConfetti from 'js-confetti';
    //Alternative filthy solution  
    import JSConfetti from 'https://cdn.jsdelivr.net/npm/js-confetti/+esm';
    import { useRoute } from 'vue-router'; 
    import { ref } from 'vue';

    const route = useRoute();
    //Change the title of the page to the name of the route
    document.title = route.name;

    const confetti = new JSConfetti();
    const nextLinks = new Map([
        ["VUE.JS Quick Start", "https://vuejs.org/guide/quick-start.html"],
        ["VUE.JS Main Guide", "https://vuejs.org/guide/essentials/application.html"],
        ["VUE.JS Examples", "https://vuejs.org/examples/#hello-world"]
    ]);
    const nextStepsArr = ref(nextLinks);
    console.log('nextStepsArr : ', nextStepsArr.value);

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