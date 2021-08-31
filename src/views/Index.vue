<template>
  <div class="container">
    <div class="h-48">
      main
    </div>
    <div class="flex flex-row w-full justify-around h-14 absolute bottom-0 bg-green-300 items-center">
      <div @click="click" @touchmove="move" @touchstart="myTouchStartHandler" @touchend="myTouchStartHandler2">首頁</div>
      <div>機遇</div>
      <div>聊天</div>
      <div>約會</div>
      <div>我的</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  components: { },
  setup() {
    const click = () => {
      console.log('click');
    };
    const move = (e: any) => {
      console.log('x: ', e.touches[0].clientX);
      console.log('y: ', e.touches[0].clientY);
    }
    const myTouchStartHandler = () => {
      console.log('touch');
    };
    const myTouchStartHandler2 = () => {
      console.log('touch2');
    };

    return {
      click,
      move,
      myTouchStartHandler,
      myTouchStartHandler2
    }
  }
});
</script>


<style scoped>

</style>