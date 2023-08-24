<script lang="ts" setup>
// composables
// const { count, addCount } = useAddCount();

// pinia -> stores
const store = useHomeStore();

// plugin
const { $hello } = useNuxtApp();
const selectedDate = ref(new Date());
</script>

<template>
  <div class="main">
    <NuxtLink to="https://www.google.com.tw" external>go to google</NuxtLink>
    <p>|</p>
    <NuxtLink to="/parent">go to parent</NuxtLink>
    <p>|</p>
    <NuxtLink to="/about">go to Bus Data</NuxtLink>
    <p>|</p>
    <NuxtLink to="/course">go to Course</NuxtLink>
    <br />
    <!-- <div>index {{ store.count }}</div> -->
    <!-- <button @click="store.addCount" type="button">add</button>
    <Home></Home>
    <ClientOnly>
      <h2>{{ $hello('Laura') }}</h2>
    </ClientOnly>
    <h2 v-timeformat="1690873799862"></h2>
    <VDatePicker v-model="selectedDate" />
    <br /> -->
  </div>
</template>

<style scoped>
.main {
  padding: 1rem;
  display: flex;
  align-items: center;
}
a {
  margin: 1rem;
}
</style>
