<template>
  <v-main class="mx-5 main-body">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="main--content">
          <div class="page_title">
            <span>Move faster</span><br />
            <b
              >with Bathla<br />
              Tuition Centre</b
            >
            <b class="primary--text">Notes</b>
          </div>
          <div class="d-flex align-center justify-center">
            <div class="page_description mt-4">
              Welcome to Bathla Tuition Centre Notes. Here you will find all the
              notes for all the subjects for all the classes. You can download
              the notes and use them for your studies. If you have any
              questions, please contact us on +919817607770.
            </div>
          </div>
          <highlights />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
import Highlights from "./Highlights";
export default {
  name: "AppContent",
  components: {
    Highlights,
  },
};
</script>
<style lang="scss" scoped>
.main-body {
  padding-top: 0px;
}
.page {
  &_title {
    line-height: 1.2;
    font-family: "Dubai", sans-serif !important;
    font-size: 3rem;
    font-style: normal;
    text-align: center;

    b {
      font-weight: bold;
    }

    span {
      font-weight: lighter;
    }
  }

  &_description {
    font-family: "Dubai", sans-serif !important;
    font-style: normal;
    font-size: 1.125rem;
    color: rgba(0, 0, 0, 0.6);
    max-width: 35rem;
    text-align: center;
  }
}

@media screen and (max-width: 1263px) {
  .page {
    &_title {
      font-size: 2.5rem;
    }
  }
}

@media screen and (max-width: 959px) {
  .page {
    &_title {
      font-size: 2rem;
    }
    &_description {
      font-size: 1rem;
    }
  }
  .main--content {
    order: 1;
  }
  .search--section {
    order: 2;
  }
}

@media screen and (max-width: 599px) {
  .page {
    &_title {
      font-size: 1.875rem;
    }
    &_description {
      font-size: 1rem;
    }
  }
}
</style>
