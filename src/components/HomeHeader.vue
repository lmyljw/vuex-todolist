<template>
    <div>
        <button class="backBtn"  @click="backToWelcome">back</button>
        <span class="userName">用户名：{{getUserName}}</span>
    
    </div>
</template>
<script>
export default {
    name:'home',
    computed:{
        getUserName(){
            return this.$route.params.userName
            
        }
    },
    
    methods:{
        backToWelcome(){
            let c=confirm("确认要转到欢迎页面吗？")
            if (c==true){
                this.$router.push("/")
            }else{

            }
        }
    }
}
</script>
<style>
.backBtn{
    float: left;
    background: #fc999b;
    text-decoration: none;
    line-height: 28px;
    width: 60px;
    font-size: 18px;
    border: 0;
    outline: 0;
    margin-left: 5px; 
    border-radius: 5px;
    color: #fff;
  }
  .userName{
      float: right;
  }
</style>