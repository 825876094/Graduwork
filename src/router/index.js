import Vue from "vue";import VueRouter from "vue-router"
const Home = ()=> import('../views/Home')
const Page = ()=> import('../components/content/Page')
const Page2 = ()=> import('../components/content/Page2')
const Container = ()=> import('../components/content/Container')
Vue.use(VueRouter)
const  routes=[
    {
        path:'',
        redirect:'/container'
    },
    {
        path:'/home',
        component:Home
    },
    {
       path:'/container',
       component:Container
    },
    {
        path:'/page',
        component:Page
    },
  {
    path:'/page2',
    component:Page2
  },

]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router
