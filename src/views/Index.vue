<template>
  <Heart v-if="isShowLoad" />
  
  <div class="flex flex-col h-full w-full">
    <div class="flex flex-row h-48 items-center bg-green-300">
      <div class="absolute left-2">Control</div>
      <div class="absolute right-2">Notify</div>
    </div>
    <div class="flex-grow overflow-hidden p-2">
      <router-view class="h-full w-full"/>
    </div>
    <div class="flex flex-row flex-grow-0 flex-shrink-0 w-full justify-around h-14 bg-green-300 items-center">
      <router-link to="/">Home</router-link>
      <router-link to="/fate">Fate</router-link>
      <router-link to="/">Chat</router-link>
      <router-link to="/">Date</router-link>
      <router-link to="/">Me</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Heart from '../components/Loaders/Heart.vue';

export default defineComponent({
  name: 'Index',
  components: { Heart },
  setup() {
    const router = useRouter();
    const isShowLoad = ref(false);
    const checkToken = () => {
      let token = localStorage.getItem('token');
      if (!token) {
        isShowLoad.value = true;

        // demo redirect login page when no has token 
        setTimeout(() => {
          isShowLoad.value = false;
          router.replace('/login');
        }, 300);
      }
    };
    checkToken();

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
      isShowLoad,
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