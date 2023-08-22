<template>
  <div>
    <h1>{{ busData }}</h1>
  </div>
</template>
<script lang="ts" setup>
const { bus } = useApi();
const { data: test } = await bus.getBusOnTime({
  year: '112',
  month: '4',
});

const busData = test.value?.payload;
</script>
