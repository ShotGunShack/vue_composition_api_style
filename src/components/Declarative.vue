<template>
    <main id="main-content">

        <h1>Declarative Rendering</h1>
        <div>
            <h2>Property declaration using reactive</h2>
            <p>
                Counter using reactive (limited on object | array | built-in types => Map Set) : {{ counter.count }}
            </p>
            <p>
                <del>Falsy reactive declaration : {{ reactiveFalsy }}</del> 
                <dfn>
                    => the value is not reactive due to its type (not an object) and raise warning in the browser console
                </dfn>
            </p>
            
            <h2>Property declaration using ref</h2>
            <p>
                Message using ref : {{ message }}
            </p>
            <p>
                Counter using ref : {{ myCounter }}
            </p>
            <p>
                <dfn>
                    => the property declared with ref havve the specificity to take any type of value and are reactive, 
                    but to access the value of a ref property in the template, you don't need to use .value, 
                    Vue will automatically unwrap it for you.
                </dfn>
            </p>
        </div>
    </main>

</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
//Change the title of the page to the name of the route
document.title = route.name;

const counter = reactive({
    count: 0
});

//WRONG use of reactive
const reactiveFalsy = reactive('test reactive falsy');

//ref can take any type of value
const message = ref("Reactive property using ref");
const myCounter = ref(0);




</script>