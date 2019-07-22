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

    }
})