<template>
  <div class="q-py-sm public-sans">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-carousel class="col-5" swipeable animated arrows v-model="slide" infinite>
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
        </q-carousel>

        <q-card-section class="col-4">
          <div class="column items-start q-gutter-xs">
            <span class="text-grey-9" style="font-size: 22px;">NOME HOTEL</span>
            <span class="text-grey-6" style="font-size: 18px;">Dados Hotel</span>
            <div class="q-mt-sm row items-center">
              <div class="row items-center">
                <span class="q-pr-sm text-grey-6">{{ ratingModel.toFixed(1) }}</span>
                <q-rating v-model="ratingModel" size="1.6em" color="yellow-4" icon="star_border" icon-selected="star"
                  no-dimming readonly />
                <q-separator vertical inset size="2px" class="q-mx-xs" style="height: 16px;" color="grey-5" />
              </div>
              <q-icon name="wifi" class="q-px-xs" size="16px">
                <q-tooltip class="bg-grey">Tooltip</q-tooltip>
              </q-icon>
            </div>
            <div class="row items-center q-mt-sm">
              <q-chip square dense size="lg" color="grey-6" text-color="white" class="q-px-md q-ma-none"
                style="font-size: 18px;">
                Reembolsável
              </q-chip>
            </div>
          </div>
        </q-card-section>

        <q-separator vertical size="2px" />

        <q-card-section class="col-3">
          <div class="column items-start q-gutter-xxs public-sans">
            <span class="text-grey-9" style="font-size: 14px;">A partir de</span>
            <div>
              <span class="text-grey-6" style="font-size: 12px;">R$</span>
              <span style="font-size: 24px;">1.332,00</span>
            </div>
            <span class="text-grey-6">R$ 444,00/noite</span>
            <span class="text-grey-8 text-weight-bold">Impostos inclusos</span>
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
import { ref } from 'vue';

// import { Hotel } from 'src/services/interfaces/Hotels';

// interface Props {
//   hotel: Hotel
// }
// defineProps<Props>()

const ratingModel = ref(3)

const slide = ref(1)

function openDrawer() {
  console.log('openDrawer')
}
</script>

<style scoped></style>
