<template>
  <div>
    <h1>{{ busData }}</h1>
  </div>
</template>
<script lang="ts" setup>
const { bus } = useApi();
const { data: test, error } = await bus.getAccident({
  year: 2022,
  district: '桃園區',
});
console.log(error);

const busData = test.value?.payload;
</script>
