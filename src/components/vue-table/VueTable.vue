<script setup lang="ts">
import { rawData, data } from "./data";
import { useUIStore } from "@/store";
// UI Elements
import CurrencySelector from "./controls/currency-selector/CurrencySelector.vue";
import YearSelector from "./controls/year-selector/YearSelector.vue";
import TypeSelector from "./controls/type-selector/TypeSelector.vue";
import TableContent from "./table-content/TableContent.vue";

const { setCurrency, setType, setYears } = useUIStore();

const handleCurrency = (currency: string) => {
  alert(currency);
  setCurrency(currency);
};

console.log({ data });
</script>

<template>
  <div class="table">
    <div class="table-controls">
      <CurrencySelector :handler="handleCurrency" />
      <YearSelector :handler="setYears" />
      <TypeSelector :handler="setType" />
    </div>
    <input type="text" class="form-control search" placeholder="Filter by company name ..." />
    <TableContent :data="data" />
  </div>
</template>

<style scoped lang="scss">
.table {
  padding-top: 10rem;
  width: 100%;

  .table-controls {
    display: flex;
    gap: 40px;
    flex: 1;
    flex-direction: row;
  }
  
  .search{
    margin-top: 20px;;
    width: 400px;
  }
}
</style>
