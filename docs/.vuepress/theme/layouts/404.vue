<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>
        {{ getMsg() }}
      </blockquote>
      <RouterLink to="/"> Take me home.</RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  "I have no idea where this is.",
  "This is not the page you are looking for.",
  "This is not the page I am looking for.",
  "This is not the page I was looking for.",
  "This is not the page you were looking for.",
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>
