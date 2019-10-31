<template>
  <HalfButton @click="showRandomWord()" :extraStyle="style">
    {{ countdown || txt }}
  </HalfButton>
</template>

<script>
import router from "@/router.js";

export default {
  name: "WordButton",
  props: {
    list: Object,
    selected: Array,
    txt: String
  },
  computed: {
    style: function() {
      return {
        background:
          "linear-gradient(90deg, " +
          this.colorLeft +
          " " +
          this.load * 100 +
          "%, " +
          this.colorRight +
          " " +
          this.load * 100 +
          "%)"
      };
    }
  },
  methods: {
    randomElement: function() {
      let collection = [];
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] in this.list) {
          collection = collection.concat(this.list[this.selected[i]]);
        }
      }
      if (collection.length == 0) return null;
      return collection[Math.floor(Math.random() * collection.length)];
    },
    animateButton: function() {
      let colors = [
        process.env.VUE_APP_BGCOLOR,
        process.env.VUE_APP_THEME,
        "#F1BE51",
        "#98A352"
        // "#4B9086"
      ];
      let section = 0,
        stepsTotal = 100,
        step = 0;
      this.colorRight = colors[section];
      this.colorLeft = colors[section + 1];
      this.countdown = colors.length - 1;
      this.interval = setInterval(() => {
        step += 1;
        this.load += (colors.length - 1) / stepsTotal;
        if (step > stepsTotal) {
          clearInterval(this.interval);
        }
        if (this.load > 1) {
          section += 1;
          this.colorRight = colors[section];
          this.colorLeft = colors[section + 1];
          this.load = 0;
          this.countdown = colors.length - 1 - section;
        }
      }, 3000 / stepsTotal);
    },
    showRandomWord: function() {
      let word = this.randomElement();
      if (word === null) {
        this.$emit("empty");
        return;
      }
      this.$emit("success");

      if (this.timeout) {
        this.load = 0;
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        this.colorRight = process.env.VUE_APP_BGCOLOR;
        this.countdown = null;
        this.timeout = null;
        this.interval = null;
        return;
      }
      this.timeout = setTimeout(() => {
        router.push({
          name: "display",
          params: {
            text: word + ""
          }
        });
      }, 3000);
      this.animateButton();
    }
  },
  data() {
    return {
      load: 0,
      colorLeft: process.env.VUE_APP_THEME,
      colorRight: process.env.VUE_APP_BGCOLOR,
      countdown: null,
      timeout: null,
      interval: null
    };
  }
};
</script>
