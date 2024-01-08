import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import light from "../themes/light";

Vue.use(Vuetify);

export const options = {
  theme: {
    options: { customProperties: true, variations: true },
    dark: false,
    themes: { light },
  },
};

export default new Vuetify(options);
