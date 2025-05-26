<template>
  <div>
    {{ data1 }}
    {{ data2 }}
    <div v-if="pending1">Loading data 1...</div>
    <div v-if="pending2">Loading data 2...</div>
  </div>
</template>

<script setup lang="ts">
import { useTwoCalls, useTwoCallsWorking } from "~/composables/useTwoCalls";

const { data1, data2, pending1, pending2, promise1, promise2 } =
  useTwoCallsWorking();

await promise1;
await promise2;
</script>

<style scoped></style>
