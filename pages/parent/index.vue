<template>
  <div class="index-container">
    <h4>I am Parent's Index</h4>
    <NuxtLink to="/parent/child1">child 1</NuxtLink>
    <NuxtLink to="/parent/child2">child 2</NuxtLink>
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
