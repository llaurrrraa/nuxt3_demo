<template>
  <div class="index-container">
    <h4>This is Course {{ $route.params.id }}</h4>
    <h5>{{ data }}</h5>
    <h5>reload: {{ reloads }}</h5>
    <NuxtLink to="/course">Back to course index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = useFetch(
  `https://vue-lessons-api.vercel.app/courses/${route.params.id}`
);
const reloads = useState('static', () => 0);
definePageMeta({
  key: (route) => route.fullPath,
  name: 'id1',
});
onMounted(() => {
  reloads.value++;
});
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
