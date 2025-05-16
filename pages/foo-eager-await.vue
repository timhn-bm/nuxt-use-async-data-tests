<template>
  <div>
    <h1>{ server: true, lazy: false } + await</h1>
  </div>

  <div>data = {{ data }}</div>

  <div>loading = {{ pending }}</div>
</template>

<script setup lang="ts">
import { getData } from "~/fetch";

const { data, pending } = await useAsyncData(
  () => {
    return getData("data ");
  },
  { server: true, lazy: false }
);
</script>

<style scoped></style>
