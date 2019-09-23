<template>
  <div class="card-stack">
    <div
      class="square card-back md-elevation-3"
      :style="{
        transform: getTransform(card),
        zIndex: card.open ? stack.length - index : undefined
      }"
      :key="index"
      :class="{ left: !card.open && isOpening, right: card.open }"
      v-for="(card, index) in stack"
    >
      <div class="absolute-fill">
        <md-button
          class="md-icon-button md-size-3x"
          @click="card.open = true"
          v-if="!card.open"
        >
          <md-icon class="md-size-3x">visibility</md-icon>
        </md-button>
        <md-icon v-if="card.open" class="md-size-3x">
          {{ ["emoji_nature", "new_releases"][+cardValues[index].isBomb] }}
        </md-icon>
        <md-button class="md-icon-button md-size-3x" @click="$emit('undo')">
          <md-icon class="md-size-3x">undo</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bombs",
  props: {
    cardValues: Array
  },
  computed: {
    size: function() {
      return this.cardValues.length;
    },
    isOpening: function() {
      let result = false;
      for (let i = 0; i < this.stack.length; i++) {
        result = this.stack[i].open || result;
      }
      return result;
    }
  },
  watch: {
    size: function(n) {
      while (n > this.stack.length) {
        this.stack.push({
          open: false,
          angle: 20 * Math.random() - 10,
          translateX: Math.ceil(20 * Math.random() - 10),
          translateY: Math.ceil(20 * Math.random() - 10)
        });
        let card = this.stack[this.stack.length - 1];
        setTimeout(() => {
          card.angle += 20 * Math.random() - 10;
          card.translateX += Math.ceil(20 * Math.random() - 10);
          card.translateY -= Math.ceil(10 * Math.random());
        }, 10);
      }
      while (n < this.stack.length) {
        this.stack.pop();
      }
    }
  },
  data() {
    return {
      stack: []
    };
  },
  methods: {
    getTransform(card) {
      let x = `rotate(${card.angle}deg) translate(${card.translateX}%, ${card.translateY}%)`;
      // let x = `rotate(${card.angle}deg)`;
      console.log("aa", this.isOpening);
      return x;
    }
  }
};
</script>

<style lang="scss">
.absolute-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  display: inline-flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  .md-icon-button.md-size-3x {
    width: 100px;
    height: 50px;
  }
}
.card-back {
  // #F1BE51, "#98A352", "#4B9086"
  position: absolute;
  width: 40%;
  left: 25%;
  margin-top: 0;

  $back-color: #f1be51;
  border: solid $back-color 5px;
  border-radius: 1em;
  background-color: $back-color;

  transition: transform 1s, left 1s;
  &.left {
    left: 2em;
  }
  &.right {
    left: 50%;
  }
  button {
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
.card-stack:after {
  content: "";
  display: block;
  padding-bottom: 60%;
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
