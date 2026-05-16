import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Declarative from '@/components/Declarative.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/declarative-rendering',
        name: 'Declarative Rendering',
        component: Declarative
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;