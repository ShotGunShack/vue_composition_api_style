<template>
    <h1>{{ pageTitle }}</h1>
    
    <Watcher />

</template>

<script setup>

    import Watcher from './Watcher.vue';
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';


    const pageTitle = ref('');
    const route = useRoute();


    pageTitle.value = computed(() => { 
        console.log('Current route ===> ', route.path, route.name, route.fullPath);
        return route.name;
    });    
    
</script>

