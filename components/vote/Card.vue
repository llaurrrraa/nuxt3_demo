<script lang="ts" setup>
// const store = useVoteStore();
</script>
<template>
  <el-card>
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="img"
    />
    <div class="display-all-center container-content">
      <h1>title</h1>
      <VoteButton>0</VoteButton>
    </div>
  </el-card>
</template>
<style lang="scss" scoped>
.container-content {
  flex-direction: column;
  margin-bottom: 0.5rem;
  h1 {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
}
</style>
