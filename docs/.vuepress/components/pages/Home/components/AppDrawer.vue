<template>
  <v-navigation-drawer
    v-model="value"
    absolute
    left
    temporary
    @input="$emit('input', value)"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> BTC </v-list-item-title>
        <v-list-item-subtitle> Notes </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "AppDrawer",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: require("../data/menu.json"),
    };
  },
};
</script>

<style scoped lang="scss"></style>
