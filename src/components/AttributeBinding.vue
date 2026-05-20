<template>
    <main id="main-content">

        <h1 v-bind:class="titleClass">Attribute Binding</h1>
        <div>
            
            <h2 :class="definitionClass">Attribute Binding Definition</h2>
            <p :id="desc">
                Attribute binding is a feature in Vue.js that allows you to bind HTML attributes to data properties in your Vue components. 
                This means that you can dynamically set the value of an attribute based on the state of your component, 
                making it easier to create interactive and dynamic user interfaces.
            </p>
            <dfn :id="def">
                A common need for data binding is manipulating an element's class list and inline styles. 
                Since class and style are both attributes, we can use v-bind to assign them a string value dynamically, 
                much like with other attributes. 
                However, trying to generate those values using string concatenation can be annoying and error-prone. 
                For this reason, Vue provides special enhancements when v-bind is used with class and style. 
                In addition to strings, the expressions can also evaluate to objects or arrays.
            </dfn>
        </div>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute} from 'vue-router';

    const route = useRoute();
    //Change the title of the page to the name of the route
    document.title = route.name;

    const titleClass = ref('title');
    const definitionClass = ref('definition');
    const desc = ref('description');
    const def = ref('definition');

    console.log("Attribute h1 class bound : "+titleClass.value);
    console.log("Attribute p id bound : "+desc.value);
    console.log("Attribute dfn id bound : "+def.value);

</script>

<style scoped>
    .title {
        color: red;
        font-size: 2rem;
    }
    .definition {
        color: blue;
        font-size: 1.5rem;
    }

    /*KEEP THIS 2 ID BELOW DUE TO SCOPED ATTRIBUTEEVEN THOUGH IT IS DEFINE in App.vue global style */
    #description {
        max-width: 800px;
        margin: 2rem 0;
        padding: 1rem 2rem;
    }

    #definition{
        display: inline-block;
        padding: 1rem 2rem;
        width: 800px;
    }

</style>