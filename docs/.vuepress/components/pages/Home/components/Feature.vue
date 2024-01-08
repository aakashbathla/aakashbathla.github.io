<template>
  <v-sheet class="feature-item text-left pa-8" rounded="lg">
    <div class="mb-2 ml-n1">
      <v-icon class="mr-2">{{ icon }}</v-icon>
      <span class="title">{{ title }}</span>
    </div>
    <div class="pl-8 text-body-2 text-sm-body-1 description">
      {{ description }}
    </div>
  </v-sheet>
</template>
<script>
export default {
  name: "FeatureItem",
  props: {
    icon: {
      type: String,
      default: "mdi-check",
    },
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
  },
};
</script>

<style lang="scss" scoped>
.feature-item {
  max-width: 19.375rem;
  font-family: "Dubai" !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  color: rgb(0, 0, 0, 0.6);
  & .title {
    font-weight: 500;
    font-size: 1.375rem;
  }
  & .description {
    font-weight: 400;
    font-size: 1.1875rem !important;
  }
}

.v-application .title,
.v-application .text-sm-body-1 {
  font-family: "Dubai" !important;
}

@media screen and (max-width: 1263px) {
  .feature-item {
    & .title {
      font-size: 1.15rem !important;
    }
    & .description {
      font-size: 1.05rem !important;
    }
  }
}

@media screen and (max-width: 959px) {
  .feature-item {
    text-align: center !important;
    max-width: 100%;

    padding: 1rem;
    font-family: "Dubai" !important;
    border-radius: 0.9375rem;
    color: rgb(0, 0, 0, 0.6);

    & .title {
      font-weight: 500;
      font-size: 1.25rem;
    }
    & .description {
      font-weight: 400;
      font-size: 1rem !important;
    }
  }
}

@media screen and (max-width: 599px) {
  .feature-item {
    max-width: 100%;
    padding: 1.5rem !important;
  }
}
</style>
