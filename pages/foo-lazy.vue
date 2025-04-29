
<template>


    <div>
        <h1>Lazy and no server</h1>

        </div>
    <div>
            data = {{  data  }}
    </div>

    <div> loading = {{ pending  }}</div>


    <div>
        Server side: this waits for the call to finish before rendering the page<br/>
        Client Side navigation: this doesn't wait
    </div>
</template>

<script setup lang="ts">
import { getData } from '~/fetch';

const { data, pending } = useAsyncData('orders', async () => {
    const data = await getData("lazy and no server")
    return data
},  {
    lazy: true,
    server: false
})
</script>

<style scoped>

</style>