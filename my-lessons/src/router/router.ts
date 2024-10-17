import { createRouter, createWebHistory } from 'vue-router';
import CaseRef from '../views/case-ref/CaseRef.vue';
import Readme from '../views/readme/Readme.vue';
import CaseReactiveBase from '../views/case-reactive-base/CaseReactiveBase.vue';



// import About from './views/About.vue';

const routes = [
    { path: '/readme', component: Readme },
    { path: '/reactive-base', component: CaseReactiveBase },
    { path: '/reactive-ref', component: CaseRef },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
