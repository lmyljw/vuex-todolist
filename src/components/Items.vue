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
            item:{
                content: '',
                finished:false,
                isEditing:false
            }
        }
    },
    methods:{
        toggleFinshed(item){
            item.finished=!item.finished;
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
