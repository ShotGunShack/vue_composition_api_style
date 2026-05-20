<template>

  <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/declarative-rendering">Declarative Rendering</router-link>
      </li>
      <li>
        <router-link to="/attribute-binding">Attribute Binding</router-link>
      </li>
      <li>
        <router-link to="/event-listeners">Event Listeners</router-link>
      </li>
      <li>
        <router-link to="/two-way-bindings">Two Way Bindings</router-link>
      </li>
      <li>
        <router-link to="/conditionnal-rendering">Conditionnal Rendering</router-link>
      </li>
      <li>
        <router-link to="/list-rendering">List Rendering</router-link>
      </li>
      <li>
        <router-link to="/lifecycle-template-ref">Lifecycle Template Ref</router-link>
      </li>
      <li>
        <router-link to="/watcher">Watchers</router-link>
      </li>
      <li>
        <router-link to="/nesting-component">Nesting ChildComponent into ParentComponent</router-link>
      </li>
      <li>
        <router-link to="/props">Props</router-link>
      </li>
      <li>
        <router-link to="/Emits">Emits</router-link>
      </li>
      <li>
        <router-link to="/Slots">Slots</router-link>
      </li>
      <li>
        <router-link to="/next-step">Next Step</router-link>
      </li>
    </ul>
  <router-view/>
</template>

<style scoped>

    ul {
        display: flex;
        justify-content: center;
        gap: 1em;
        list-style-type: none;
        font-size: large;
    }

    li {
        cursor: pointer;
        border : 1px groove #44dab9;
        border-radius: 5px;
        padding: 0.5em;
        
    }

    li:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
        font-weight: 600;
        transition: 4s;
    }
    
    a {
        text-decoration: none;
        color: hsla(160, 100%, 37%, 1);
        font-weight: lighter;
    }

</style>