import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/home/Home.vue';
import PostDetail from "./pages/post-detail/PostDetail.vue";
import PostIndex from "@/pages/post-index/PostIndex.vue";
import ContactUs from "@/pages/contact-us/ContactUs.vue";
import NotFound from "@/errors/NotFound.vue";
import Login from "@/pages/auth/login/Login.vue";
import Layout from "@/layout/Layout.vue";
import AuthLayout from './layout/AuthLayout.vue';
import Register from "@/pages/auth/login/register/Register.vue";

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home',
            },
            {
                path: '/post-detail', //Route paths should start with a "/": "post-detail" should be "/post-detail"
                component: PostDetail,
                name: 'post_detail',
            },
            {
                path: '/post-list', //Route paths should start with a "/": "post-detail" should be "/post-detail"
                component: PostIndex,
                name: 'post_list',
            },
            {
                path: '/contact-us',
                component: ContactUs,
                name: 'contact_us',
            },
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                component: Login,
                name: 'login',
            },
            {
                path: 'register',
                component: Register,
                name: 'register',
            },
        ]
    },
    // will match everything and put it under `route.params.pathMatch`
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
];
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes,
})

export default router;