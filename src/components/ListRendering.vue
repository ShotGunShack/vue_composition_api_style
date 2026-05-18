<template>
    <h1>List Rendering</h1>
    <h2>Tasks list</h2>
    <ol>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.text }} {{ todo.text.length }}  <!--=> {{ todo.id }} -->
            <button @click="removeTask(todo.id)">Remove task</button>
        </li>
    </ol>

    <input type="text" placeholder="Add a task" v-model="newTask" />
    <span v-if="isNewTaskEmpty" :class="newTaskErrMsgClass">{{ newTaskErrMsg }}</span>

    <div>
        <button @click="addTask">Add task</button>
    </div>

    <h2>List Rendering Definition</h2>
    <p id="description">We can use the v-for directive to render a list of items based on an array. 
        The v-for directive requires a special syntax in the form of item in items, 
        where items is the source data array and item is an alias for the array element being iterated on:</p>

    <div class="code">
        <code>
            <span style="color:#F97583;">const</span>
            <span style="color:#79B8FF;"> items</span>
            <span style="color:#F97583;"> =</span>
            <span style="color:#B392F0;"> ref</span>
            <span style="color:#E1E4E8;">([{ message: </span><span style="color:#9ECBFF;">'Foo'</span>
            <span style="color:#E1E4E8;"> }, { message: </span>
            <span style="color:#9ECBFF;">'Bar'</span><span style="color:#E1E4E8;"> }])</span>
        </code>
    </div>

    <div class="code">
        <code>
            <span style="color:#E1E4E8;">&lt;</span>
            <span style="color:#85E89D;">li</span>
            <span style="color:#B392F0;"> v-for</span>
            <span style="color:#E1E4E8;">=</span>
            <span style="color:#9ECBFF;">"</span>
            <span style="color:#E1E4E8;">item </span>
            <span style="color:#F97583;">in</span>
            <span style="color:#E1E4E8;"> items</span>
            <span style="color:#9ECBFF;">"</span>
            <span style="color:#E1E4E8;">&gt;</span>
            <span style="color:#E1E4E8;">  &#123;&#123; item.message &#125;&#125;</span>
            <span style="color:#E1E4E8;">&lt;/</span>
            <span style="color:#85E89D;">li</span>
            <span style="color:#E1E4E8;">&gt;</span>
        </code>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const todoId = ref(0);
const newTask = ref(null);
const newTaskErrMsg = ref("");
const newTaskErrMsgClass = ref("");
const isNewTaskEmpty = ref(false);
const todos = ref( [
    { id: ++todoId.value, text: 'Explore Vue used through CDN' },
    { id: ++todoId.value, text: 'Explore Vue used through Options API' },
    { id: ++todoId.value, text: 'Explore Vue used through Vite' },
    { id: ++todoId.value, text: 'Explore Vue used through Composition API' },
    { id: ++todoId.value, text: 'Explore Vue SPA' },
    { id: ++todoId.value, text: 'Explore Vue SFC' }
]);

const addTask = () => {
    if (!newTask.value || !newTask.value.trim()) {
        isNewTaskEmpty.value = true;
        newTaskErrMsg.value = "Task cannot be empty";
        newTaskErrMsgClass.value = "errorTaskMsg";
        return;
    }

    // Reset error state
    isNewTaskEmpty.value = false;
    newTaskErrMsg.value = undefined;
    newTaskErrMsgClass.value = undefined;

    todos.value.push({
        id: ++todoId.value,
        text: newTask.value.trim()
    });

    //Reset input value
    newTask.value = null;
}

const removeTask = (id) => {
    todos.value = todos.value.filter(todo =>{ 
        return todo.id !== id;
    });
}
</script>

<style>
    .errorTaskMsg {
        color: red;
        padding: 5px;
        font-weight: 700;
    }

    button {
        margin: 5px;
    }

    input {
        margin: 5px;
        padding: 5px;
    }
</style>