<template>
  <div class="home md-layout">
    <HalfButton to="/draw"> DRAW </HalfButton>
    <HalfButton to="/type"> TYPE </HalfButton>
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
    <WordButton
      :list="words[lang]"
      :selected="selectedWords[lang]"
      @empty="dropdownShadowSize = 20"
      @success="dropdownShadowSize = 0"
      txt="SHOW"
    />

    <Dropdown
      style="transition: box-shadow 0.2s"
      :style="{ boxShadow: dropdownBoxShadow }"
      v-model="selectedWords[lang]"
      :options="words[lang]"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import WordButton from "@/components/WordButton.vue";
import Dropdown from "@/components/Dropdown.vue";
import words from "@/data/wordlist/data.json";
import { saveLocal, loadLocal } from "@/data/storage.js";

let selectedWordsDefault = {
  si: ["unique.txt", "alias.txt"],
  en: ["unique.txt", "vision.txt", "alias/classic.txt", "alias/duet.txt"]
};
export default {
  name: "home",
  components: {
    WordButton,
    Dropdown
  },
  data() {
    return {
      lang: "en",
      words: words,
      selectedWords: loadLocal("selectedWords", selectedWordsDefault),
      dropdownShadowSize: 0
    };
  },
  watch: {
    lang: function() {
      localStorage.setItem("lang", this.lang);
    },
    selectedWords: {
      handler: function() {
        saveLocal("selectedWords", this.selectedWords);
      },
      deep: true
    }
  },
  computed: {
    dropdownBoxShadow() {
      return (
        process.env.VUE_APP_THEME +
        " 0px 0px " +
        this.dropdownShadowSize +
        "px 0px"
      );
    }
  },
  mounted() {
    this.lang = localStorage.getItem("lang") || "en";
    this.selectedWords = loadLocal("selectedWords", selectedWordsDefault);
  }
};
</script>

<style lang="scss">
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
</style>
