<template>
  <div class="md-layout-item md-size-50 md-small-size-100">
    <md-button
      class="md-layout-item md-size-95 md-raised md-primary"
      style="font-size: 3em; height: 1.5em;"
      @click="$emit('click')"
      :to="to"
      :style="extraStyle"
    >
      <slot></slot>
    </md-button>
  </div>
</template>
<script>
export default {
  name: "HalfButton",
  props: {
    to: [String, Object],
    extraStyle: Object
  }
};
</script>
