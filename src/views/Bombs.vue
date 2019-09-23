<template>
  <div class="container">
    <CardStack v-bind:cardValues="stack" @undo="reduceStack" />
    <div class="bottom">
      <div class="card-display">
        <div
          class="card square md-elevation-2"
          :class="{ wiggle: isRemove }"
          @click="isRemove ? openDeleteDialog(index) : stackCard(index)"
          v-for="(card, index) in cards"
          :key="index"
          :style="{ transform: `rotate(${cardRot}turn)` }"
        >
          <md-icon class="md-size-3x" v-if="isVisible && !isRemove">
            {{ ["emoji_nature", "new_releases"][+card.isBomb] }}
          </md-icon>
          <md-icon class="md-size-3x" v-if="isRemove">
            delete
          </md-icon>
        </div>
      </div>
      <div class="toolbox">
        <md-button
          v-on:touchstart="touchstart"
          v-on:touchend="touchend"
          v-on:click="click"
          style="margin-left: 0;"
          :class="{ 'md-primary': isVisible }"
          class="md-icon-button md-raised"
        >
          <md-icon>visibility</md-icon>
        </md-button>
        <md-button v-on:click="shuffle" class="md-icon-button md-raised">
          <md-icon>shuffle</md-icon>
        </md-button>
        <md-button
          v-on:click="resetDialog = true"
          class="md-icon-button md-raised"
        >
          <md-icon>autorenew</md-icon>
        </md-button>
        <md-button
          v-on:click="isRemove = !isRemove"
          :class="{ 'md-primary': isRemove }"
          class="md-icon-button md-raised"
        >
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </div>
    <md-dialog-confirm
      :md-active.sync="deleteDialog.active"
      md-title="Delete card?"
      md-confirm-text="Delete"
      md-cancel-text="Cancel"
      @md-cancel="deleteDialog.active = false"
      @md-confirm="deleteCard(deleteDialog.index)"
    />
    <md-dialog-confirm
      :md-active.sync="resetDialog"
      md-title="Reset game?"
      md-confirm-text="Reset"
      md-cancel-text="Cancel"
      @md-cancel="resetDialog = false"
      @md-confirm="reset"
    />
  </div>
</template>

<script>
import CardStack from "@/components/CardStack.vue";

export default {
  name: "bombs",
  components: {
    CardStack
  },
  data() {
    return {
      stack: [],
      isVisible: false,
      isRemove: false,
      isTouch: false,
      resetDialog: false,
      deleteDialog: {
        active: false,
        index: 0
      },
      cardRot: 0,
      cards: []
    };
  },
  methods: {
    reduceStack: function() {
      let n = this.stack.length - 1;
      this.cards.push(this.stack[n]);
      this.stack.splice(n, 1);
    },
    stackCard: function(index) {
      this.stack.push(this.cards[index]);
      this.cards.splice(index, 1);
    },
    openDeleteDialog: function(index) {
      this.deleteDialog.active = true;
      this.deleteDialog.index = index;
    },
    deleteCard: function(index) {
      this.cards.splice(index, 1);
      this.isRemove = false;
    },
    shuffle: function() {
      this.cardRot += 2;
      for (let i = 0; i < this.cards.length; i++) {
        let j = Math.floor(Math.random() * (this.cards.length - i)) + i;
        [this.cards[j], this.cards[i]] = [this.cards[i], this.cards[j]];
      }
    },
    reset: function() {
      this.cards = [
        { isBomb: false, stackIndex: null },
        { isBomb: false, stackIndex: null },
        { isBomb: true, stackIndex: null },
        { isBomb: false, stackIndex: null }
      ];
      this.stack = [];
    },
    touchstart: function() {
      this.isTouch = true;
      this.isVisible = true;
    },
    touchend: function() {
      this.isVisible = false;
    },
    click: function() {
      if (!this.isTouch) {
        this.isVisible = !this.isVisible;
      }
    }
  },
  mounted: function() {
    this.reset();
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
}
.bottom {
  display: flex;
}
.card-display {
  display: inline-block;
  width: 100%;
  .card {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
    width: 45%;
    margin: 0;
    margin-right: 5%;
    margin-bottom: 2.5%;
    margin-top: 2.5%;

    $back-color: #f1be51;
    // border: solid $back-color 5px;
    border-radius: 1em;
    background-color: $back-color;

    transition: transform 1s;

    .card-value {
      width: 80%;
      height: 80%;
    }
  }
}
.toolbox {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  button {
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
    &.active {
      color: $theme-color;
    }
    .icon {
      width: 85%;
      height: unset;
    }
  }
}

.wiggle {
  animation-duration: 0.1s;
  animation-name: wiggle;
  animation-iteration-count: infinite;
  // animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes wiggle {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(1deg);
  }
  75% {
    -webkit-transform: rotate(-1deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
</style>
