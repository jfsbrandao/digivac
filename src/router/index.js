import Vue from 'vue'
import VueRouter from 'vue-router'
import Cadastro from '../views/Cadastro'
import Login from '../views/Login'
import EVac from '../views/EVac'
import Home from '../views/Home'
import NewVax from '../views/NewVax'
import QrCode from '../views/QrCode'
import Card from '../views/Card'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: Cadastro
  },
  {
    path: '/EVac',
    name: 'EVac',
    component: EVac
  },
  {
    path: '/Main',
    name: 'Main',
    component: Home
  },
  {
    path: '/NewVax',
    name: 'NewVax',
    component: NewVax
  },
  {
    path: '/QrCode',
    name: 'QrCode',
    component: QrCode
  },
  {
    path: '/:id',
    name: 'Card',
    component: Card
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
