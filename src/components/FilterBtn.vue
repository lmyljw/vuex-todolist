<template>
    <div class="filterBtn">
        <p><button class="allBtn" @click="showAll" :class="{selected:showing=='All'}">All</button>
        <button class="activeBtn" @click="showActive" :class="{selected:showing=='Active'}">Active</button>
        <button class="completeBtn" @click="showComplete" :class="{selected:showing=='Complete'}">Complete</button></p>
    </div>
</template>

<script>
export default {
    name:"filterBtn",
    data(){
        return{
            showing:this.$store.state.showing,
        }
    },
    methods:{
        showAll(){
            this.$store.dispatch('showAll');
            this.showing="All"
        },
        showActive(){
            this.$store.dispatch('showActive');
            this.showing='Active'
        },
        showComplete(){
            this.$store.dispatch('showComplete');
            this.showing='Complete'
        }
    }
    
}
</script>

<style>
.allBtn,.activeBtn,.completeBtn{
    background: #fff;
    text-decoration: none;
    line-height: 28px;
    width: 90px;
    font-size: 18px;
    border: 0;
    outline: 0;
    margin-left: 5px;
    border-radius: 5px;
    color:#fc999b;
  }
  .selected{
    background: #fff;
    text-decoration: none;
    line-height: 28px;
    width: 90px;
    font-size: 18px;
    border:2px solid#fc999b;
    outline: 0;
    margin-left: 5px;
    border-radius: 5px;
    color:#fc999b;
  }
</style>
