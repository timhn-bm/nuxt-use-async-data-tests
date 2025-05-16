<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { getData } from "~/fetch";

const data = await getData("data");
</script>

<style scoped></style>
