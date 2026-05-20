<script setup>
  import MenuComponent from './components/MenuComponent.vue';
</script>

<template>

  <MenuComponent />

</template>

<style>
  body {
    margin:0 2em;
    font-size : 1em
  }

  #main-content {
    padding: 2em;
    /* max-width: 800px; */
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  h2 {
    margin : 1em 2em;
  }

  p {
    padding: 1rem 2rem;
  }

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

  .code {
    background-color: #24292e;
    width: auto;
    padding: 1rem;
    border-radius: 5px;
  }

</style>
