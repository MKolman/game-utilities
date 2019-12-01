<template>
  <div id="vision-play">
    <div class="drops">
      <span class="neutral"></span>
      <span class="bad"></span>
      <span class="good"></span>
    </div>
    <span class="word">
      <span class="flip">wording1</span>
      <br />
      <span>wording2</span>
    </span>
    <span class="timer">
      01:30
    </span>
  </div>
</template>

<script>
export default {
  name: "visionPlay"
};
</script>

<style lang="scss">
#vision-play {
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  writing-mode: vertical-rl;
  .drops {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    span {
      position: absolute;
      box-shadow: var(--box-shadow-color) 0px 0px 100px 20px;
    }
    .good {
      bottom: 0;
      left: 25%;
      width: 50%;
      --box-shadow-color: green;
    }
    .bad {
      top: 0;
      left: 25%;
      width: 50%;
      --box-shadow-color: red;
    }
    .neutral {
      top: 25%;
      right: 0;
      height: 50%;
      --box-shadow-color: blue;
    }
  }
  .word {
    font-size: 100px;
    line-height: 100px;
    span {
      display: inline-block;
    }
    .flip {
      transform: rotate(180deg);
    }
  }
  .timer {
    font-size: 40px;
    line-height: 40px;
  }
}
</style>
