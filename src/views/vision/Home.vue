<template>
  <div>
    <md-steppers md-vertical :md-active-step.sync="currentStep">
      <md-step id="roomStep" md-label="Join a room">
        <div class="md-layout">
          <HalfButton
            :key="name"
            v-for="name in roomNames"
            :primary="selected.room == name"
            @click="
              selected.room = name;
              currentStep = 'numberStep';
            "
            :extraStyle="{'text-transform': 'none', 'font-family': 'monospace'}"
          >
            {{ name }}
          </HalfButton>
        </div>
      </md-step>
      <md-step id="numberStep" md-label="Number of players">
        <div class="md-layout">
          <HalfButton
            :key="num"
            v-for="num in [3, 4, 5, 6, 7, 8]"
            :primary="selected.number == num"
            @click="
              selected.number = num;
              currentStep = 'playerStep';
            "
          >
            {{ num }}
          </HalfButton>
        </div>
      </md-step>
      <md-step id="playerStep" md-label="Your player number">
        <div class="md-layout">
          <HalfButton
            :key="num"
            v-for="num in playerNumbers"
            :primary="selected.player == num"
            @click="selected.player = num"
          >
            {{ num + 1 }}
          </HalfButton>
        </div>
        <HalfButton
          :primary="true"
          :disabled="!stepsCompleted"
          :to="{ name: 'visionIdentity', params: selected }"
        >
          Play now
        </HalfButton>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import router from "@/router.js";
import { saveLocal, loadLocal } from "@/data/storage.js";
import { alphabet, random } from "@/data/random.js";
const frequency = 300000;
export default {
  name: "visionHome",
  data() {
    return {
      now: 0,
      selected: { room: "", number: 0, player: -1 },
      currentStep: "roomStep"
    };
  },
  watch: {
    selected: {
      handler: function() {
        saveLocal("vision", this.selected);
      },
      deep: true
    }
  },
  computed: {
    roomNames() {
      let result = [];
      for (let i = -2; i < 3; i++) {
        result.push(this.genRoomName(this.now + frequency * i));
      }
      return result;
    },
    playerNumbers() {
      let result = [];
      for (let i = 0; i < this.selected.number; i++) {
        result.push(i);
      }
      return result;
    },
    stepsCompleted() {
      return (
        this.selected.room.length == 4 &&
        this.selected.number > 0 &&
        this.selected.player >= 0 &&
        this.selected.player < this.selected.number
      );
    }
  },
  mounted() {
    this.now = 2 * Math.floor((new Date() - 0) / frequency / 2);
    this.selected = loadLocal("vision", this.selected);
    if (!this.$route.params.redo && this.stepsCompleted) {
      router.push({
        name: "visionIdentity",
        params: this.selected
      });
    }
  },
  methods: {
    genRoomName(num) {
      let seed = this.now + num * frequency;
      let result = "";
      for (let i = 0; i < 4; i++) {
        seed = random(seed);
        result += alphabet[seed % alphabet.length];
      }
      return result;
    }
  }
};
</script>
<style lang="scss"></style>
