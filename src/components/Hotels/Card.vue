<template>
  <div class="q-py-sm public-sans">
    <q-card class="my-card" flat style="max-height: 300px;">
      <q-card-section horizontal>
        <q-carousel class="col-5" swipeable animated arrows v-model="slide" infinite>
          <q-carousel-slide v-for="(image, index) in hotel.images" :key="index" :name="index"
            class="column items-center justify-center q-pa-none">
            <q-img :src="image" fit="cover" class="hotel-image" style="max-height: 300px;" />
          </q-carousel-slide>
        </q-carousel>

        <q-card-section class="col-4">
          <div class="column items-start q-gutter-xs">
            <span class="hotel-title text-grey-8" style="font-size: 18px;">{{ hotel.name }}</span>
            <span class="hotel-location text-gray-6" style="font-size: 14px;">{{ hotelAddress }}</span>
            <div class="q-mt-sm row items-center hotel-rating">
              <div class="row items-center">
                <span class="q-pr-sm text-grey-6 rating-score">{{ ratingModel.toFixed(1) }}</span>
                <q-rating v-model="ratingModel" size="1.6em" color="yellow" icon="star_border" icon-selected="star"
                  no-dimming readonly />
                <q-separator v-if="hotel.amenities.length > 0" vertical inset size="2px" class="q-mx-xs"
                  style="height: 16px;" color="grey-5" />
              </div>
              <q-icon v-for="amenity in hotel.amenities" :key="amenity.key" :name="amenity.icon" class="q-px-xs icon"
                size="16px">
                <q-tooltip class="bg-grey">{{ amenity.label }}</q-tooltip>
              </q-icon>
            </div>
            <div class="q-gutter-xs q-mt-sm">
              <q-chip v-if="hotel.hasRefundableRoom" square dense size="md" color="grey-6" text-color="white"
                class="q-px-md" style="font-size: 14px;">
                Reembolsável
              </q-chip>
              <q-chip v-if="hotel.hasBreakFast" square dense size="md" color="grey-6" text-color="white" class="q-px-md"
                style="font-size: 14px;">
                Reembolsável
              </q-chip>
            </div>
          </div>
        </q-card-section>

        <q-separator vertical size="2px" />

        <q-card-section class="col-3">
          <div class="column items-start q-gutter-xxs public-sans">
            <span class="price-label text-grey-6" style="font-size: 14px;">A partir de</span>
            <span class="price-value text-grey-8" style="font-size: 20px;">{{ totalPriceHotel }}</span>
            <span class="price-night text-weight-bold text-grey-6">{{ formatMoney(hotel.price) }}/noite</span>
            <span class="price-includes">Impostos inclusos</span>
          </div>
          <div class="row justify-start q-mt-lg">
            <q-btn color="primary" label="Selecionar" size="md" rounded class="q-px-xl" style="font-size: 1rem;" no-caps
              @click="openDrawer" />
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import type { Hotel } from 'src/services/interfaces/Hotels';
import { formatMoney } from 'src/utils/utils';

interface Props {
  hotel: Hotel
}
const props = defineProps<Props>()
const emit = defineEmits(['open-drawer'])

const slide = ref(0)
const ratingModel = computed(() => Number(props.hotel.stars))

const totalPriceHotel = computed(() => {
  // A partir de 3 diárias
  return formatMoney(props.hotel.price * 3)
})

const hotelAddress = computed(() => {
  const address = props.hotel.address

  return `${address.city}, ${address.district}.`
})

function openDrawer() {
  emit('open-drawer', props.hotel)
}
</script>

<style scoped>
.hotel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hotel-title {
  font-size: 18px;
  font-weight: bold;
}

.hotel-location {
  font-size: 14px;
  color: gray;
}

.hotel-rating {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.rating-score {
  margin-left: 8px;
  font-weight: bold;
}

.icon {
  margin-left: 8px;
  color: gray;
}

.hotel-price {
  width: 20%;
  padding: 16px;
  text-align: center;
  background: #f8f8f8;
}

.price-label {
  font-size: 12px;
  color: gray;
}

.price-value {
  font-size: 20px;
  font-weight: bold;
}

.price-night,
.price-includes {
  font-size: 12px;
  color: gray;
}
</style>
