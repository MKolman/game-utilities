<template>
  <div class="home container md-layout">
    <HalfButton
      to="/draw"
      style="font-family: 'Cookie', Helvetica, sans-serif;"
    >
      DRAW
    </HalfButton>
    <HalfButton to="/type" style="font-family: 'monospace';">
      TYPE<span class="blink">|</span>
    </HalfButton>
    <h1 class="md-layout-item md-size-100">
      RANDOM WORD
      <span style="white-space: nowrap">
        <input
          v-model="lang"
          class="lang"
          type="radio"
          name="lang"
          id="lang-en"
          value="en"
          checked=""
        /><label for="lang-en"><img src="img/en_flag.svg" alt="en"/></label
        ><input
          v-model="lang"
          class="lang"
          type="radio"
          name="lang"
          id="lang-si"
          value="si"
        /><label for="lang-si"><img src="img/si_flag.svg" alt="si"/></label>
      </span>
    </h1>
    <WordButton v-bind:list="words[lang]['unique']" txt="UNIQUE" />
    <WordButton v-bind:list="words[lang]['alias']" txt="ALIAS" />
    <Score />
    <md-button
      class="md-primary md-layout-item md-size-100"
      style="margin-top: 1em; font-size: 3em;"
      to="/rules"
      >Rules</md-button
    >
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Score from "@/components/Score.vue";
import Footer from "@/components/Footer.vue";
import WordButton from "@/components/WordButton.vue";
import words from "@/data/words.json";

export default {
  name: "home",
  components: {
    Score,
    Footer,
    WordButton
  },
  data() {
    return {
      lang: "en",
      words: words
    };
  },
  watch: {
    lang: function() {
      localStorage.setItem("lang", this.lang);
    }
  },
  mounted() {
    this.lang = localStorage.getItem("lang") || "en";
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cookie");
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: $theme-color,
    // The primary color of your application
      accent: #98a352 // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
// Lang
input.lang {
  display: none;
}
input[type="radio"].lang + label img {
  height: 0.6em;
  // border: 3px solid rgba(0, 0, 0, 0);
  // border-radius: 4px;
  opacity: 0.5;
  margin-left: 0.1em;
}
input[type="radio"].lang:checked + label img {
  // border-color: $theme-color;
  opacity: 1;
}

.blink {
  animation-duration: 0.8s;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
