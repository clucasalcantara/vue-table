<script setup lang="ts">

</script>

<template>
  <div class="year-selector">
    <div class="year">
      <span>5 YRS</span>
    </div>
    <div class="year">
      <span>10 YRS</span>
    </div>
    <div class="year">
      <span>40 YRS</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.year-selector {
  display: flex;
  .year {
    cursor: pointer;
    &:not(:first-child):not(:last-child) {
      margin: 0 1rem;
    }
  }
}
</style>
