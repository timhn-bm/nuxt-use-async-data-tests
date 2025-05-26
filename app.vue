<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <h1>Let's better understand useAsyncData</h1>

    <div><NuxtPage></NuxtPage></div>

    <div
      style="
        display: flex;
        flex-direction: row;
        gap: 10px;
        border: 1px solid lightblue;
        padding: 10px;
      "
    >
      <NuxtLink to="/">Home</NuxtLink>

      <!-- <NuxtLink to="/foo-eager-server">{ lazy: false, }</NuxtLink> -->
      <NuxtLink to="/foo-eager">{ lazy: false, server: false }</NuxtLink>

      <NuxtLink to="/foo-eager-await"
        >{ server: true, lazy: false } + await</NuxtLink
      >

      <NuxtLink to="/foo-lazy">{ lazy: true, server: false }</NuxtLink>
      <NuxtLink to="/foo-lazy-server">{ lazy: true}</NuxtLink>

      <NuxtLink to="/fetch">fetch immediately</NuxtLink>

      <NuxtLink to="/two-use-async-data">2x useAsyncData</NuxtLink>
      <NuxtLink to="/two-use-async-await-promises"
        >2x useAsyncData with await promises
      </NuxtLink>
      <NuxtLink to="/sequential-useAsyncData">Sequential useAsyncData</NuxtLink>

      <NuxtLink to="two-use-async-data-promise-all"
        >useAsyncData with Promise.all</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
