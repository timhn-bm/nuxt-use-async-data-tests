<template>
  <div>
    {{ data1 }}
    {{ data2 }}
    <div v-if="pending1">Loading data 1...</div>
    <div v-if="pending2">Loading data 2...</div>
  </div>
</template>

<script setup lang="ts">
import { useTwoCalls } from "~/composables/useTwoCalls";

const { data1, data2, pending1, pending2 } = await useTwoCalls();
</script>

<style scoped></style>
