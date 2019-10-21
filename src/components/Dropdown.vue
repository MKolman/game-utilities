<template>
  <md-field class="md-layout-item md-size-45 md-small-size-95">
    <md-select class="md-elevation-1" v-model="localValue" multiple>
      <md-option :value="item.key" :key="item.key" v-for="item in items">
        {{ item.name }} ({{ item.length }})
      </md-option>

      <md-optgroup
        :label="group.name + ' (' + group.length + ')'"
        :key="group.key"
        v-for="group in itemGroups"
      >
        <md-option
          :value="item.key"
          :key="item.key"
          v-for="item in group.items"
        >
          {{ item.name }} ({{ item.length }})
        </md-option>
      </md-optgroup>
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
  computed: {
    items() {
      let result = [];
      for (let key in this.options) {
        if (!key.includes("/")) {
          result.push({
            key: key,
            name: this.formatListName(key),
            length: this.options[key].length
          });
        }
      }
      result.sort((a, b) => {
        return a.key < b.key ? -1 : 1;
      });
      return result;
    },
    itemGroups() {
      let result_dict = {};
      for (let key in this.options) {
        if (key.includes("/")) {
          let group_key = key.split("/")[0];
          result_dict[group_key] = result_dict[group_key] || [];
          result_dict[group_key].push({
            key: key,
            name: this.formatListName(key),
            length: this.options[key].length
          });
        }
      }
      let result = [];
      for (let key in result_dict) {
        result_dict[key].sort((a, b) => {
          return a.key < b.key ? -1 : 1;
        });
        result.push({
          key: key,
          name: this.formatListName(key),
          items: result_dict[key],
          length: result_dict[key].reduce((t, x) => {
            return t + x.length;
          }, 0)
        });
      }
      return result;
    }
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
    getItems(srcData) {
      let result = [];
      for (let key in srcData) {
        if (key.endsWith(".txt")) {
          result.push({
            key: key,
            name: this.formatListName(key),
            length: srcData[key].length
          });
        }
      }
      result.sort((a, b) => {
        return a.key < b.key ? -1 : 1;
      });
      return result;
    },
    formatListName(listName) {
      listName = listName
        .replace(".txt", "")
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
