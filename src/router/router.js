import Vue from 'vue'
import VueRoute from 'vue-router'
import VueRouter from 'vue-router';
import View1 from '../components/page/Page1.vue'
import View2 from '../components/page/Page2.vue'
import Table from '../components/page/Table.vue'
import TodoList from '../components/todoList/AppTodoList.vue'
import Comment from '../components/comment/Comment.vue'
import Tree from '../components/page/Tree.vue'
import Login from '../components/page/login/Login.vue'
import Register from '../components/page/register/Register.vue'
import Home from '../components/home/Home.vue'

Vue.use(VueRoute)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/page1',
            name: 'View1',
            component: View1
        },
        {
            path: '/page2',
            name: 'View2',
            component: View2
        },
        {
            path: '/table',
            name: 'Table',
            component: Table
        },
        {
            path: '/tree',
            name: 'Tree',
            component: Tree
        },
        {
            path: '/todoList',
            name: 'TodoList',
            component: TodoList
        },
        {
            path: '/comment',
            name: 'Comment',
            component: Comment
        }
    ]
})