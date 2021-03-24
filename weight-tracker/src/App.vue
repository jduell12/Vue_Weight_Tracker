<template>
  <div
    id="app"
    v-bind:class="{ 'dark-mode-on': checkMode, 'dark-mode-off': !checkMode }"
  >
    <Toggle class="dark-mode-toggle" />
    <h1>Weight Tracker</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Toggle from "./components/Toggle";
export default {
  name: "App",
  components: {
    Toggle
  },
  computed: mapGetters(["checkMode"])
};
</script>

<style>
#app {
  padding: 3%;
  height: 100vh;
}

.dark-mode-on {
  background: black;
  color: white;
}

.dark-mode-off {
  background: white;
  color: black;
}

.dark-mode-toggle {
  text-align: right;
}
</style>
