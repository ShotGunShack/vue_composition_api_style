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