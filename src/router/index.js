import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Declarative from '@/components/Declarative.vue';
import AttributeBinding from '@/components/AttributeBinding.vue';

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
    },
    {
        path: '/attribute-binding',
        name: 'Attribute Binding',
        component: AttributeBinding
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;