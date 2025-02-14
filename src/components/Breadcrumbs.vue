<template>
  <section class="row items-center justify-between public-sans">
    <q-breadcrumbs class="text-grey">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>
      <q-breadcrumbs-el label="Início" />
      <q-breadcrumbs-el label="Hotéis" />
      <q-breadcrumbs-el v-if="selectedCity" :label="`Hospedagem em ${selectedCity}`" />
    </q-breadcrumbs>

    <div class="row items-center">
      <span class="text-grey q-px-xs">Organizar por</span><q-select borderless v-model="filterSelected"
        :options="filterOptions" class="text-italic" label-color="primary" />
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  selectedCity: string
}

defineProps<Props>()

const filterSelected = ref<string>('Recomendados')
const filterOptions: string[] = [
  'Recomendados',
  'Melhor avaliados'
]
</script>

<style scoped></style>
