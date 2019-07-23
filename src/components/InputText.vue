<template>
    <div id="inputText">
        <label for="inputNum"></label>
        <input type="text"
        id="inputNum"
        name="inputNum"
        class="edit"
        v-model="inputItem.content"
        @keydown.enter="addItem">
    <button class="add" @click="addItem" >add</button></div>
</template>
<script>
import axios from 'axios'
export default {
    name:"inputText",
    data(){
        return{
            inputItem:{
                content:"",
                finished:false,
                isEditing:false
            }
        }
    },
    computed:{
      username(){
        return this.$route.params.userName
      }
    },
    methods:{
        addItem(){
            // axios.post('http://localhost:3001/todos',this.inputItem)
            // .then(function(response){
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            this.$store.dispatch('addItem',this.inputItem);
            this.inputItem = {
                content: '',
                finished:false,
                isEditing:false
			};
        }
    }
}
</script>
<style scoped>
.add{
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
  .edit{
    /*display:block ;*/
    height: 30px;
    width: 300px;
    box-sizing: border-box;
    padding-left: 20px;
    border-radius: 4px;
    border:1px solid #ccc;
    box-shadow: 0 0 5px #ccc;
  }
</style>

