<template>
  <div id="app">
    <md-app class="container" md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Play Now</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" :md-swipeable="true">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">Play Now</md-toolbar> -->
        <md-toolbar class="md-transparent" md-elevation="0">
          <span @click="menuVisible = !menuVisible" class="md-title"
            >Play Now</span
          >
        </md-toolbar>

        <md-list>
          <md-list-item @click="menuVisible = !menuVisible" to="/" exact>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Unique</span>
            <md-button class="md-icon-button" to="/rules"
              ><md-icon>menu_book</md-icon></md-button
            >
          </md-list-item>
          <md-list-item @click="menuVisible = !menuVisible" to="/scores">
            <md-icon>format_list_numbered</md-icon>
            <span class="md-list-item-text">Score</span>
          </md-list-item>

          <md-divider></md-divider>
          <md-divider></md-divider>

          <md-list-item href="https://github.com/MKolman/game-utilities">
            <md-icon>launch</md-icon>
            <span class="md-list-item-text">Hosted on Github</span>
          </md-list-item>
          <md-list-item href="https://www.kolman.si">
            <md-icon>launch</md-icon>
            <span class="md-list-item-text">Home Page</span>
          </md-list-item>
          <md-list-item>
            <span class="md-list-item-text">Made by Maks Kolman</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      menuVisible: false
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cookie");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: $theme-color,
    // The primary color of your application
      accent: #98a352,
    // The accent or secondary color
      background: $bg-color // The accent or secondary color
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme

body {
  margin: 0;
  // padding-left: 0.5em;
  // padding-right: 0.5em;
  background-color: $bg-color;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
a {
  // color: $theme-color;
}

.container {
  margin: 0 auto;
  width: 800px;
  text-align: center;
}
.md-app {
  height: 100vh;
}

@media screen and (max-width: 800px) {
  .container {
    width: 100%;
  }
}
</style>
