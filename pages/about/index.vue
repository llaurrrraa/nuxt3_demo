<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>
<script lang="ts" setup>
const busData = await getBusOnTime();
const data = await getAccident({
  year: 2022,
  district: '桃園區',
});
console.log(data);
</script>
