import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/home/home.vue';

const routes: Array<any> = [
    {
        path: '/',
        component: Home,
    }
];
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
})

export default router;