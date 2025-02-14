<template>
  <q-card class="my-card text-black q-mt-lg public-sans" style="width: 100%;">
    <q-card-section>
      <div class="text-h5 text-grey-8 text-weight-bold">Reservar hotel</div>
    </q-card-section>

    <q-separator size="5px" />

    <q-card-section class="">
      <div class="text-subtitle1 public-sans">
        Destino<span class="text-red text-weight-medium">*</span>
      </div>
      <div class="q-py-xs">
        <q-select outlined dense :model-value="placeSelected" use-input hide-selected fill-input input-debounce="0"
          input-style="width: 100%" :options="options" @filter="filterFn" @input-value="setModel">
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
        <q-btn color="primary" label="Buscar" size="md" rounded class="q-px-xl" style="font-size: 1rem;" no-caps
          @click="searchPlace" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { placeServiceInstance } from 'src/services';
import type { Places } from 'src/services/interfaces/Place';
import { onMounted, ref } from 'vue';

const placeOptions = ref<Array<Places>>([])

const placeSelected = ref<string>('')
const options = ref<Array<string>>(placeOptions.value.map(place => place.name))

const emit = defineEmits(['placeSelected'])

async function fetchPlaces() {
  const data = await placeServiceInstance.getPlaces()

  placeOptions.value = data
}

function filterFn(val: string, update: (callback: () => void) => void) {
  update(() => {
    const search = val.toLocaleLowerCase()

    options.value = placeOptions.value
      .filter(v => v.name.toLocaleLowerCase().indexOf(search) > -1)
      .map(v => `${v.name}, ${v.state.name}`)
  })
}

function setModel(val: string) {
  placeSelected.value = val
}

function searchPlace() {
  emit('placeSelected', placeSelected.value)
}

onMounted(async () => {
  await fetchPlaces()
})

</script>

<style lang="scss" scoped></style>
