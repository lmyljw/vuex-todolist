<template>
    <div id="items">
        <ol class="list">
            <li v-for="(item, index) in showList" v-bind:key="index">
                <input type="checkbox" @click="toggleFinshed(item)" :checked="item.finished" >
                <span v-show="!item.isEditing" @dblclick="toEdit(item)" :class="{finish:item.finished}">{{item.content}}</span>
                <span><input type="text" v-show="item.isEditing" @keydown.enter="edited(item)"  v-model="item.content" ></span>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
    name:"items",
    data(){
        return{
            showList:this.$store.state.showList,
            item:this.$store.state.inputItem
        }
    },
    methods:{
        toggleFinshed(item){
            item.finished=!item.finished;
            this.$store.commit("toggleFinshed",item)
        },
        toEdit(item){
            item.isEditing=true
        },
         edited(item){
            item.isEditing=false
         },
    }
}
</script>
<style scoped>
.list {
    margin:0 auto;
  }
  .list li{
    text-align: left;
    margin-left: 220px;
    position: relative;
    left: -20%;
    padding: 10px 0;
  }

  .finish{
    text-decoration: line-through;
    color: #ccc;
  }
</style>
