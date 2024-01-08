<template>
  <v-app>
    <app-drawer v-model="drawer"></app-drawer>
    <app-header @toggle-drawer="onToggleDrawer"></app-header>
    <app-content></app-content>
    <!-- <app-footer></app-footer> -->
  </v-app>
</template>
<script>
import { AppContent, AppDrawer, AppFooter, AppHeader } from "./components";
export default {
  name: "home",
  components: {
    AppContent,
    AppDrawer,
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    onToggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
