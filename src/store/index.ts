import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    currency: "USD",
    years: [5, 10, 40],
    type: "yield",
    opened: []
  }),
  actions: {
    setCurrency(currency: string) {
      this.currency = currency;
    },
    setYears(years: number[]) {
      this.years = years;
    },
    setType(type: string) {
      this.type = type;
    },
    setOpened(type: string) {
      this.type = type;
    },
  },
});
