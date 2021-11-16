import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Technique from '../views/Technique.vue'
import Carte from '../views/Carte.vue'
import Plantes from '../views/Plantes.vue'
import Climat from '../views/Climat.vue'
import DetailTechnique from '../views/DetailTechnique.vue'
import DetailPlante from '../views/DetailPlante.vue'
import DetailRegion from '../views/DetailRegion.vue'

import Admin from '../views/Admin.vue'
import AddClimat from '../views/AddClimat.vue'
import AddPlante from '../views/AddPlante.vue'
import AddTechnique from '../views/AddTechnique.vue'
import ResultatRecherche from '../views/ResultatRecherche.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Documentation from '../views/Documentation_v2.vue'
import NotFound from '../views/NotFound'

import ListeTechnique from '../views/ListeTechnique'
import ListePlante from '../views/ListePlante'
import ListeClimat from '../views/ListeClimat'

//import { store } from '../store';

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/region/:id',
        name: 'DetailRegion',
        props: true ,
        component: DetailRegion,
    },
    {
        path: '/techniques',
        name: 'Technique',
        component: Technique,
    },
    {
        path: '/carte',
        name: 'Carte',
        component: Carte,
    },
    {
        path: '/plantes',
        name: 'Plantes',
        component: Plantes,
    },
    {
        path: '/climat',
        name: 'Climat',
        component: Climat,
    },
    {
        path: '/technique/:id',
        name: 'DetailTechnique',
        props: true ,
        component: DetailTechnique,
    },
    {
        path: '/plantes/:id',
        name: 'DetailPlante',
        props: true ,
        component: DetailPlante,
    },
    {
        path: '/admin/technique/list',
        name: 'ListeTechnique',
        component: ListeTechnique,
    },
    {
        path: '/admin/plante/list',
        name: 'ListePlante',
        component: ListePlante,
    },
    {
        path: '/admin/climat/list',
        name: 'ListeClimat',
        component: ListeClimat,
    },
    {
        path: '/admin/home',
        name: 'Admin',
        props: true ,
        component: Admin,
    },
    {
        path: '/admin/climat/add',
        name: 'AddClimat',
        props: true ,
        component: AddClimat,
    },
    {
        path: '/admin/plante/add',
        name: 'AddPlante',
        props: true ,
        component: AddPlante,
    },
    {
        path: '/admin/technique/add',
        name: 'AddTechnique',
        props: true ,
        component: AddTechnique,
    },
    {
        path: '/recherche/:type/:value',
        name: 'ResultatRecherche',
        props: true ,
        component: ResultatRecherche,
    },
    {
        path: '/user/login',
        name: 'Login',
        props: true ,
        component: Login,
    },
    {
        path: '/user/signup',
        name: 'Signup',
        props: true ,
        component: Signup,
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: Documentation,
    },
    { path: '/404', name: 'NotFound',component: NotFound },  
    { path: '*', redirect: '/404' },  

]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
/**beforeEnter(to, from, next){ 
            if (store.getters["admins/statusConnexion"]) {
                next()
            } else {
                var adresseActuelle = window.location;
                if(adresseActuelle.pathname == "/user/login"){
                    return next()
                }else{
                    next({
                        name: "Admin" 
                    });
                }
                
            }
        } */