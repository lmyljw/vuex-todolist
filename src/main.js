import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './components/store'
import Welcome from './components/Welcome.vue'
import TodoList from './components/TodoList.vue'
import Home from './components/Home.vue'
import Left from './components/Left.vue'
import My from './components/My.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(iView);
Vue.use(Vuex)
Vue.use(VueRouter)
const routes=[
{
  path:'/',
  component:Welcome
},
{
  path:'/home/:userName',
  redirect: '/home/:userName/todolist',
  name:'home',
  component:Home,
  children:[
    {
      path:'todolist',
      name:'todolist',
      component:TodoList
    },
    {
      path:'my',
      name:'my',
      component:My
    }
  ]
},
{
  path:'/left',
  component:Left
}
]
const router =new VueRouter({routes})

new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')
