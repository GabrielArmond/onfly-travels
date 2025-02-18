<template>
  <q-card data-testid="book-hotel" class="my-card text-black q-mt-lg public-sans" style="width: 100%;">
    <q-card-section>
      <div class="text-h5 text-grey-8 text-weight-bold reserve-hotel">Reservar hotel</div>
    </q-card-section>

    <q-separator size="5px" />

    <q-card-section class="">
      <div class="text-subtitle1 public-sans">
        Destino<span class="text-red text-weight-medium">*</span>
      </div>
      <div class="q-py-xs">
        <q-select outlined dense v-model="placeSelected" option-label="label" use-input hide-selected fill-input
          input-debounce="0" input-style="width: 100%" :options="options" @filter="filterFn" @input="setModel"
          :disable="hasSearch">
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                Sem resultados...
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="row justify-end q-mt-xs">
        <q-btn color="primary" :label="hasSearch ? 'Alterar busca' : 'Buscar'" size="md" rounded class="q-px-xl"
          style="font-size: 1rem;" no-caps @click="hasSearch ? resetSearch() : searchPlace()"
          :disable="!placeSelected" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { placeServiceInstance } from 'src/services';
import type { Places } from 'src/services/interfaces/Place';
import { onMounted, ref } from 'vue';

const placeOptions = ref<Array<Places>>([])
const hasSearch = ref<boolean>(false)

const placeSelected = ref<Places | null>(null)
const options = ref<Array<Places>>([])

const emit = defineEmits(['placeSelected'])

async function fetchPlaces() {
  const data = await placeServiceInstance.getPlaces()

  placeOptions.value = data
}

function filterFn(val: string, update: (callback: () => void) => void) {
  const search = val.toLocaleLowerCase();

  update(() => {
    options.value = placeOptions.value
      .filter(v => v.name.toLocaleLowerCase().includes(search))
      .map(v => ({
        ...v,
        label: `${v.name}, ${v.state.name}`
      }));
  });
}

function setModel(val: Places) {
  placeSelected.value = val
}

function searchPlace() {
  const place = placeOptions.value.find(p => p.placeId === placeSelected.value?.placeId)

  hasSearch.value = true
  emit('placeSelected', place)
}

function resetSearch() {
  hasSearch.value = false
  placeSelected.value = null
}

onMounted(async () => {
  await fetchPlaces()
})

</script>

<style lang="scss" scoped></style>
