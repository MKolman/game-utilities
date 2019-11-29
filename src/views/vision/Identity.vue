<template>
  <div>
    <div>
      <md-button
        @click="round -= 1"
        class="md-icon-button"
        style="vertical-align: middle"
      >
        <md-icon class="md-size-2x">chevron_left</md-icon>
      </md-button>
      <span class="md-title" style="vertical-align: middle">
        Round {{ round }}
      </span>
      <md-button
        @click="round += 1"
        class="md-icon-button"
        style="vertical-align: middle"
      >
        <md-icon class="md-size-2x">chevron_right</md-icon>
      </md-button>
    </div>
    <div>
      <md-icon v-if="reveal" class="md-size-10x">
        {{ ["brightness_high", "brightness_medium", "brightness_low"][myRole] }}
      </md-icon>
      <md-icon v-if="!reveal" class="md-size-10x">
        security
      </md-icon>
      <br />
      <span v-if="reveal" class="md-title">
        You are {{ ["bad", "neutral", "good"][myRole] }}
      </span>
      <span v-if="!reveal" class="md-title">
        Touch to reveal
      </span>
      <br />
      <md-button @touchstart="reveal = true" @touchend="reveal = false">
        <md-icon class="md-size-2x">visibility</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import { random, roomToSeed } from "@/data/random.js";
const rules = {
  // num_players: [good, bad, neutral]
  4: [1, 1, 2],
  5: [2, 1, 2],
  6: [3, 2, 1],
  7: [3, 2, 2],
  8: [4, 3, 1],
  9: [4, 3, 2],
  10: [5, 4, 1]
};
export default {
  name: "visionIdentity",
  data() {
    return {
      round: 1,
      reveal: false
    };
  },
  computed: {
    myRole() {
      return 1 + this.getRoles(this.round)[this.$route.params.player];
    }
  },
  methods: {
    getRoles(round) {
      let seed = roomToSeed(this.$route.params.room);
      let number = +this.$route.params.number;
      let roles = [];
      for (let i = 0; i < rules[number][0]; i++) roles.push(1);
      for (let i = 0; i < rules[number][1]; i++) roles.push(-1);
      for (let i = 0; i < rules[number][2]; i++) roles.push(0);
      for (let i = 0; i < number; i++) seed = random(seed + number);
      for (let i = 0; i < round; i++) seed = random(seed + round);

      for (let i = 0; i < number; i++) {
        seed = random(seed + round);
        let toPlace = i + (seed % (number - i));
        [roles[i], roles[toPlace]] = [roles[toPlace], roles[i]];
      }
      return roles;
    }
  }
};
</script>

<style lang="scss">
.md-icon.md-size-10x {
  width: 300px;
  height: 300px;
  font-size: 300px !important;
}
</style>
