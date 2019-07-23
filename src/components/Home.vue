<template>
    <div>
        <HomeHeader></HomeHeader>
        <Left class="left"></Left>
        <router-view></router-view>
    </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'
import Left from './Left.vue'
import TodoList from './TodoList.vue'
export default {
    components:{
        HomeHeader,
        Left,
        TodoList
    }
}
</script>
<style>
.left{
    float: left;
}


</style>

