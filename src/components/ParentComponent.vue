<template>
    <h1>{{ pageTitle }}</h1>

    <div>
        <form @submit.prevent="triggerGetRecordById2ChildMethodCall">
            <label for="itemId">Item id to find : </label>
            <input type="number" id="itemId" v-model="itemId" placeholder="Type the item id">
            <button>Call child componentmethod getRecordById2</button>
        </form>
    
        <span>Send id to child component : {{ itemId }}</span>
        
        <div>
            <h2>Parent component receiving record from child component through emits</h2>
            <pre v-if="!recordFromChild || recordFromChild === undefined">No record from child component received yet</pre>
            <!-- <pre v-else :id="{childToParentMsg : isChildRecReceived}">{{ recordFromChild }}</pre> -->
            <pre v-else :id="childRecReceivedId">{{ recordFromChild }}</pre>
        </div>

    </div>

    <Watcher 
        :idFromParent="itemId" 
        ref="watcherComponent" 
        @child-record-sent-to-parent="getRecordFromChildComponent"
    />

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
    const recordFromChild = ref();
    const isChildRecReceived = ref(false);
    const childRecReceivedId = ref();

    pageTitle.value = computed(() => { 
        console.log('Current route ===> ', route.path, route.name, route.fullPath);
        return route.name;
    });

    const triggerGetRecordById2ChildMethodCall = () => {
        console.log('Trigger getRecordById2 child component method with id :'+itemId.value);
        if(watcherComponent.value !== undefined) {
            watcherComponent.value.getRecordById2();
        }
    }

    const getRecordFromChildComponent = (childRec) => {
        console.log('Record received from child component through emits : ', childRec);
        recordFromChild.value = childRec;
        // isChildRecReceived.value = true;
        childRecReceivedId.value = 'childToParentMsg';
    }
    
</script>

<style scoped>

    #childToParentMsg {
        color : white;
        background-color : green;
    }
</style>

