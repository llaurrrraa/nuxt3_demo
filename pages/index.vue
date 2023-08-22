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
    <p>|</p>
    <NuxtLink to="/about">go to Bus Data</NuxtLink>
    <p>|</p>
    <NuxtLink to="/vote">go to vote</NuxtLink>
    <br />
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
