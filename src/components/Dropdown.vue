<template>
  <md-field class="md-layout-item md-size-45 md-small-size-95">
    <md-select class="md-elevation-1" v-model="localValue" multiple>
      <md-option
        :value="itemName"
        :key="itemName"
        v-for="itemName in Object.keys(options)"
      >
        {{ formatListName(itemName) }} ({{ options[itemName].length }})
      </md-option>
    </md-select>
  </md-field>
</template>
<script>
export default {
  name: "Dropdown",
  props: {
    options: Object,
    value: Array
  },
  data() {
    return {
      localValue: this.value
    };
  },
  watch: {
    localValue(val) {
      this.$emit("input", val);
    },
    value(val) {
      this.localValue = val;
    }
  },
  methods: {
    formatListName(listName) {
      listName = listName
        .replace("_", " ")
        .replace(/\b\w/g, l => l.toUpperCase());
      return listName;
    }
  }
};
</script>
<style scoped lang="scss">
.md-field {
  margin-left: 2.5%;
  padding-top: 0;
  margin-top: 6px;
  height: 4.5em;
}
.md-select {
  padding: 1em;
}
</style>
