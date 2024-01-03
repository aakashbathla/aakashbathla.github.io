<template>
  <home v-if="$page.frontmatter.home" />
</template>
<script>
export default {
  name: "Layout",
};
</script>
