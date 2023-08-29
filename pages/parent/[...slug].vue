<template>
  <div class="child1-container">
    <h4>Page Not Found</h4>
    <h4>{{ route.params.slug }}</h4>
    <NuxtLink to="/parent">&lt Back to parent index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
// const event = useRequestEvent();
// setResponseStatus(event, 404);
</script>

<style lang="scss" scope>
.child1-container {
  margin: 1rem;
  h4 {
    margin-bottom: 1rem;
  }
}
</style>
