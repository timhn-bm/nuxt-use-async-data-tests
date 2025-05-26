<template>
  <div>
    {{ data1 }}
    {{ data2 }}
  </div>
</template>

<script setup lang="ts">
import { useTwoCalls, useTwoCallsWorking } from "~/composables/useTwoCalls";

const { data1, data2 } = await useSequentialAsyncDatas();
</script>

<style scoped></style>
