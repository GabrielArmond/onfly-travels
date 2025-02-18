<template>
  <q-dialog v-model="hotelStore.dialogHotel" position="right" class="public-sans" maximized>
    <q-card full-height style="width: 600px" bordered>
      <q-card-section class="column no-wrap q-px-sm">
        <HotelDialogHeader />
        <q-carousel class="full-width" swipeable animated arrows v-model="slide" infinite>
          <q-carousel-slide v-for="(image, index) in hotelImages" :key="index" :name="index"
            class="column items-center justify-center q-pa-none">
            <div class="absolute-bottom	 custom-caption public-sans q-px-md q-py-xs" style="">
              <span>{{ slide + 1 }}/{{ hotelImages.length }}</span>
            </div>
            <q-img :src="image" fit="cover" class="hotel-image" />
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>

      <q-card-section class>
        <Facilities />
        <OtherDetails />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import HotelDialogHeader from 'src/components/Hotels/Dialog/Header.vue'
import { useHotelsStore } from 'src/stores/HotelStore';
import { computed, ref } from 'vue';
import Facilities from './Facilities.vue';
import OtherDetails from './OtherDetails.vue';

const hotelStore = useHotelsStore()
const slide = ref(0)

const hotelImages = computed(() => {
  if (hotelStore.hotelSelected) {
    return hotelStore.hotelSelected.images
  }

  return []
})

</script>

<style scoped>
.hotel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 12px;
}

.custom-caption {
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  max-width: 60px;
  border-radius: 20px;
  z-index: 99;
  left: 250px;
  bottom: 10px;
}
</style>
