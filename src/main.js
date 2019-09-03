import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import {
  MdButton,
  MdDivider,
  MdContent,
  MdToolbar,
  MdField,
  MdIcon,
  MdApp,
  MdDrawer,
  MdList
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdIcon);
Vue.use(MdApp);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdContent);
Vue.use(MdToolbar);
Vue.use(MdDivider);

import HalfButton from "@/components/HalfButton.vue";
Vue.component("HalfButton", HalfButton);

router.beforeEach((to, from, next) => {
  document.title = process.env.VUE_APP_TITLE + " | " + to.meta.title;
  next();
});

Vue.use(VueAnalytics, {
  id: "UA-42885055-4",
  router,
  autoTracking: {
    pageviewTemplate(route) {
      return {
        page:
          window.location.pathname + window.location.search + "#" + route.name,
        title: document.title,
        location: window.location.href
      };
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  data: {
    menuVisible: false
  }
}).$mount("#app");
