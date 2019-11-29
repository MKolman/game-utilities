import Vue from "vue";
import Router from "vue-router";
import Home from "./views/unique/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" }
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("./views/unique/Rules.vue"),
      meta: { title: "Rules" }
    },
    {
      path: "/type",
      name: "type",
      component: () => import("./views/unique/Type.vue"),
      meta: { title: "Type" }
    },
    {
      path: "/draw",
      name: "draw",
      component: () => import("./views/unique/Draw.vue"),
      meta: { title: "Draw" }
    },
    {
      path: "/display/:text",
      name: "display",
      component: () => import("./views/unique/Display.vue"),
      meta: { title: "Display" }
    },
    {
      path: "/scores",
      name: "scores",
      component: () => import("./views/Scores.vue"),
      meta: { title: "Score" }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
      meta: { title: "About" }
    },
    {
      path: "/vision/:redo?",
      name: "visionHome",
      component: () => import("./views/vision/Home.vue"),
      meta: { title: "Select room" }
    },
    {
      path: "/visid/:room/:number/:player",
      name: "visionIdentity",
      component: () => import("./views/vision/Identity.vue"),
      meta: { title: "Vision" }
    },
    {
      path: "/visplay/:room/:number/:player",
      name: "visionPlay",
      component: () => import("./views/vision/Play.vue"),
      meta: { title: "Vision Play" }
    },
    {
      path: "/bombs",
      name: "bombs",
      component: () => import("./views/bombs/Home.vue"),
      meta: { title: "Bombs" }
    },
    {
      path: "/bombs/rules",
      name: "bombRules",
      component: () => import("./views/bombs/Rules.vue"),
      meta: { title: "Bomb Rules" }
    }
  ]
});
