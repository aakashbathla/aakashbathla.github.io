import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import PrismJs from "prismjs";
import "prismjs/themes/prism.css";

import vuetify from "../src/plugins/vuetify";
import * as CommonComponents from "docs/.vuepress/components";
import "prismjs/components/prism-json";
export default ({
  Vue, //  the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // .. apply enhancements to the app
  for (let key in CommonComponents) {
    const component = CommonComponents[key];
    Vue.component(component.name, component);
  }

  Vue.use(Vuetify);
  options.vuetify = new Vuetify({});
  Vue.use(PrismJs);
};
