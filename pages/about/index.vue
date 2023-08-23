<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>
<script lang="ts" setup>
const { bus } = useApi();
const busData = await bus.getBusOnTime();
const data = await bus.getAccident({
  year: 2022,
  district: '桃園區',
});
console.log(data);
</script>
