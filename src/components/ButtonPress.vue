<template>
  <md-button
    :class="{ 'md-primary': timeout !== null }"
    @mousedown="handleMousedown()"
    @touchstart="handleMousedown()"
    @mouseup="handleMouseup()"
  >
    <slot></slot>
  </md-button>
</template>

<script>
export default {
  name: "ButtonPress",
  data() {
    return {
      timeout: null
    };
  },
  methods: {
    handleMousedown() {
      if (this.timeout === null) {
        this.timeout = setTimeout(() => {
          this.timeout = null;
          this.$emit("long");
        }, 300);
      }
    },
    handleMouseup() {
      if (this.timeout !== null) {
        this.$emit("click");
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }
};
</script>
<style lang="scss">
.md-button {
  transition: 0.5s;
}
</style>
