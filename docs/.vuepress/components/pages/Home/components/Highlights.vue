<template>
  <v-container>
    <div class="highlight-heading mt-16 text-center">HIGHLIGHTS</div>

    <v-row id="features-row" class="text-center">
      <v-col
        v-for="item in features"
        :key="item.title"
        cols="12"
        md="4"
        class="d-flex justify-center align-center"
      >
        <feature
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
        >
        </feature>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Feature from "./Feature";
export default {
  name: "Highlights",
  components: {
    Feature,
  },
  data() {
    return {
      features: require("../data/features.json"),
    };
  },
};
</script>

<style lang="scss" scoped>
.highlight-heading {
  font-family: "Dubai", sans-serif !important;
  font-weight: 600;
  font-size: 1.0625rem !important;
  letter-spacing: 0.1875rem !important;
  line-height: 2rem;
  color: rgb(0, 0, 0, 0.5);
  margin-top: 80px;
  margin-bottom: 40px;
}
</style>
