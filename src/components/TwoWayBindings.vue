<template>
    <main id="main-content">
    
        <h1>Form Bindings</h1>
        <div>
            
            <input type="text" placeholder="Type some text in" v-bind:value="text" @input="updateText" />
            <p>You typed: {{ text }}</p>

            <p>Above form bindings is applied using v-bind and v-on directives together to have a 2 way binding</p>

            <input type="text" placeholder="Type some text in" v-model="textModel" />
            <p>You typed: {{ textModel }}</p>

            <p>Above form bindings is applied using v-model directives together to have a 2 way binding allowing
            seamless synchronization between the input and the data model without the use of additional event handlers.</p>
            
            <h2>Form Binding | Two way Binding Definition</h2>
            <p :id="desc">
                When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. 
                It can be cumbersome to manually wire up value bindings and change event listeners:
            </p>
            <div class="code">
                <code>
                    <span style="color:#E1E4E8;">&lt;</span>
                    <span style="color:#85E89D;">input</span>
                    <span style="color:#E1E4E8;">  :</span>
                    <span style="color:#B392F0;">value</span>
                    <span style="color:#E1E4E8;">=</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">text</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">  @</span>
                    <span style="color:#B392F0;">input</span>
                    <span style="color:#E1E4E8;">=</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#FFAB70;">event</span>
                    <span style="color:#F97583;"> =&gt;</span>
                    <span style="color:#E1E4E8;"> text </span>
                    <span style="color:#F97583;">=</span>
                    <span style="color:#E1E4E8;"> event.target.value</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">&gt;</span>
                </code>
            </div>

            <p>The v-model directive helps us simplify the above to:</p>
            <div class="code">
                <code>
                    <span style="color:#E1E4E8;">&lt;</span>
                    <span style="color:#85E89D;">input</span>
                    <span style="color:#B392F0;"> v-model</span>
                    <span style="color:#E1E4E8;">=</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">text</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">&gt;</span>
                </code>
            </div>
        </div>
    </main>

</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    //Change the title of the page to the name of the route
    document.title = route.name;

    const text = ref('');
    const textModel = ref('');
    const desc = ref('description');

    function updateText(event) {
        text.value = event.target.value;
    }

</script>