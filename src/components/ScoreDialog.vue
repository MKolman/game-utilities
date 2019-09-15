<template>
  <md-dialog
    :md-fullscreen="false"
    :md-active="scoreDialog"
    @md-clicked-outside="close()"
  >
    <md-dialog-title
      >{{ name }}: {{ value }} + {{ addition }} =
      {{ value + addition }}</md-dialog-title
    >
    <md-dialog-content>
      <span :key="mul" v-for="mul in [1, -1]">
        <md-button
          class="md-icon-button md-raised"
          @click="addition += num * mul"
          :key="num * mul"
          v-for="num in [1, 2, 5, 10, 20]"
        >
          {{ mul > 0 ? "+" : "-" }}{{ num }}
        </md-button>
        <br />
      </span>
      <!-- <md-checkbox class="md-primary" v-model="setDefault">
        Set {{ addition }} as default
      </md-checkbox> -->
    </md-dialog-content>
    <md-dialog-actions>
      <md-button @click="close()">Close</md-button>
      <md-button class="md-primary" @click="save()">Save</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: "ScoreDialog",
  props: {
    name: String,
    value: Number,
    scoreDialog: Boolean
  },
  data() {
    return {
      addition: 0,
      setDefault: false
    };
  },
  methods: {
    save() {
      this.$emit("close", this.addition);
      this.addition = 0;
    },
    close() {
      this.$emit("close");
      this.addition = 0;
    }
  }
};
</script>

<style scoped lang="scss">
button.md-icon-button.md-raised {
  margin-left: 0;
  margin-bottom: 8px;
}
div.md-checkbox {
  margin-bottom: 0;
  margin-top: 8px;
}
.md-dialog-content {
  padding-bottom: 8px;
}
</style>
