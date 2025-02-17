<template>
  <div class="q-mt-md column items-start justify-center wrap public-sans">
    <div>
      <span class="text-grey-9 facilities-title">Facilidades do hotel</span>
    </div>
    <q-separator inset class="full-width q-mt-sm" color="grey-5" />
    <div class="q-mt-md full-width row items-center justify-start wrap">
      <span v-for="(facility, index) in visibleAmenities" :key="index" class="q-mb-xs text-grey-6 q-mr-md">
        <q-icon :name="facility.icon" class="q-px-xs icon" size="18px">
        </q-icon>
        <span style="font-size: 16px;">{{ facility.label }}</span>
      </span>
    </div>
    <div v-if="showBtnMoreAmenities" class="row items-center justify-center full-width q-mt-md q-mb-xs">
      <q-btn dense outline rounded color="info" class="q-px-md" @click="showMore">
        Mostrar todas as facilidades
      </q-btn>
    </div>
    <q-separator inset class="full-width q-my-md" color="grey-5" />
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

const showBtnMoreAmenities = computed(() => {
  return hotelStore.hotelSelected && visibleCount.value < hotelStore.hotelSelected.amenities.length
})
</script>

<style scoped>
.facilities-title {
  font-size: 24px;
}
</style>
