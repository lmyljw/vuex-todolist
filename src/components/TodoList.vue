<template>
<div class="window">
  <div class="input-text">
    <h2 class="header1">Jquery To Do List</h2>
    <p>Simple Todo List with adding and filter by diff status</p>
    <InputText></InputText>
    <Items></Items>
    <FilterBtn></FilterBtn>
  </div>
</div>
</template>

<script>
import InputText from './InputText';
import Items from './Items';
import FilterBtn from './FilterBtn';
import axios from 'axios'
 export default {
    data () {
      return {
	    }
    },
    
    mounted:function(){
        this.$store.dispatch('initItem')
    },
    components:{
      InputText,
      Items,
      FilterBtn
    },
    
    methods: {
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

</style>