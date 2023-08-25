<template>
  <div class="id-container">
    <h4>Hi, this is dynamic route</h4>
    <h4>My full path is : {{ route.fullPath }}</h4>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style lang="scss" scope>
.id-container {
  margin: 1rem;
  h4 {
    margin-bottom: 1rem;
  }
}
</style>
