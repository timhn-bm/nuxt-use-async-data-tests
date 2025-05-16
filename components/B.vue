<template>
  <div>B.vue</div>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const { data } = useAsyncData(
  "posts",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
  },
  { server: false }
);

const { data: data2 } = useFetch(
  "https://jsonplaceholder.typicode.com/posts",

  { server: false }
);
</script>

<style scoped></style>
