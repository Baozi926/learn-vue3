import { createRouter, createWebHistory } from 'vue-router';
import CaseRef from '../views/case-ref/Case.vue';
import Readme from '../views/readme/Readme.vue';
import CaseReactiveTime from '../views/case-reactive-time/Case.vue';
import CaseReactive from '../views/case-reactive/Case.vue';
import Todo from '../views/todo/Todo.vue';



// import About from './views/About.vue';

const routes = [
    { path: '/todo', component: Todo },
    { path: '/readme', component: Readme },
    { path: '/reactive-time', component: CaseReactiveTime },
    { path: '/reactive-ref', component: CaseRef },
    { path: '/case-ref-watch', component: () => import('../views/case-ref-watch/Case.vue') },
    { path: '/case-shallow-ref', component: () => import('../views/case-shallow-ref/Case.vue') },

    { path: '/case-computed', component: () => import('../views/case-computed/Case.vue') },

    { path: '/reactive-reactive', component: CaseReactive },
    {
        path: '/:pathMatch(.*)',
        redirect: "/todo"
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
