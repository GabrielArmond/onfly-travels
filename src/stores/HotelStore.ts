import { defineStore } from 'pinia';
import type { Hotel } from 'src/services/interfaces/Hotels';
import { ref } from 'vue';

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    hotels: ref<Hotel[]>([]),
    hotelSelected: ref<Hotel | null>(null),
    loadingHotels: ref<boolean>(false),
  })
});

