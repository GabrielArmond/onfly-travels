<template>
  <div class="q-mt-md column items-start justify-center wrap public-sans">
    <div>
      <span class="text-grey-9 facilities-title">Facilidades do hotel</span>
    </div>
    <q-separator color="orange" inset />
    <div class="q-mt-xs q-gutter-lg row items-start justify-start">
      <span v-for="(facility, index) in visibleAmenities" :key="index" class="q-mb-xs text-grey-6">
        <q-icon :name="facility.icon" class="q-px-xs icon" size="18px">
        </q-icon>
        <span style="font-size: 16px;">{{ facility.label }}</span>
      </span>
    </div>

    <q-btn v-if="hotelStore.hotelSelected && visibleCount < hotelStore.hotelSelected.amenities.length" flat dense
      color="primary" class="q-mt-md" @click="showMore">
      Mostrar todas as facilidades
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import type { HotelAmenities } from 'src/services/interfaces/Hotels';
import { useHotelsStore } from 'src/stores/HotelStore';
import { computed, ref } from 'vue';

const hotelStore = useHotelsStore()

const visibleCount = ref(4);

const visibleAmenities = computed<HotelAmenities[]>(() => {
  if (hotelStore.hotelSelected) {
    return hotelStore.hotelSelected.amenities.slice(0, visibleCount.value);
  }
  return [];
});

const showMore = () => {
  visibleCount.value += 4;
};
</script>

<style scoped>
.facilities-title {
  font-size: 24px;
}
</style>
