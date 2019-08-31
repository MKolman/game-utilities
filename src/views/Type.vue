<template>
  <div class="container md-layout">
    <md-button
      to="/"
      class="md-primary md-icon-button"
      style="margin-top: 1em;"
    >
      <md-icon class="md-size-3x">close</md-icon>
    </md-button>
    <md-field class="md-layout-item md-size-95">
      <md-input class="large" v-model="text" autofocus></md-input>
    </md-field>
    <HalfButton
      :to="{ name: 'display', params: { text: text || 'placeholder' } }"
    >
      SHOW
    </HalfButton>
  </div>
</template>

<script>
export default {
  name: "type",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 0;
  justify-content: center;
}
input.large {
  font-size: 3em !important;
  height: 1.5em !important;
  // background-color: white;
}
</style>
