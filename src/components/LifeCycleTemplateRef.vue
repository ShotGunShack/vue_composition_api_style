<template>
    <main id="main-content">
        <h1>Lifecycle Template Rendering</h1>
        <div>

            <p ref="pElmtRef">Template rendering</p>
            <h2>Lifecycle Template Rendering Definition</h2>
            <p id="description">
                Each Vue component instance goes through a series of initialization steps when it's created - for example, 
                it needs to set up data observation, compile the template, mount the instance to the DOM, 
                and update the DOM when data changes. 
                Along the way, it also runs functions called lifecycle hooks, 
                giving users the opportunity to add their own code at specific stages.
            </p>
            <a href="https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram" target="_blank">Lifecycle Hooks Diagram</a>
        </div>
    </main>

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