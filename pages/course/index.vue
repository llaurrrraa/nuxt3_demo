<template>
  <div class="index-container">
    <NuxtLink to="/course/Nuxt2">Nuxt2</NuxtLink>
    <NuxtLink to="/course/Nuxt3">Nuxt3</NuxtLink>
    <NuxtLink to="/course/Vue3">Vue3</NuxtLink>
    <CardList :courses="data"></CardList>
  </div>
</template>

<script setup lang="ts">
interface CardList {
  id: number;
  name: string;
  photo: string;
  money: string;
  teacher: {
    name: string;
    img: string;
  };
  student: number;
  star: number;
}
const { data } = await useFetch<CardList[]>(
  'https://vue-lessons-api.vercel.app/courses/list'
);
definePageMeta({
  name: 'pa',
});
// const route = useRoute();
// console.log(route);
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
