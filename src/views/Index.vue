<template>
  <Heart v-if="isShowLoad" />
  
  <div class="flex flex-col h-full w-full">
    <div class="flex flex-row h-12 flex-shrink-0 items-center absolute">
      <div class="w-screen">
        <div class="absolute left-1 top-2 inline-block" @click="showSetting"><i class="couple-icon setting before:bg-cover before:bg-no-repeat before:w-6 before:h-6 md:before:w-8 md:before:h-8 before:relative before:inline-block"></i></div>
        <div class="absolute right-1 top-2 inline-block" @click="showNotify"><i class="couple-icon notify before:bg-cover before:bg-no-repeat before:w-6 before:h-6 md:before:w-8 md:before:h-8 before:relative before:inline-block"></i></div>
      </div>
    </div>
    <div class="flex-grow overflow-hidden p-2">
      <router-view class="h-full w-full"/>
    </div>
    <Menu />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import Heart from '../components/Loaders/Heart.vue';
import Menu from '../components/Menu.vue';

export default defineComponent({
  name: 'Index',
  components: { Heart, Menu },
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

    const showNotify = () => {
      alert('showNotify');
    };
    const showSetting = () => {
      alert('showSetting');
    }
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
      showNotify,
      showSetting,
      move,
      myTouchStartHandler,
      myTouchStartHandler2
    }
  }
});
</script>


<style scoped>
.couple-icon:before {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
}

.couple-icon.notify::before {
  background-image: url("@/assets/images/svg/fi-rr-bell.svg");
}

.couple-icon.setting::before {
  background-image: url("@/assets/images/svg/fi-rr-settings.svg");
}

::-webkit-scrollbar {
  display: none;
}
</style>