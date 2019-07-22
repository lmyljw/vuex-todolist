<template>
<div class="window">
  <div class="input-text">
    <h2 class="header1">Jquery To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status</p>
    <!-- <label for="inputNum"></label>
    <input type="text"
      id="inputNum"
      name="inputNum"
      class="edit"
      v-model="inputItem.content"
      @keydown.enter="addItem">
    <button class="add" @click="addItem" >add</button> -->
    <InputText></InputText>
    <Items></Items>
    <!-- <ol class="list">
      <li v-for="(item, index) in showList" v-bind:key="index">
        <input type="checkbox" @click="toggleFinshed(item)" :checked="item.finished" >
        <span v-show="!item.isEditing" @dblclick="toEdit(item)" :class="{finish:item.finished}">{{item.content}}</span>
        <span><input type="text" v-show="item.isEditing" @keydown.enter="edited(item)"  v-model="item.content" ></span>
      </li>
    </ol> -->
    <p><button class="allBtn" @click="showAll" :class="{selected:showing=='All'}">All</button>
    <button class="activeBtn" @click="showActive" :class="{selected:showing=='Active'}">Active</button>
    <button class="completeBtn" @click="showComplete" :class="{selected:showing=='Complete'}">Complete</button></p>
  </div>
</div>
</template>

<script>
import InputText from './InputText';
import Items from './Items';
 export default {
    data () {
      return {
        inputList: [],
        showList:[],
        showing:"All",
		    inputItem: {
          content: '',
          finished:false,
          isEditing:false,
		    },
	    }
    },
    components:{
      InputText,
      Items
    },
    methods: {
      // addItem: function () {
      //   this.inputList.push(this.inputItem);
      //   this.showList.push(this.inputItem);
			// 	this.inputItem = {
      //     content: '',
      //     finished:false,
      //     isEditing:false
			// 	};
      // },
      // toggleFinshed(item){
      //   item.finished=!item.finished
      // },
      // toEdit(item){
      //   item.isEditing=true
      // },
      // edited(item){
      //   item.isEditing=false
      // },
      showAll(){
        this.showList=this.inputList;
        this.showing="All"
      },
      showActive(){
        this.showList=this.inputList.filter(item=>!item.finished);
        this.showing='Active'
      },
      showComplete(){
        this.showList=this.inputList.filter(item=>item.finished);
        this.showing='Complete'
      }
    }
 }
</script>

<style scope >
  .window{
    align-self: center;
    box-sizing: border-box; 
    margin-left: 33%;
    width: 700px;
    border-radius: 20px;
    border:20px solid #ccc;
  }
  .hearder1{
    position: relative;
    left: -20%;
    width: 600px;
  }
  .input-text{
    margin:0 auto;
    width: 600px;
  }
  
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