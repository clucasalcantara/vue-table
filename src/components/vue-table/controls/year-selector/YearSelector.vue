<script setup lang="ts">

</script>

<template>
  <div class="year-selector btn-group btn-group-sm">
    <button class="btn btn-secondary year">
      <span>5 YRS</span>
    </button>
    <button class="btn btn-secondary year">
      <span>10 YRS</span>
    </button>
    <button class="btn btn-secondary year">
      <span>40 YRS</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.year-selector {
  display: flex;
  .year {
    padding: 0 16px;
    color: #527094;
  }
}
</style>
