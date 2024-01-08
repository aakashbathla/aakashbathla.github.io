<template>
  <v-app-bar
    color="white"
    elevation="0"
    class="px-5"
    app
    clipped-left
    height="80"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <img src="/logo.png" alt="logo" class="logo" />
    <v-spacer></v-spacer>
    <v-btn
      class="text-decoration-none"
      color="primary"
      @click="$router.push('/9th/science/index.html')"
    >
      Notes
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-header",
};
</script>

<style lang="scss" scoped>
.logo {
  max-height: max-content;
  width: 135px;
  padding: 0.625rem;
  padding-left: 0px;
  margin-left: -0.125rem;
}

@media screen and (max-width: 959px) {
  .logo {
    padding: 1.25rem;
  }
}
</style>
