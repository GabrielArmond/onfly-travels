<template>
  <q-dialog v-model="openDialog" position="right">
    <q-card style="width: 350px">
      <q-linear-progress :value="0.6" color="pink" />

      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">The Walker</div>
          <div class="text-grey">Fitz & The Tantrums</div>
        </div>

        <q-space />

        <q-btn flat round icon="fast_rewind" />
        <q-btn flat round icon="pause" />
        <q-btn flat round icon="fast_forward" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  open: boolean
}

const props = defineProps<Props>()

const openDialog = computed(() => {
  return props.open
})
</script>

<style scoped></style>
