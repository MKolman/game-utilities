<template>
  <div>
    <h1>ABOUT</h1>
    <p>
      This app is
      <a href="https://github.com/MKolman/game-utilities"> hosted on github </a>
      under a GPL license. App version is {{ version }}.
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
