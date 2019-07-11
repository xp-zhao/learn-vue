import Vue from 'vue'
import VueRoute from 'vue-router'
import VueRouter from 'vue-router';
import View1 from '../components/page/Page1.vue'
import View2 from '../components/page/Page2.vue'

Vue.use(VueRoute)

export default new VueRouter({
    routes: [
        {
            path: '/page1',
            name: 'View1',
            component: View1
        },
        {
            path: '/page2',
            name: 'View2',
            component: View2
        }
    ]
})