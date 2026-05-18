import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Declarative from '@/components/Declarative.vue';
import AttributeBinding from '@/components/AttributeBinding.vue';
import EventListener from '@/components/EventListener.vue';
import TwoWayBindings from '@/components/TwoWayBindings.vue';
import ConditionnalRendering from '@/components/ConditionnalRendering.vue';
import ListRendering from '@/components/ListRendering.vue';

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
    },
    {
        path: '/event-listeners',
        name: 'Event Listners',
        component: EventListener
    },
    {
        path: '/two-way-bindings',
        name: 'Two Way Bindings',
        component: TwoWayBindings
    },
    {
        path: '/conditionnal-rendering',
        name: 'Conditionnal Rendering',
        component: ConditionnalRendering
    },
    {
        path: '/list-rendering',
        name: 'List Rendering',
        component: ListRendering
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;