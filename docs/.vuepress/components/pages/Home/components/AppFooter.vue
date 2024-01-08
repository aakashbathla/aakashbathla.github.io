<template>
  <v-footer color="white" class="my-12 mx-16 app-footer">
    <img src="/logo.png" alt="logo" width="145" class="mx-auto mx-sm-0" />
  </v-footer>
</template>

<script>
  export default {
    name: "app-footer",
  };
</script>

<style scoped lang="scss">
  @media screen and (max-width: 959px) {
    .app-footer {
      display: none;
    }
  }
</style>
