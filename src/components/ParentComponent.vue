<template>
    <!-- <h1 ref="pageTitle">Dynamic title</h1> -->
    <h1>{{ pageTitle }}</h1>
    
    <Watcher />

</template>


<script setup>

    import Watcher from './Watcher.vue';
    import { useRoute } from 'vue-router';
    // import router from '@/router';
    import { ref, onMounted, onUpdated, computed } from 'vue';


    const pageTitle = ref('');
    const route = useRoute();
    // const currentRoute = ref(router.currentRoute);
    // const nestedComponentRouteName = ref(router.getRoutes()[9].name);
    // const propsRouteName = ref(router.getRoutes()[10].name);


    pageTitle.value = computed(() => {
        console.log('Current route ===> ', route.path, route.name, route.fullPath);
        switch(route.fullPath) {
            case '/props' :
            case '/nesting-component' : 
                console.log('Current route is : '+route.name); 
                return route.name;
        }
    });    
    
    // onUpdated(() => {

    //     console.log("ROUTER : ", router);
    //     console.log("ROUTER routes: ", router.getRoutes());
    //     console.log("ROUTER route Nesting Component : ", router.getRoutes()[9].name);
    //     console.log("ROUTER route Props: ", router.getRoutes()[10].name);
    //     console.log("ROUTER current route ", router.currentRoute);
        
    //     console.log('Current route is : ', currentRoute._value.fullPath);
    //     if(currentRoute._value.fullPath === '/nesting-component') {
    //         console.log('Current route is Nesting Component');
    //         pageTitle.value.textContent = nestedComponentRouteName.value;
    //     } else if (currentRoute._value.fullPath === '/props') {
    //         console.log('Current route is Props');
    //         pageTitle.value.textContent = propsRouteName.value;
    //     }

    // });


</script>