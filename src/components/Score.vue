<template>
  <div>
    <h1>SCORE</h1>
    <span class="btn scr" v-bind:key="index" v-for="(score, index) in scores">
      <span
        v-if="score.alt == 0"
        v-on:click="score.value -= 5"
        >–5</span
      ><span
        v-if="score.alt == 0"
        v-on:click="score.value -= 1"
        class="border"
        >–1</span
      ><span
        v-if="score.alt == 1"
        v-on:click="score.alt = 0"
        ><font-awesome-icon icon="backward" /></span
      ><span
        v-if="score.alt == 1"
        v-on:click="scores.push({value: score.value, alt: 0})"
        class="border"
        ><font-awesome-icon v-bind:icon="{ prefix: 'far', iconName: 'clone' }" /></span
      ><input
        type="number"
        v-bind:value="score.value"
        v-on:focus="score.alt = 1" /><span
        v-if="score.alt == 0"
        v-on:click="score.value += 1"
        class="border"
        >+1</span
      ><span
        v-if="score.alt == 0"
        v-on:click="score.value += 5"
        >+5</span
      ><span
        v-if="score.alt == 1"
        v-on:click="scores.splice(index, 1)"
        class="border"
        ><font-awesome-icon v-bind:icon="{ prefix: 'far', iconName: 'trash-alt' }" /></span
      ><span
        v-if="score.alt == 1"
        v-on:click="score.value = 0"
        ><font-awesome-icon  icon="undo"/></span>
    </span>
    <span class="btn" v-on:click="scores.push({value: 0, alt: 0})"><span> + </span></span>
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
       handler(){
        localStorage.setItem('scores', JSON.stringify(this.scores));
       },
       deep: true
    }
  },
  mounted() {
    this.scores = this.loadScores();
  },
  methods: {
    loadScores: function() {
      let scores = localStorage.getItem('scores');
      if (scores) {
        try {
          return JSON.parse(scores);
        } catch(e) {
          localStorage.removeItem('scores');
        }
      }
      return [{value: 0, alt: 0}];
    }
  }
};
</script>

<style scoped lang="scss">
.btn.scr {
  cursor: default;
  display: inline-block;
  > span {
    cursor: pointer;
    width: 19%;
    display: inline-block;
    height: 100%;
    font-size: smaller;
    padding-top: 0.33em;
    &.border {
      border-right: $bg-color 2px solid;
      border-left: $bg-color 2px solid;
    }
  }
  > input {
    width: 20%;
    margin: 0;
    padding: 0;
    height: 100%;
    display: inline-block;
    position: relative;
    vertical-align: top;
    border: none;
    font-size: 1em;
    text-align: center;
  }
}
/* Hide HTML5 Up and Down arrows. */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
