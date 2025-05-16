<template>
  <div>
    <h1>{ server: false, lazy: false }</h1>
  </div>

  <div>data = {{ data }}</div>

  <div>loading = {{ pending }}</div>

  <div>
    Server side: this does not wait for the call to finish before rendering the
    page<br />
    Client Side navigation: this should wait but it doesn't
  </div>
</template>

<script setup lang="ts">
import { getData } from "~/fetch";

// add "await" to block the client side navigation until the call completes
const { data, pending } = useAsyncData(
  () => {
    return getData("eager but no server");
  },
  { server: false, lazy: false }
);
</script>

<style scoped></style>
