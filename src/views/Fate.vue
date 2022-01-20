<template>
    <div class="overflow-y-hidden relative">
        <div class="flex flex-col items-center h-full">
            <magic-card :title="post.title" class="w-full h-full flex flex-col items-center overflow-hidden"/>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import MagicCard from '../components/MagicCard.vue';
export default {
    components: { MagicCard },
    setup() {
        let evt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
        console.log(evt);
        window.addEventListener(evt, () => {
            // screen.orientation.lock('portrait-primary');
            if ( window.orientation == 180 || window.orientation==0 ) {
                alert("竖屏");

            }

            if( window.orientation == 90 || window.orientation == -90 ) {
                alert("横屏");

            }
        })

        const post = reactive({
            id: 0,
            title: 'banner'
        });

        return {
            post
        };
    },
}
</script>

<style lang="ts">
</style>
