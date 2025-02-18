import { defineStore } from "pinia";
import type { Places } from "src/services/interfaces/Place";
import { ref } from "vue";

export const usePlaceStore = defineStore('places', {
  state: () => ({
    placeSelected: ref<Places | null>(null)
  })
})
