<template>
  <div id="scores">
    <h1>SCORE</h1>
    <md-table style="width:100%">
      <md-table-row :key="index" v-for="(score, index) in scores">
        <md-table-cell
          ><md-button @click="score.nameDialog = true" class="cell md-raised">
            {{ score.name }}
          </md-button></md-table-cell
        >
        <md-table-cell
          ><md-button class="cell md-raised">
            {{ score.value }}
          </md-button></md-table-cell
        >
        <md-table-cell
          ><md-button @click="score.value -= 1" class="cell md-raised">
            <md-icon>remove</md-icon>
          </md-button></md-table-cell
        >
        <md-table-cell
          ><md-button @click="score.scoreDialog = true" class="cell md-raised">
            <md-icon>add</md-icon>
          </md-button></md-table-cell
        >
        <ScoreDialog v-bind="score" @close="closeScore(score, $event)" />
        <NameDialog
          v-bind="score"
          :isNew="false"
          @close="closeName(score, $event)"
          @delete="scores.splice(index, 1)"
        />
      </md-table-row>
    </md-table>
    <md-button
      @click="newUserDialog = true"
      class="md-fab-bottom-center md-fab md-primary"
    >
      <md-icon>person_add</md-icon>
    </md-button>
    <NameDialog
      :nameDialog="newUserDialog"
      :num="scores.length"
      :isNew="true"
      @close="createUser($event)"
    />
  </div>
</template>

<script>
import ScoreDialog from "@/components/ScoreDialog.vue";
import NameDialog from "@/components/NameDialog.vue";
import { saveLocal, loadLocal } from "@/data/storage.js";
export default {
  name: "scores",
  components: {
    ScoreDialog,
    NameDialog
  },
  computed: {
    openDialog: {
      get: function() {
        return this.changeNameIndex !== -1;
      },
      set: function(value) {
        if (value === false) {
          this.changeNameIndex = -1;
        }
      }
    }
  },
  data() {
    return {
      scores: [],
      newUserDialog: false
    };
  },
  mounted() {
    this.scores = loadLocal("scores", []);
    for (let i = 0; i < this.scores.length; i++) {
      if (this.scores[i].nameDialog === undefined)
        this.scores[i].nameDialog = false;
      if (this.scores[i].scoreDialog === undefined)
        this.scores[i].scoreDialog = false;
    }
  },
  watch: {
    scores: {
      handler: function() {
        saveLocal("scores", this.scores);
      },
      deep: true
    }
  },
  methods: {
    closeScore(score, amount, c) {
      console.log(c, amount, score);
      score.scoreDialog = false;
      if (amount) {
        score.value += amount;
      }
    },
    closeName(score, name) {
      score.nameDialog = false;
      if (name) {
        score.name = name;
      }
    },
    createUser(name) {
      this.newUserDialog = false;
      if (name) {
        console.log("CREATING", this.scores);
        this.scores.push({
          name: name,
          value: 0,
          nameDialog: false,
          scoreDialog: false
        });
      }
    }
  }
};
</script>
<style lang="scss">
#scores {
  .md-table-cell {
    border: none !important;
    background: none !important;
  }
  .md-table-cell-container {
    padding: 5px !important;
    height: 100%;
    .cell {
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;

      font-size: 1.5em;
    }
    .md-button {
      min-width: unset;
      margin: 0;
    }
  }
}
</style>
