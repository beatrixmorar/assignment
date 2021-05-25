import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Quiz from '@/views/Quiz'
import Results from '@/views/Results'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/quiz',
            name: 'Quiz',
            component: Quiz
        },
        {
            path: '/quiz/results',
            name: 'Results',
            component: Results
        },
    ]
});

export default router;