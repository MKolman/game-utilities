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
      timeout: null,
      pressTimes: []
    };
  },
  methods: {
    handleSpam() {
      let now = new Date();
      this.pressTimes.push(now);
      if (this.pressTimes.length > 10) {
        if (now - this.pressTimes[0] < 5000) {
          this.$emit("spam");
          this.pressTimes = [];
        } else {
          this.pressTimes.splice(0, 1);
        }
      }
    },
    handleMousedown() {
      this.handleSpam();
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
