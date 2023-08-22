<script lang="ts" setup></script>

<template>
  <div class="display-all-center vote_app">
    <p>Vote List</p>
    <div class="box_list">
      <VoteCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vote_app {
  width: 100%;
  height: calc(100% - (86px + 4rem));
  flex-direction: column;
  p {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.75px;
    color: #6b818f;
    padding-bottom: 1.25rem;
  }
  .box_list {
  }
}
</style>
