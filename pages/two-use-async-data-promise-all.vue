<template>
  <div>
    {{ data1 }}
    {{ data2 }}
    <div v-if="pending1">Loading data 1...</div>
    <div v-if="pending2">Loading data 2...</div>
  </div>
</template>

<script setup lang="ts">
import {
  useTwoCalls,
  useTwoCallsWithPromiseAll,
  useTwoCallsWorking,
} from "~/composables/useTwoCalls";

const [{ data: data1, pending: pending1 }, { data: data2, pending: pending2 }] =
  await useTwoCallsWithPromiseAll();
</script>

<style scoped></style>
