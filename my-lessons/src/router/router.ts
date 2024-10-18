import { createRouter, createWebHistory } from 'vue-router';
import CaseRef from '../views/case-ref/Case.vue';
import Readme from '../views/readme/Readme.vue';
import CaseReactiveTime from '../views/case-reactive-time/Case.vue';
import CaseReactive from '../views/case-reactive/Case.vue';



// import About from './views/About.vue';

const routes = [
    { path: '/readme', component: Readme },
    { path: '/reactive-time', component: CaseReactiveTime },
    { path: '/reactive-ref', component: CaseRef },
    { path: '/reactive-reactive', component: CaseReactive },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
