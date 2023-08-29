<template>
  <div>
    <h1>{{ apiData }}</h1>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  name: 'abouta',
});
let dataList = ref();
// const busData = await getBusOnTime();
const apiData = await getAccident({
  year: 2022,
  district: '桃園區',
});
// console.log('apidata', apiData);
</script>
