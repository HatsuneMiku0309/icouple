<template>
    <div class="overflow-y-auto">
        <div class="flex flex-col items-center">
            <!--<MagicCard v-for="(item, index) in posts" :key="index" :title="item.title" class="w-5/6 h-80 flex flex-col justify-center items-center overflow-hidden"/>-->
            <card-wrapper :posts="posts" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
// import MagicCard from '../components/MagicCard.vue';
import CardWrapper from '../components/CardWrapper.vue';

export default defineComponent({
    name: 'Home',
    components: {
        CardWrapper
    },
    setup() {
        let mockData = [];
        for (let i = 1 ; i <= 10 ; i++) {
            mockData.push({
                title: 'banner' + i
            });
        }
        const posts = reactive(mockData);

        return { posts }
    }
});

</script>

<style scoped>

</style>
