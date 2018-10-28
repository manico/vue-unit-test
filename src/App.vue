<template>
  <div id="app">
    <OutcomeButton />
  </div>
</template>

<script>
import OutcomeButton from './components/OutcomeButton.vue';

export default {
  name: 'App',
  components: {
    OutcomeButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
