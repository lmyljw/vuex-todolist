import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        inputList: [],
        showList:[],
        showing:"All",
		inputItem: {
          content: '',
          finished:false,
          isEditing:false,
        }
    },
    mutations:{
        addItem (state,payload) {
            state.inputList.push(payload);
            state.showList.push(payload);
            state.inputItem = {
                content: '',
                finished:false,
                isEditing:false
            }
        },
        toggleFinshed(state,payload){
            let item = state.inputList.filter(item=>payload.inputItem.content==item.content);
            item.finished=!item.finished;
        },
        showAll(state) {
            state.showing="All";
            state.showList=state.inputList;
        },
        showActive(state) {
            state.showing="Active";
            state.showList=state.inputList.filter(item=>!item.finished);
        },
        showComplete(state) {
            state.showing="Complete"
            state.showList=state.inputList.filter(item=>item.finished)
        }
    }
})