<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,400i,500,700|Roboto:300,400,400i,500,700');
/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-grid.min.css'); */
@import '~rbc-wm-framework-vuejs/dist/wm/components/Core/style.min.css';
</style>
