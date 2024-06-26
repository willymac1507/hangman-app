import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HowView from '../views/HowToView.vue';
import CategoriesView from '../views/CategoriesView.vue';
import GameView from '../views/GameView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/how-to-play',
            name: 'how',
            component: HowView
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoriesView
        },
        {
            path: '/play/:category',
            name: 'play',
            component: GameView
        }
    ]
});

export default router;
