<template>
<div class="window">
  <div class="input-text">
    <h2 class="header1">Jquery To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status</p>
    <InputText></InputText>
    <Items></Items>
    <!-- <FilterBtn></FilterBtn> -->
    <p><button class="allBtn" @click="showAll" :class="{selected:showing=='All'}">All</button>
    <button class="activeBtn" @click="showActive" :class="{selected:showing=='Active'}">Active</button>
    <button class="completeBtn" @click="showComplete" :class="{selected:showing=='Complete'}">Complete</button></p>
  </div>
</div>
</template>

<script>
import InputText from './InputText';
import Items from './Items';
// import FilterBtn from './FilterBtn';
 export default {
    data () {
      return {
        inputList: this.$store.state.inputList,
        showList:this.$store.state.showList,
        showing:"All",
		    // inputItem: {
        //   content: '',
        //   finished:false,
        //   isEditing:false,
		    // },
	    }
    },
    components:{
      InputText,
      Items,
      // FilterBtn
    },
    methods: {
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