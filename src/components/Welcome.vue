<template>
    <div class="welcome">
        <!-- <div><router-link :to="{ name: 'todolist', params: { userName: name }}"> 开始使用</router-link></div> -->
        <div><router-link :to="{name:'home',params:{userName:name}}"> 开始使用</router-link></div>
        <!-- <Button type="primary" size="small" @click="goToHome">开始使用</Button> -->
        <span>请输入姓名</span><input type="text" v-model="name">
    </div>
</template>
<script>
export default {
    name:'welcome',
    data(){
        return{
            name:""
        }
    },
    methods:{
        goToHome(){
            this.$router.push({name:'home',params:{userName:name}});
        }
    }

}
</script>


