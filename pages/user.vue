<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const fetchData = async () => {
  const res = await fetch("/api/testData").then((res) => res.json());
  console.log(res);
};
</script>

<template>
  <div>
    <h1>User</h1>
    <button type="button" @click="fetchData">get api data</button>
  </div>
</template>

<style scoped></style>
