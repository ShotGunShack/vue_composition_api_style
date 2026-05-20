<template>
    <main id="main-content">

        <h1>Conditionnal Rendering</h1>
        <div>
        
            <button @click="isVisible = !isVisible">
                {{ isVisible ? 'Hide Awesome' : 'Show Awesome' }} Content
            </button>
            <p v-if="isVisible">Vue is awesome!</p>
            <p v-else>Oh no 😢</p>

            <h2>Conditionnal Rendering Definition</h2>
            <p :id="desc">The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.</p>

            <div class="code">
                <span style="color:#E1E4E8;">&lt;</span>
                <span style="color:#85E89D;">h1</span>
                <span style="color:#B392F0;"> v-if</span>
                <span style="color:#E1E4E8;">=</span>
                <span style="color:#9ECBFF;">"</span>
                <span style="color:#E1E4E8;">awesome</span>
                <span style="color:#9ECBFF;">"</span>
                <span style="color:#E1E4E8;">&gt;Vue is awesome!&lt;/</span>
                <span style="color:#85E89D;">h1</span>
                <span style="color:#E1E4E8;">&gt;</span>
            </div>

            <p :id="desc">You can use the v-else directive to indicate an "else block" for v-if:</p>
            <div class="code">
                <code>
                    <span style="color:#E1E4E8;">&lt;</span>
                    <span style="color:#85E89D;">button</span>
                    <span style="color:#E1E4E8;"> @</span>
                    <span style="color:#B392F0;">click</span>
                    <span style="color:#E1E4E8;">=</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">awesome </span>
                    <span style="color:#F97583;">=</span>
                    <span style="color:#F97583;"> !</span>
                    <span style="color:#E1E4E8;">awesome</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">&gt;Toggle&lt;/</span>
                    <span style="color:#85E89D;">button</span>
                    <span style="color:#E1E4E8;">&gt;</span>
                    <span style="color:#E1E4E8;">&lt;</span>
                    <span style="color:#85E89D;">h1</span>
                    <span style="color:#B392F0;"> v-if</span>
                    <span style="color:#E1E4E8;">=</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">awesome</span>
                    <span style="color:#9ECBFF;">"</span>
                    <span style="color:#E1E4E8;">&gt;Vue is awesome!&lt;/</span>
                    <span style="color:#85E89D;">h1</span>
                    <span style="color:#E1E4E8;">&gt;</span>
                    
                    <span style="color:#E1E4E8;">&lt;</span>
                    <span style="color:#85E89D;">h1</span>
                    <span style="color:#B392F0;"> v-else</span>
                    <span style="color:#E1E4E8;">&gt;Oh no 😢&lt;/</span>
                    <span style="color:#85E89D;">h1</span>
                    <span style="color:#E1E4E8;">&gt;</span>
                </code>
            </div>
        </div>
    </main>
</template>

<script setup>
    import { ref } from 'vue';

    const isVisible = ref(true);
    const desc = ref('description');
</script>