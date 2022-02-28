<template>
  <div class="overflow-y-hidden relative">
    <div class="flex flex-col items-center h-full" v-for="post in posts" :key="post.id">
      <magic-card :post="post" :touchEnabled="true" class="w-full h-full flex flex-col items-center overflow-hidden"/>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity';
import MagicCard from '../components/MagicCard.vue';

export default {
  components: { MagicCard },
  setup() {
    // let evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    // console.log(evt);
    // window.addEventListener(evt, () => {
    //     // screen.orientation.lock('portrait-primary');
    //     if ( window.orientation == 180 || window.orientation==0 ) {
    //         alert("竖屏");

    //     }

    //     if( window.orientation == 90 || window.orientation == -90 ) {
    //         alert("横屏");

    //     }
    // })

    const posts = reactive([{
      id: 0,
      image: 'miku1.png',
      title: 'MIKU1',
      description: `watashiwa, kawayii~
        watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~
        watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~
        watashiwa, kawayii~
        watashiwa, kawayii~
        watashiwa, kawayii~watashiwa, kawayii~
        watashiwa, kawayii~watashiwa, kawayii~

        watashiwa, kawayii~watashiwa, kawayii~watashiwa, kawayii~

        watashiwa, kawayii~
        watashiwa, kawayii~ fuck
      `
    }, {
      id: 1,
      image: 'miku2.png',
      title: 'MIKU2',
      description: 'watashiwa, kawayii~'
    }, {
      id: 2,
      image: 'miku2.png',
      title: 'MIKU3',
      description: 'watashiwa, kawayii~'
    }]);

    return {
      posts
    };
  },
}
</script>

<style scoped>

</style>
