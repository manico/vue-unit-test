<template>
  <div id="app">
    <OutcomeButton v-bind="outcomeButtonMock" />
  </div>
</template>

<script>
import { random } from 'lodash';
import OutcomeButton from './components/OutcomeButton.vue';

export default {
  name: 'App',
  components: {
    OutcomeButton,
  },
  data() {
    return {
      outcomeButtonMock: {
        id: '10/250/4000',
        label: 'Arsenal 222',
        odd: 1.45,
        fontSize: 2,
        width: 400,
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.outcomeButtonMock.odd = random(1.01, 2.95, true);
    }, 2000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
