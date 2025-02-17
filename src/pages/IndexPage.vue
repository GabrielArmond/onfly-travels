<template>
  <q-page class="column justify-start container" style="width: 100%;">
    <BookHotel @place-selected="place => placeSelected = place" />
    <Breadcrumbs :selected-city="placeSelected" />

    <div class="q-gutter-xs full-width" v-for="(hotel, index) in hotelStore.hotels" :key="index">
      <HotelsCard class="q-py-xs" :hotel="hotel" @open-drawer="value => openDialog(value)" />
    </div>
  </q-page>
  <HotelsDetailsDialog :open="openDialogHotel" />
</template>

<script setup lang="ts">
import BookHotel from 'src/components/BookHotel.vue';
import Breadcrumbs from 'src/components/Breadcrumbs.vue';
import HotelsCard from 'src/components/Hotels/Card.vue';
import HotelsDetailsDialog from 'src/components/Hotels/DetailsDialog.vue';
import { onMounted, ref } from 'vue';
import { hotelServiceInstance } from 'src/services';
import { useHotelsStore } from 'src/stores/HotelStore';
import type { Hotel } from 'src/services/interfaces/Hotels';

const hotelStore = useHotelsStore()
const placeSelected = ref<string>('')
const openDialogHotel = ref(false)

async function fetchHotels() {
  hotelStore.loadingHotels = true
  try {
    const data = await hotelServiceInstance.getHotels()
    hotelStore.hotels = data.flatMap(item => item.hotels)
  } catch (error) {
    console.error(error)
  } finally {
    hotelStore.loadingHotels = false
  }
}

function openDialog(hotel: Hotel) {
  openDialogHotel.value = true
  hotelStore.hotelSelected = hotel
}
onMounted(async () => {
  await fetchHotels()
})

</script>
