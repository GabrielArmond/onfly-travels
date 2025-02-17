<template>
  <div class="column items-start justify-center wrap public-sans">
    <span class="text-grey-9 others-details">Conheça um pouco mais</span>
    <p class="description text-grey-6 q-pt-md">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useHotelsStore } from 'src/stores/HotelStore';
import { computed } from 'vue';

const hotelStore = useHotelsStore()

const description = computed(() => {
  if (hotelStore.hotelSelected) {
    return hotelStore.hotelSelected.description
  }

  return ''
})
</script>

<style scoped>
.others-details {
  font-size: 24px;
}

.description {
  font-size: 14px;
}
</style>
