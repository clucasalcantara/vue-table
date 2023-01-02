<script setup lang="ts">
</script>

<template>
  <div class="type-selector">
    <div class="type">
      <span>Spread</span>
    </div>
    <div class="type">
      <span>Yield</span>
    </div>
    <div class="type">
      <span>3MLSpread</span>
    </div>
  </div>
</template>


<style scoped lang="scss">
.type-selector {
  display: flex;
  .type {
    cursor: pointer;
    &:not(:first-child):not(:last-child) {
      margin: 0 1rem;
    }
  }
}
</style>
