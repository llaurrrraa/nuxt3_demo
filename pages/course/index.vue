<template>
  <div class="index-container">
    <h4>This is Course Index</h4>
    <NuxtLink to="/course/Nuxt2">Nuxt2</NuxtLink>
    <NuxtLink to="/course/Nuxt3">Nuxt3</NuxtLink>
    <NuxtLink to="/course/Vue3">Vue3</NuxtLink>
    <CardList :courses="data"></CardList>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch(
  'https://vue-lessons-api.vercel.app/courses/list'
);
</script>

<style lang="scss" scope>
.index-container {
  margin: 1rem;
  h4 {
    margin-bottom: 1rem;
  }
  a {
    padding-right: 1rem;
  }
}
</style>
