<template>
  <main>
    <Hero/>
    <FeaturedList/>
    <NewestPosts/>
    <Newsletter/>
  </main>
</template>
<style scoped>
main {
  min-height: 100vh;
}
</style>
<script lang="ts" setup>
import Newsletter from "./components/Newsletter.vue";
import Hero from "./components/Hero.vue";
import NewestPosts from "./components/NewestPosts.vue";
import FeaturedList from "./components/FeaturedList.vue";
</script>