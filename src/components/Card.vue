<template>
    <div class="w-full h-full">
        <img class="w-full h-1/2" alt="Vue logo" src="../assets/logo.png">
        <div class="w-full h-full border-t p-2">
            {{ item.title }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: 'Card',
    props: ['item'],
    setup() {

    }
})
</script>

<style scoped>
</style>
