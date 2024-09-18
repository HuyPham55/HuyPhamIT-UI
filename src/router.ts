import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/home/Home.vue';
import PostDetail from "./pages/post-detail/PostDetail.vue";

const routes: Array<any> = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/post-detail', //Route paths should start with a "/": "post-detail" should be "/post-detail"
        component: PostDetail,
        name: 'post_detail',
    }
];
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
})

export default router;