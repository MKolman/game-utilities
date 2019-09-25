<template>
  <div id="app">
    <md-app class="container" md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Play Now</span>
        <div
          v-if="$route.name == 'visionIdentity'"
          class="md-toolbar-section-end"
        >
          <md-button style="text-transform: none;" to="/vision/redo">
            {{ $route.params.room }}
            {{ +$route.params.player + 1 }}/{{ $route.params.number }}
          </md-button>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" :md-swipeable="true">
        <!-- <md-toolbar class="md-transparent" md-elevation="0">Play Now</md-toolbar> -->
        <md-toolbar class="md-transparent" md-elevation="0">
          <span @click="menuVisible = !menuVisible" class="md-title">
            Play Now
          </span>
        </md-toolbar>

        <md-list>
          <md-list-item @click="menuVisible = !menuVisible" to="/" exact>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Unique</span>
            <md-button class="md-icon-button" to="/rules">
              <md-icon>menu_book</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item @click="menuVisible = !menuVisible" to="/vision" exact>
            <md-icon>visibility</md-icon>
            <span class="md-list-item-text">Vision</span>
            <md-button class="md-icon-button" to="/rules">
              <md-icon>menu_book</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item @click="menuVisible = !menuVisible" to="/bombs" exact>
            <md-icon>new_releases</md-icon>
            <span class="md-list-item-text">Bombs</span>
            <!-- <md-button class="md-icon-button" to="/rules">
              <md-icon>menu_book</md-icon>
            </md-button> -->
          </md-list-item>
          <md-list-item @click="menuVisible = !menuVisible" to="/scores">
            <md-icon>format_list_numbered</md-icon>
            <span class="md-list-item-text">Score</span>
          </md-list-item>
          <md-list-item @click="toggleNoSleep">
            <md-switch v-model="keepAwake" class="md-primary"></md-switch>
            <span class="md-list-item-text">Keep awake</span>
          </md-list-item>

          <md-divider></md-divider>
          <md-divider></md-divider>

          <md-list-item
            v-if="installPrompt !== null"
            @click="installPrompt.prompt()"
          >
            <md-icon>cloud_download</md-icon>
            <span class="md-list-item-text">Install</span>
          </md-list-item>

          <md-list-item @click="menuVisible = !menuVisible" to="/about">
            <md-icon>info</md-icon>
            <span class="md-list-item-text">About</span>
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
import * as NoSleep from "nosleep.js";
export default {
  name: "app",
  data() {
    return {
      menuVisible: false,
      keepAwake: false,
      installPrompt: null,
      nosleep: new NoSleep()
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", e => {
      // Prevent Chrome 76 and later from showing the mini-infobar
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.installPrompt = e;
    });
  },
  methods: {
    toggleNoSleep() {
      this.keepAwake = !this.keepAwake;
      if (this.keepAwake) {
        this.nosleep.enable();
      } else {
        this.nosleep.disable();
      }
    }
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
