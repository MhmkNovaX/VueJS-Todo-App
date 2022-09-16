import { createRouter, createWebHistory  } from 'vue-router'

import HomePage from '../views/HomePage'
import AboutPage from '../views/AboutPage'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage, 
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
})

export default router