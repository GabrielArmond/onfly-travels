<template>
  <q-page data-testid="index-page" class="column justify-start container" style="width: 100%;">
    <BookHotel @place-selected="place => placeStore.placeSelected = place" />
    <Breadcrumbs :selected-city="placeStore.placeSelected || null" @update-filter="val => orderBy = val" />
    <div v-if="hotelStore.loadingHotels" class="q-gutter-xs full-width">
      <HotelSkeleton v-for="(_, index) in 5" :key="index" />
    </div>
    <q-infinite-scroll @load="onLoadHotels" :offset="250">
      <div class="q-gutter-xs full-width" v-for="(hotel, index) in hotelStore.hotels" :key="index">
        <HotelsCard class="q-py-xs" :hotel="hotel" @open-drawer="value => openDialog(value)" />
      </div>
      <template v-slot:loading>
        <div class=" row justify-center q-my-lg">
          <q-spinner color="primary" size="3em" />
        </div>
      </template>
    </q-infinite-scroll>

    <div v-if="hotelStore.hotels.length <= 0" class="column items-center justify-center full-width text-center">
      <q-icon name="error" size="4rem" color="primary" />
      <span class="text-grey-8 inter q-mt-md text-h5">Nenhum hotel encontrado :(</span>
    </div>

  </q-page>
  <HotelsDialog />
</template>

<script setup lang="ts">
import BookHotel from 'src/components/BookHotel.vue';
import Breadcrumbs from 'src/components/Breadcrumbs.vue';
import HotelsCard from 'src/components/Hotels/Card.vue';
import HotelsDialog from 'src/components/Hotels/Dialog/index.vue';
import HotelSkeleton from 'src/components/Hotels/Skeleton.vue'
import { onMounted, ref, watch } from 'vue';
import { hotelServiceInstance } from 'src/services';
import { useHotelsStore } from 'src/stores/HotelStore';
import type { Hotel } from 'src/services/interfaces/Hotels';
import type { HotelsParams } from 'src/services/HotelService';
import { usePlaceStore } from 'src/stores/PlaceStore';

const hotelStore = useHotelsStore()
const placeStore = usePlaceStore()
const isLastPage = ref(false)
const isLoading = ref(false);
const orderBy = ref<'recommended' | 'best-rated'>('recommended')

const params = ref<HotelsParams>({
  page: 1,
  orderBy: 'recommended',
  pageSize: 10,
  placeId: null
})

async function fetchHotels(newParams?: HotelsParams) {
  hotelStore.loadingHotels = true
  if (newParams) {
    params.value = {
      orderBy: newParams.orderBy,
      page: 1,
      pageSize: 10,
      placeId: newParams.placeId
    }
  }
  try {
    const hotels = await hotelServiceInstance.getHotels(params.value)
    hotelStore.hotels = hotels.data
    isLastPage.value = hotels.data.length < params.value.pageSize
  } catch (error) {
    console.error(error)
  } finally {
    hotelStore.loadingHotels = false
  }
}

function openDialog(hotel: Hotel) {
  hotelStore.hotelSelected = hotel

  hotelStore.dialogHotel = true
}

function onLoadHotels(index: number, done: () => void) {
  if (isLastPage.value) {
    done();
    return;
  }

  const newParams = { ...params.value, page: params.value.page + 1 };
  isLoading.value = true;

  setTimeout(() => {
    try {
      hotelServiceInstance.getHotels(newParams).then(newHotels => {
        if (newHotels.data.length === 0) {
          isLastPage.value = true;
        } else {
          hotelStore.hotels = [...hotelStore.hotels, ...newHotels.data];
          params.value.page++
        }

      }).catch(error => {
        console.error(error);
        done()
      });
      done()
    } catch (error) {
      console.error(error);
      done()
    } finally {
      isLoading.value = false;
      done();
    }
  }, 2000)
}
onMounted(async () => {
  await fetchHotels()
})

watch(() => placeStore.placeSelected, async (newPlace) => {
  if (newPlace) {
    await fetchHotels({ ...params.value, placeId: newPlace.placeId })
  }
})

watch(() => orderBy.value, async (newOrderBy) => {
  await fetchHotels({ ...params.value, orderBy: newOrderBy })
})

</script>
