<template>
  <div class="child1-container">
    <h4>Hi, this is child 1</h4>
    <h4>My path is : {{ $router }}</h4>
    <NuxtLink to="/parent">&lt Back to parent index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
console.log('router =>', router);
</script>

<style lang="scss" scope>
.child1-container {
  margin: 1rem;
  h4 {
    margin-bottom: 1rem;
  }
}
</style>
