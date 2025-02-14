<template>
  <q-page class="column justify-start container" style="width: 100%;">
    <BookHotel @place-selected="place => placeSelected = place" />
    <Breadcrumbs :selected-city="placeSelected" />
    <HotelsCard />
  </q-page>
</template>

<script setup lang="ts">
import BookHotel from 'src/components/BookHotel.vue';
import Breadcrumbs from 'src/components/Breadcrumbs.vue';
import HotelsCard from 'src/components/Hotels/Card.vue';
import { ref } from 'vue';
// import { hotelServiceInstance } from 'src/services';
// import type { Hotel } from 'src/services/interfaces/Hotels';

// const hotelsData = ref<Hotel>()

const placeSelected = ref<string>('')

// async function fetchHotels() {
//   const data = await hotelServiceInstance.getHotels()

//   hotelsData.value = data.hotels
// }

// onMounted(async () => {
//   await fetchHotels()
// })

</script>
