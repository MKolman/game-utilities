<template>
  <div class="container">
    <Score />
  </div>
</template>

<script>
import Score from "@/components/Score.vue";

export default {
  name: "scores",
  components: {
    Score
  }
};
//   rules:
</script>
<style lang="scss">
// body {
//   counter-reset: hcounter;
// }
// h1:before {
//   content: counter(hcounter) ".\0000a0\0000a0";
//   counter-increment: hcounter;
// }
</style>
