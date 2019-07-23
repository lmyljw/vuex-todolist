import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './components/store'
import Welcome from './components/Welcome.vue'
import TodoList from './components/TodoList.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
const routes=[
{
  path:'/',
  component:Welcome
},
{
  path:'/todolist/:userName',
  name:'todolist',
  component:TodoList
}]
const router =new VueRouter({routes})

new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
