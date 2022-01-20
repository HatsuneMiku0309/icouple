<template>
    <div class="flex flex-col w-full h-full">
        <div class="flex items-center h-12">
            <div class="ml-3"><a href="/">&lt;</a></div>
        </div>
        <div class="w-full h-32">
            account
        </div>
        <div class="flex flex-col flex-grow flex-shrink m-4">
            <div v-for="(item, index) in list" :key="index" class="relative flex items-center w-full h-full hover:underline">
                <i class="couple-icon smile before:mt-2 before:bg-cover before:bg-no-repeat before:w-5 before:h-5 before:mr-2"></i>
                <span>{{item.title}}</span>
                <span class="absolute right-0">&gt;</span>
            </div>
        </div>
    </div>    
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
    name: 'Setting',
    setup() {
        let _list = [];
        for (let i = 0 ; i < 10 ; i++) {
            _list.push({
                id: i,
                title: `Setting ${i}`
            });
        }
        const list = reactive(_list);

        return {
            list
        };
    }
}
</script>

<style scoped>
.couple-icon:before {
  content: "";
  display: flex;
  justify-content: center;
  align-items: center;
}

.couple-icon.smile::before {
  background-image: url("@/assets/images/svg/fi-rr-laugh.svg");
}

</style>
