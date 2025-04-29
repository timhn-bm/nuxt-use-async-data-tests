<template>
    <div>data = {{ data }}</div>
  
    <div>loading = {{ pending }}</div>
  </template>
  
  <script setup lang="ts">
  import { getData } from '~/fetch';
  const { data, pending } = useAsyncData(
    "orders",
    async () => {
      return await getData("eager server ")
    },
    { server: true, lazy: false }
  );
  </script>
  
  <style scoped></style>
  