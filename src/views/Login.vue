<template>
    <div class="flex flex-col items-center h-screen">
        <div class="flex flex-col p-20 items-center w-full">
            <img class="w-32" alt="Vue logo" src="../assets/logo.png">
            <div class="mt-5">
                ICouple
            </div>
        </div>
        <div class="flex flex-col justify-center items-center my-10 w-full h-32">
            <div class="flex flex-col my-2 items-center w-11/12">
                <span class="w-full text-left mb-1">Acoount</span>
                <input type="text" class="w-full h-10 border rounded-xl border-gray-900 px-2" v-model="account" placeholder="EmpNo"/>
            </div>
            <div class="flex flex-col my-2 items-center w-11/12">
                <div class="flex flex-row w-full mb-1">
                    <span class="w-full text-left">Password</span>
                    <span @click="testClickScope" class="w-full text-right text-blue-600 underline">forget password</span>
                </div>
                <div class="w-full relative">
                    <input type="password" class="w-full h-10 border rounded-xl border-gray-900 px-2" v-model="password" placeholder="Password"/>
                </div>
            </div>
            <div class="flex flex-row my-2 items-center w-full justify-evenly mt-10">
                <button class="w-20 border rounded-full border-gray-900 p-2" @click="signUp">Sign up</button>
                <button class="w-20 border rounded-full border-gray-900 p-2" @click="signIn">Sign in</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Login',
    setup() {
        const router = useRouter();
        const loginData = reactive({
            account: '',
            password: ''
        });
        const testClickScope = () => {
            console.log('testClickScope');
        };
        const signIn = async () => {
            console.log('account: ' + loginData.account);
            console.log('password: ' + loginData.password);
            // call api verify loginData
            // response and check cookies has token data
            // redirect to Home page
            let token = btoa(loginData.account + loginData.password);
            // let data = atob(token);
            localStorage.setItem('token', token);
            router.push('Home');
        };
        const signUp = () => {
            console.log('go sign up page');
            router.push('SignUp');
        }

        return {
            ...toRefs(loginData),
            testClickScope,
            signIn,
            signUp
        };
    }
});
</script>

<style scoped>

</style>
