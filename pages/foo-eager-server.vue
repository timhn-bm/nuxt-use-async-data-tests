<template>
  <h1>{ server: true, lazy: false }</h1>
  <div>data = {{ data }}</div>

  <div>loading = {{ pending }}</div>
</template>

<script setup lang="ts">
import { getData } from "~/fetch";
const { data, pending } = useAsyncData(
  async () => {
    return await getData("eager server ");
  },
  { server: true, lazy: false }
);
</script>

<style scoped></style>
