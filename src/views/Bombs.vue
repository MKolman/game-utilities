<template>
  <div class="container">
    <CardStack v-bind:cardValues="stack" @undo="reduceStack"/>
    <div class="bottom">
      <div class="card-display">
        <div
          class="card square md-elevation-2"
          v-on:click="stackCard(index)"
          v-for="(card, index) in cards"
          v-bind:key="index"
          v-bind:style="{transform: `rotate(${cardRot}turn)`}"
        >
          <md-icon class="md-size-3x" v-if="isVisible">
            {{['emoji_nature', 'new_releases'][+card.isBomb]}}
          </md-icon>
        </div>
      </div>
      <div class="toolbox">
        <md-button
          v-on:touchstart="touchstart"
          v-on:touchend="touchend"
          v-on:click="click"
          style="margin-left: 0;"
          :class="{'md-primary': isVisible}"
          class="md-icon-button md-raised"
        >
          <md-icon>visibility</md-icon>
        </md-button>
        <md-button
          v-on:click="shuffle"
          class="md-icon-button md-raised"
        >
          <md-icon>shuffle</md-icon>
        </md-button>
        <md-button
          v-on:click="reset"
          class="md-icon-button md-raised"
        >
          <md-icon>autorenew</md-icon>
        </md-button>
      </div>
    </div>
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
      isTouch: false,
      cardRot: 0,
      cards: [
        {
          isBomb: false,
          stackIndex: null,
        },
        {
          isBomb: false,
          stackIndex: null,
        },
        {
          isBomb: true,
          stackIndex: null,
        },
        {
          isBomb: false,
          stackIndex: null,
        }
      ]
    }
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
    shuffle: function() {
      this.cardRot += 2;
      for (let i = 0; i < this.cards.length; i++) {
        let j = Math.floor(Math.random() * (this.cards.length - i)) + i;
        [this.cards[j], this.cards[i]] = [this.cards[i], this.cards[j]];
      }
    },
    reset: function() {
      for (let i = 0; i < this.stack.length; i++) {
        this.cards.push(this.stack[i]);
      }
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
    margin-bottom: 5%;


    $back-color: #F1BE51;
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
</style>
