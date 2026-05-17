<template>
    <h1>Event Listener</h1>
    <p>Counter value : {{ count }}</p>
    <button v-on:click="increment" :class="buttonClass">Increment</button>
    <button @click="decrement" :class="buttonClass">Decrement</button>

    <p :id="desc">
        We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events 
        and run some JavaScript when they're triggered. 
        The usage would be v-on:click="handler" or with the shortcut, @click="handler".
        The handler value can be one of the following:
        Inline handlers: Inline JavaScript to be executed when the event is triggered (similar to the native onclick attribute).
        Method handlers: A property name or path that points to a method defined on the component.
    </p>
    <h2>Inline Handlers</h2>
    <p>In line handlers are useful for simple operations that don't require complex logic.</p>
    <!-- <pre> -->
        <div class="code">
            <code>
                <span style="color:#F97583;">const </span> 
                <span style="color:#79B8FF;">count </span> 
                <span style="color:#F97583;"> = </span>
                <span style="color:#B392F0;"> ref</span> 
                <span style="color:#79B8FF;">(0)</span>;
            </code>
        </div>
    <!-- </pre> -->
     <br/>
    <!-- <pre> -->
        <div class="code">
            <code>
                <span style="color:#E1E4E8;">&lt;</span>
                <span style="color:#85E89D;">button</span>
                <span style="color:#E1E4E8;"> @</span>
                <span style="color:#B392F0;">click</span>
                <span style="color:#E1E4E8;">=</span>
                <span style="color:#9ECBFF;">"</span>
                <span style="color:#E1E4E8;">count</span>
                <span style="color:#F97583;">++</span>
                <span style="color:#9ECBFF;">"</span>
                <span style="color:#E1E4E8;">&gt;Add 1&lt;/</span>
                <span style="color:#85E89D;">button</span>
                <span style="color:#E1E4E8;">&gt;</span>
            </code>
        </div>
    <!-- </pre> -->
     
    <h2>Method Handlers</h2>
    
    <p>Method handlers are more suitable for complex logic that may involve multiple steps or conditions.</p>
    <div class="code">

        <code>
            <span style="color:#F97583;">const</span>
            <span style="color:#79B8FF;"> name</span>
            <span style="color:#F97583;"> =</span>
            <span style="color:#B392F0;"> ref</span>
            <span style="color:#E1E4E8;">(</span>
            <span style="color:#9ECBFF;">'Vue.js'</span>
            <span style="color:#E1E4E8;">)</span>
            <br/>
            <span style="color:#F97583;">function</span>
            <span style="color:#B392F0;"> greet</span>
            <span style="color:#E1E4E8;">(</span>
            <span style="color:#FFAB70;">event</span>
            <span style="color:#E1E4E8;">) {</span>
            <br/>
            &emsp;<span style="color:#B392F0;">  alert</span>
            <span style="color:#E1E4E8;">(</span>
            <span style="color:#9ECBFF;">`Hello ${</span>
            <span style="color:#E1E4E8;">name</span>
            <span style="color:#9ECBFF;">.</span>
            <span style="color:#E1E4E8;">value</span>
            <span style="color:#9ECBFF;">}!`</span>
            <span style="color:#E1E4E8;">)</span>
            <br/>
            &emsp;<span style="color:#6A737D;">  // `event` is the native DOM event</span>
            <br/>
            &emsp;<span style="color:#F97583;">  if</span><span style="color:#E1E4E8;"> (event) {</span>
            <br/>
            &emsp;&emsp;&emsp;<span style="color:#B392F0;">    alert</span><span style="color:#E1E4E8;">(event.target.tagName)</span>
            <br/>
            &emsp;<span style="color:#E1E4E8;">  }</span>
            <br/>
            <span >}</span>
        </code>
    </div>
    <br/>
    <div class="code">
        <code>
            <span style="color:#E1E4E8;">&lt;</span>
            <span style="color:#85E89D;">button</span>
            <span style="color:#E1E4E8;"> @</span>
            <span style="color:#B392F0;">click</span>
            <span style="color:#E1E4E8;">=</span>
            <span style="color:#9ECBFF;">"</span>
            <span style="color:#E1E4E8;">greet</span>
            <span style="color:#9ECBFF;">"</span>
            <span style="color:#E1E4E8;">&gt;Greet&lt;/</span>
            <span style="color:#85E89D;">button</span>
            <span >&gt;</span>
        </code>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const count = ref(0);
    const buttonClass = ref('button');
    const desc = ref('description');

    const increment = () => {
        count.value++;
    };

    function decrement() {
        count.value--;
    }
</script>

<style scoped>

    .button {
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
    }

    #description {
        max-width: 500px;
        margin: 2rem 0;
        padding: 1rem 2rem;
    }

    .code {
        background-color: #24292e;
        width: fit-content;
        padding: 1rem;
        border-radius: 5px;
    }

</style>