import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import SignInView from '../views/SignInView.vue'
import PostCreate from '../components/PostCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
    // {
    //   path: '/create',
    //   name: 'create',
    //   component: PostCreate
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: RegisterView
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: SignInView
    // }
  ]
})

export default router
