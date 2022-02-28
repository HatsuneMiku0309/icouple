<template>
  <div class="overflow-y-auto relative">
    <div class="flex flex-col items-center">
      <!-- <MagicCard v-for="(item, index) in posts" :key="index" :title="item.title" class="w-5/6 h-80 flex flex-col justify-center items-center overflow-hidden"/> -->
      <card-wrapper :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import CardWrapper from '../components/CardWrapper.vue';

export default {
  name: 'Home',
  components: {
    CardWrapper,
    // MagicCard
  },
  setup() {
    let mockData = [];
    for (let i = 1 ; i <= 10 ; i++) {
      mockData.push({
        id: i,
        title: 'banner' + i
      });
    }
    const posts = reactive(mockData);

    return { posts }
  }
};

</script>

<style scoped>

</style>
