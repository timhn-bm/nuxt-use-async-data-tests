<template>
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <NuxtLink to="/">Back</NuxtLink>

        <NuxtLink to="/foo-eager-server">Eager + Server</NuxtLink>
        <NuxtLink to="/foo-eager">Eager</NuxtLink>
        <NuxtLink to="/foo-lazy">Lazy</NuxtLink>
        <NuxtLink to="/foo-lazy-server">Lazy + Server</NuxtLink>

    </div>

    <div><NuxtPage ></NuxtPage></div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>