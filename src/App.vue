<template>
  <router-view class="bg-grey-2" />
  <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>
