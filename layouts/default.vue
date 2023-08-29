<script lang="ts" setup></script>

<template>
  <div class="container-page">
    <NuxtLoadingIndicator :color="'#4257f5'" :height="10" :throttle="0">
      <h1>Loading</h1>
    </NuxtLoadingIndicator>
    <AboutHeader />
    <NuxtPage />
    <!-- <AboutFooter /> -->
  </div>
</template>

<style scoped></style>
