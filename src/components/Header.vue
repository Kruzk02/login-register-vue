<script>
import axios from 'axios';

export default {
    data(){
        return{
        }
    },
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    },
    created(){
        if(!this.$store.getters.getToken){
            this.$router.push('/');
        }else{
            this.getUser();
            this.refreshToken();
        }
    },
    methods: {
        getUser(){
            axios.get('http://localhost:8080/api/get-username', { headers:{Authorization: 'Bearer '+this.$store.getters.getToken }})
            .then((r) => {
                this.$store.dispatch('setUser', r.data);
                return r
            })
            .catch((e) => {
                return e
            });
        },
        refreshToken(){
            axios.post('http://localhost:8080/api/refresh',{},{headers:{Authorization: 'Bearer '+this.$store.getters.getToken}})  
            .then((r)=>{
                this.$store.dispatch('setToken',r.data);
                return r
            })
            .catch((e)=>{
                return e
            })
        },
        logout(){
            axios.post('http://localhost:8080/api/logout',{}, { headers:{Authorization: 'Bearer '+this.$store.getters.getToken}})
            .then((r) => {
                this.$store.dispatch('clearToken');
                this.$store.dispatch('setUser', null);
                this.$router.push('/');
                return r
            })
            .catch((e) => {
                return e
            });
        }
    }
}
</script>

<template>
<div class="header-2">
    <nav class="bg-white py-2 md:py-4">
        <div class="container px-4 mx-auto md:flex md:items-center">

            <div class="flex justify-between items-center">
            <router-link to="/" class="font-bold text-xl text-indigo-600">VUE</router-link>
            <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                <i class="fas fa-bars"></i>
            </button>
            </div>

            <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <div v-if="user == null">
                    <router-link to="/login" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</router-link>
                    <router-link to="/register" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</router-link>
                </div>
                <div v-else>
                    <a @click="logout()" aria-current="page" href="#">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</div>
<h2 class="text-center mt-5">Welcome, {{user}}!</h2  >
</template>