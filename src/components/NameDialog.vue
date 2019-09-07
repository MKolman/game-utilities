<template>
  <md-dialog
    :md-fullscreen="false"
    :md-active="nameDialog"
    @md-clicked-outside="$emit('close')"
  >
    <md-dialog-title>Name</md-dialog-title>
    <md-dialog-content>
      <md-field>
        <md-input
          autofocus
          :placeholder="'Player ' + num"
          v-model="tempName"
        ></md-input>
      </md-field>
    </md-dialog-content>
    <md-dialog-actions v-if="!isNew">
      <md-button class="md-primary md-raised" @click="$emit('delete')"
        >Delete</md-button
      >
      <md-button @click="$emit('close')">Close</md-button>
      <md-button
        class="md-primary"
        @click="$emit('close', tempName || 'Player ' + num)"
        >Save</md-button
      >
    </md-dialog-actions>
    <md-dialog-actions v-if="isNew">
      <md-button @click="$emit('close')">Close</md-button>
      <md-button
        class="md-primary"
        @click="$emit('close', tempName || 'Player ' + num)"
        >Create</md-button
      >
    </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  name: "ScoreDialog",
  props: {
    name: String,
    nameDialog: Boolean,
    num: Number,
    isNew: Boolean
  },
  data() {
    return {
      tempName: ""
    };
  },
  watch: {
    name() {
      this.reset();
    },
    nameDialog() {
      this.reset();
    }
  },
  mounted() {
    this.tempName = this.name;
  },
  methods: {
    reset() {
      this.tempName = this.name;
    },
    save() {
      this.$emit("close", this.addition);
    },
    close() {
      this.$emit("close");
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
