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
  <!-- <div>index {{ store.count }}</div> -->
  <!-- <button @click="store.addCount" type="button">add</button>
  <Home></Home>
  <ClientOnly>
    <h2>{{ $hello('Laura') }}</h2>
  </ClientOnly>
  <h2 v-timeformat="1690873799862"></h2>
  <VDatePicker v-model="selectedDate" />
  <br /> -->
  <NuxtLink to="/user">go to user</NuxtLink>
  <p>/</p>
  <NuxtLink to="/about">go to Bus Data</NuxtLink>
  <p>/</p>
  <NuxtLink to="/vote">go to vote</NuxtLink>
  <br />
</template>

<style scoped></style>
