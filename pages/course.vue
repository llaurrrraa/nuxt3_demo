<template>
  <div class="course-container">
    <h1>Course List</h1>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss" scope>
.course-container {
  margin: 1rem;
  h1 {
    margin-bottom: 1rem;
  }
}
</style>
