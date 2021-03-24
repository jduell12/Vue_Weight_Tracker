<template>
  <div id="app" class="dark-mode-on">
    <Toggle class="dark-mode-toggle" />
    <h1>Weight Tracker</h1>
  </div>
</template>

<script>
import Toggle from "./components/Toggle";
export default {
  name: "App",
  components: {
    Toggle
  }
};
</script>

<style>
#app {
  margin: 3%;
}

.dark-mode-toggle {
  text-align: right;
}
</style>
