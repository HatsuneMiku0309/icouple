<template>
  <div class="w-full h-full">
    <a :href="'/activity/' + item.id">
      <img class="w-1/2 h-1/2 m-auto" alt="Vue logo" src="../assets/logo.png">
      <div class="w-full h-full border-t p-2 break-words whitespace-pre-wrap">
        {{ item.title }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card',
  props: ['item'],
  setup() {

  }
}
</script>

<style scoped>
</style>
