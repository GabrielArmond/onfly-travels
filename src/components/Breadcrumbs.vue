<template>
  <section class="row items-center justify-between public-sans">
    <q-breadcrumbs class="text-grey">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el label="Início" />
      <q-breadcrumbs-el label="Hotéis" />
      <q-breadcrumbs-el v-if="selectedCity"
        :label="`Hospedagem em ${selectedCity.name}, ${selectedCity.state.shortname}`" />
    </q-breadcrumbs>

    <div class="row items-center">
      <span class="text-grey q-px-xs">Organizar por</span><q-select borderless v-model="filterSelected"
        :options="filterOptions" class="text-italic" @update:model-value="emit('updateFilter', filterSelected.value)" />
    </div>

  </section>
</template>

<script setup lang="ts">
import type { Places } from 'src/services/interfaces/Place';
import { ref } from 'vue';

interface Props {
  selectedCity: Places | null
}

defineProps<Props>()

type FilterOptions = { value: string; label: string }

const emit = defineEmits(['updateFilter'])

const filterSelected = ref<FilterOptions>({ value: 'recommended', label: 'Recomendados' })
const filterOptions: FilterOptions[] = [
  { value: 'recommended', label: 'Recomendados' },
  { value: 'best-rated', label: 'Melhor avaliados' }
]
</script>
