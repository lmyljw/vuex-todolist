import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        inputList: [],
        showing:"All",
		
    },
    mutations:{
        addItem (state,payload) {
            state.inputList.push(payload);
            state.inputItem = {
                content: '',
                finished:false,
                isEditing:false
            }
        },
        toggleFinshed(state,payload){
            let item = state.inputList.filter(item=>payload.content==item.content);
            item.finished=!item.finished;
        },
        showAll(state) {
            state.showing="All";
            
        },
        showActive(state) {
            state.showing="Active";
            
        },
        showComplete(state) {
            state.showing="Complete"
        },
        edited(state,payload){
            let item = state.inputList.filter(item=>payload.content==item.content);
            item.content=payload.content;
            item.isEditing=false;
        },
        initItem(state,payload){
            state.inputList.push(...payload.data);
        }
    },
    actions:{
        addItem({commit},payload){
            axios.post('http://localhost:3001/todos',payload).then((response)=>{
                commit('addItem',payload)
            })
            .catch(function (error) {
                console.log(error);
            });
            // commit('addItem',payload)
        },
        toggleFinshed(context,payload){
            context.commit('toggleFinshed',payload);
        },
        showAll(context) {
            context.commit('showAll');
        },
        showActive(context) {
            context.commit('showActive');          
        },
        showComplete(context) {
            context.commit('showComplete');
        },
        edited(context,payload){
            context.commit('edited',payload);
        },
        initItem(context){
            axios.get('http://localhost:3001/todos')
            .then( (response)=> {
            console.log(response);
            context.commit('initItem',response)
            })
            .catch(function (error) {
            console.log(error);
        });
            
        }
    }
})