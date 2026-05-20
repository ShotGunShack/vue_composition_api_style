<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <router-link to="/">Home</router-link>
  <router-link to="/declarative-rendering">Declarative Rendering</router-link>
  <router-link to="/attribute-binding">Attribute Binding</router-link>
  <router-link to="/event-listeners">Event Listeners</router-link>
  <router-link to="/two-way-bindings">Two Way Bindings</router-link>
  <router-link to="/conditionnal-rendering">Conditionnal Rendering</router-link>
  <router-link to="/list-rendering">List Rendering</router-link>
  <router-link to="/lifecycle-template-ref">Lifecycle Template Ref</router-link>
  <router-link to="/watcher">Watchers</router-link>
  <router-link to="/nesting-component">Nesting ChildComponent into ParentComponent</router-link>
  <router-link to="/props">Props</router-link>
  <router-link to="/Emits">Emits</router-link>
  <router-link to="/Slots">Slots</router-link>
  <router-view />


</template>

<!-- <style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style> -->
