<script setup lang="ts">
const props = defineProps({
  handler: {
    type: Function,
    required: true,
  },
});

const currencies = ["USD", "EUR" , "CAD"];
</script>

<template>
  <div class="currency-selector btn-group btn-group-sm">
    <button
      v-for="currency in currencies"
      :key="currency"
      type="button" class="btn btn-secondary currency"
      @click="() => props.handler(currency)"
    >
     {{ currency }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.currency-selector {
  .currency {
    padding: 8px 16px;
    color: #527094;
  }
}
</style>
