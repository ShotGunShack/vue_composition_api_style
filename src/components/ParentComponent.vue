<template>
    <h1>{{ pageTitle }}</h1>

    <div>
        <form>
            <label for="itemId">Item id to find : </label>
            <input type="number" id="itemId" v-model="itemId" placeholder="Type the item id">
            <button type="button" @click="triggerGetRecordById2ChildMethodCall">Call child componentmethod getRecordById2</button>
        </form>
    </div>
    <span>Send id to child component : {{ itemId }}</span>
    <Watcher :idFromParent="itemId" ref="watcherComponent"/>

</template>

<script setup>

    import Watcher from './Watcher.vue';
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';


    const pageTitle = ref('');
    const route = useRoute();
    const itemId = ref(undefined);
    const watcherComponent = ref();
    console.log('Watcher component ref : ', watcherComponent.value);

    pageTitle.value = computed(() => { 
        console.log('Current route ===> ', route.path, route.name, route.fullPath);
        return route.name;
    });

    const triggerGetRecordById2ChildMethodCall = (e) => {
        e.preventDefault();
        // console.log('EVENT :',e);
        console.log('Trigger getRecordById2 child component method with id :'+itemId.value);
        if(watcherComponent.value !== undefined) {
            watcherComponent.value.getRecordById2();
        }
    }
    
</script>

