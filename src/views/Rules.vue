<template>
  <div id="rules" class="container">
    <Rule v-bind:img="img" v-bind:key="img.id" v-for="img in images" />
    <HalfButton style="margin-top: 1em;" to="/" :primary="true">
      Play Now
    </HalfButton>
  </div>
</template>

<script>
import Rule from "@/components/Rule.vue";

export default {
  name: "rules",
  components: {
    Rule
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: "img/unique/unique_rules_1.svg",
          desc: "Pick a random word and show it to other players."
        },
        {
          id: 2,
          src: "img/unique/unique_rules_2.svg",
          desc: "Other players write and compare hints for you."
        },
        {
          id: 3,
          src: "img/unique/unique_rules_3.svg",
          desc: "They remove duplicate hints."
        },
        {
          id: 4,
          src: "img/unique/unique_rules_4.svg",
          desc: "You can look at the remaining hints."
        },
        {
          id: 5,
          src: "img/unique/unique_rules_5.svg",
          desc: "You can guess the word or pass."
        }
      ]
    };
  }
};
//   rules:
</script>
<style lang="scss">
body {
  counter-reset: hcounter;
}
</style>
