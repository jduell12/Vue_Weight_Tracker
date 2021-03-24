<template>
  <div class="toggle">
    <p>Darkmode</p>
    <div
      @click="changeStyle"
      v-bind:class="{ dark: checkMode, light: !checkMode }"
      class="toggle-btn"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Toggle",
  methods: {
    ...mapActions(["changeMode"]),
    changeStyle() {
      this.changeMode();
    }
  },
  computed: mapGetters(["checkMode"])
};
</script>

<style scoped>
.toggle {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
p {
  margin-right: 2%;
}

.toggle-btn {
  width: 10px;
  height: 10px;
  margin-top: 7px;
}

.dark {
  background: #1d7303;
  border: 1px solid white;
}

.light {
  background: white;
  border: 1px solid black;
}
</style>
