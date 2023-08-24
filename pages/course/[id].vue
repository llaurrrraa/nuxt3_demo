<template>
  <div class="index-container">
    <h4>This is Course {{ $route.params.id }}</h4>
    <NuxtLink to="/course">Back to course index</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

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
