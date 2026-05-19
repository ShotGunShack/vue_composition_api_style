<template>
    <h1>{{ pageTitle }}</h1>

    <div>
        <form>
            <label for="itemId">Item id to find : </label>
            <input type="number" id="itemId" v-model="itemId" placeholder="Type the item id">
        </form>
    </div>
    <span>Send id to child component : {{ itemId }}</span>
    <Watcher :idFromParent="itemId" />

</template>

<script setup>

    import Watcher from './Watcher.vue';
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';


    const pageTitle = ref('');
    const route = useRoute();
    const itemId = ref(undefined);

    pageTitle.value = computed(() => { 
        console.log('Current route ===> ', route.path, route.name, route.fullPath);
        return route.name;
    });
    
</script>

