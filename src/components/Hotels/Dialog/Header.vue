<template>
  <div class="row items-center justify-start">
    <span class="q-pr-sm text-grey-6 rating-score q-pt-xs">{{ ratingModel.toFixed(1) }}</span>
    <q-rating v-model="ratingModel" size="1.6em" color="yellow" icon="star_border" icon-selected="star" no-dimming
      readonly />
    <q-space />
    <q-btn icon="close" flat round dense v-close-popup />
  </div>
  <div class="column items-start justify-center q-mt-md">
    <span class="hotel-title text-grey-8">{{ hotelStore.hotelSelected?.name }}</span>
    <span class="hotel-location text-grey-6">{{ hotelAddress }}</span>
  </div>
</template>

<script setup lang="ts">
import { useHotelsStore } from 'src/stores/HotelStore';
import { computed } from 'vue';

const hotelStore = useHotelsStore()

const ratingModel = computed(() => {
  if (hotelStore.hotelSelected) {
    return Number(hotelStore.hotelSelected.stars)
  }

  return 0
})

const hotelAddress = computed(() => {
  if (hotelStore.hotelSelected) {
    const address = hotelStore.hotelSelected.address
    return `${address.fullAddress}, ${address.city} - ${address.state} ${address.zipCode ? `, ${address.zipCode}` : ''}`
  }

  return ''
})
</script>

<style scoped>
.rating-score {
  margin-left: 8px;
}

.hotel-title {
  font-size: 24px;
  font-weight: bold;
}

.hotel-location {
  font-size: 14px;
}
</style>
