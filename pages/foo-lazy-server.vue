<template>
  <h1>{ lazy: true, server: true }</h1>

  <div>data = {{ data }}</div>

  <div>loading = {{ pending }}</div>
</template>

<script setup lang="ts">
import { getData } from "~/fetch";
const { data, pending } = useAsyncData(
  async () => {
    const d = await getData("lazy and server");
    return d;
  },
  {
    lazy: true,
    server: true,
  }
);
</script>

<style scoped></style>
