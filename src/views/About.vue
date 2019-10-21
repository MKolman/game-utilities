<template>
  <div>
    <h1>ABOUT</h1>
    <p>
      Play Now (v{{ version }}) is
      <a href="https://github.com/MKolman/game-utilities"> hosted on github </a>
      under a GPL license. Feel free to fork or contribute.
    </p>
    <p>
      You can visit the staging version of the app
      <a href="/game-utilities-staging/">here</a>.
      <br />
      Beware that it will be broken more often than the
      <a href="/game-utilities/">production</a> version.
    </p>
    <p>
      Made by Maks Kolman. Home page at
      <a href="https://www.kolman.si">kolman.si</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      version: process.env.VUE_APP_VERSION
    };
  }
};
</script>
