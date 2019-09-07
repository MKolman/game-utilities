<template>
  <div>
    <div class="leftAlign">
      <md-button to="/" class="md-primary md-icon-button">
        <md-icon class="md-size-3x">close</md-icon>
      </md-button>
    </div>
    <md-field>
      <md-input class="large" v-model="text" autofocus></md-input>
    </md-field>
    <HalfButton
      :to="{ name: 'display', params: { text: text || 'placeholder' } }"
      :primary="true"
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
.leftAlign {
  text-align: left;
}
input.large {
  font-size: 3em !important;
  height: 1.5em !important;
  text-align: center;
  width: 100%;
  // background-color: white;
}
</style>
