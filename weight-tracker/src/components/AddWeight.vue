<template>
  <div id="add-weight">
    <h3>Log Weight:</h3>
    <form @submit="onSubmit">
      <input type="date" name="date" v-model="date" />
      <input type="number" name="weight" v-model="weight" />
      <select v-model="units" name="label">
        <option value="lb">Lb</option>
        <option value="kg">Kg</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddWeight",
  data: function() {
    return {
      date: new Date().toISOString().substr(0, 10),
      weight: 0,
      units: "lb"
    };
  },
  methods: {
    ...mapActions(["addWeight"]),
    onSubmit() {
      let weightObj = {
        date: this.date,
        weight: this.weight,
        units: this.units
      };
      this.addWeight(weightObj);
    }
  }
};
</script>

<style scoped>
#add-weight {
  margin-top: 3%;
  margin-left: 5%;
  display: flex;
  align-items: center;
}

form {
  width: 70%;
}
input {
  margin-right: 1%;
  margin-left: 1%;
}
</style>
