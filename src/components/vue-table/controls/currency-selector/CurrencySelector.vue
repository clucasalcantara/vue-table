<script setup lang="ts">
const props = defineProps({
  handler: {
    type: Function,
    required: true,
  },
});

const currencies = ["USD", "CAD", "EUR"];
</script>

<template>
  <div class="currency-selector">
    <div
      v-for="currency in currencies"
      :key="currency"
      class="currency"
      @click="() => props.handler(currency)"
    >
      <span>{{ currency }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.currency-selector {
  display: flex;
  .currency {
    cursor: pointer;
    &:not(:first-child):not(:last-child) {
      margin: 0 1rem;
    }
  }
}
</style>
