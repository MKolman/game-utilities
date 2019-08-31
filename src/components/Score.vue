<template>
  <div class="md-layout md-layout-item md-size-100">
    <h1 class="md-layout-item md-size-100">SCORE</h1>
    <HalfButton
      class="flex-button"
      v-bind:key="index"
      v-for="(score, index) in scores"
    >
      <span
        class="md-layout-item md-size-20"
        v-if="score.alt == 0"
        v-on:click="score.value -= 5"
      >
        –5
      </span>
      <span
        class="border md-layout-item md-size-20"
        v-if="score.alt == 0"
        v-on:click="score.value -= 1"
      >
        –1
      </span>
      <span
        class="md-layout-item md-size-20"
        v-if="score.alt == 1"
        v-on:click="score.alt = 0"
      >
        <md-icon class="md-size-2x">arrow_back</md-icon>
      </span>
      <span
        class="border md-layout-item md-size-20"
        v-if="score.alt == 1"
        v-on:click="scores.push({ value: score.value, alt: 0 })"
      >
        <md-icon class="md-size-2x">filter_none</md-icon>
      </span>
      <input
        class="md-input md-layout-item md-size-20"
        type="number"
        v-bind:value="score.value"
        v-on:focus="score.alt = 1"
      />
      <span
        class="md-layout-item md-size-20"
        v-if="score.alt == 0"
        v-on:click="score.value += 1"
      >
        +1
      </span>
      <span
        class="border md-layout-item md-size-20"
        v-if="score.alt == 0"
        v-on:click="score.value += 5"
      >
        +5
      </span>
      <span
        class="md-layout-item md-size-20"
        v-if="score.alt == 1"
        v-on:click="scores.splice(index, 1)"
      >
        <md-icon class="md-size-2x">delete</md-icon>
      </span>
      <span
        class="border md-layout-item md-size-20"
        v-if="score.alt == 1"
        v-on:click="score.value = 0"
      >
        <md-icon class="md-size-2x">cached</md-icon>
      </span>
    </HalfButton>
    <HalfButton v-on:click="scores.push({ value: 0, alt: 0 })">+</HalfButton>
  </div>
</template>

<script>
export default {
  name: "Score",
  data() {
    return {
      scores: []
    };
  },
  watch: {
    scores: {
      handler() {
        localStorage.setItem("scores", JSON.stringify(this.scores));
      },
      deep: true
    }
  },
  mounted() {
    this.scores = this.loadScores();
  },
  methods: {
    loadScores: function() {
      let scores = localStorage.getItem("scores");
      if (scores) {
        try {
          return JSON.parse(scores);
        } catch (e) {
          localStorage.removeItem("scores");
        }
      }
      return [{ value: 0, alt: 0 }];
    }
  }
};
</script>

<style lang="scss">
.flex-button .md-button-content {
  display: flex;
  height: 100%;
  span {
    align-self: center;
  }
}
.border {
  // border-right: $bg-color 2px solid;
  border-left: $bg-color 2px solid;
}
/* Hide HTML5 Up and Down arrows. */
.md-input {
  text-align: center;
  font-size: 1em;
  width: 20%;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
