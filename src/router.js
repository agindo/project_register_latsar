import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            // name: 'home',
            component: () => import('./views/Home.vue'),
            children: [
                {
                    path: '/',
                    name: 'info',
                    component: () => import('./views/Info.vue')
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('./views/Register.vue')
                }
            ]
        },
        {
            path: '/dashboard',
            // name: 'dashboard',
            component: () => import('./views/Dashboard.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('./views/Dashboard_too.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/dashboard/penyelenggaraan',
                    name: 'penyelenggaraan',
                    component: () => import('./views/Penyelenggaraan.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/dashboard/kelas',
                    name: 'kelas',
                    component: () => import('./views/Kelas.vue'),
                    meta: { 
                        requiresAuth: true,
                        role: 'Admin'
                    }
                },
                {
                    path: '/dashboard/peserta_latsar',
                    name: 'peserta_latsar',
                    component: () => import('./views/Peserta_latsar.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/dashboard/daftar_hadir',
                    name: 'daftar_hadir',
                    component: () => import('./views/Daftar_hadir.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/dashboard/nametag',
                    name: 'nametag_peserta',
                    component: () => import('./views/Nametag_too.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/peserta',
            // name: 'peserta',
            component: () => import('./views/Peserta.vue'),
            children: [
                {
                    path: '/',
                    name: 'profile',
                    component: () => import('./views/Profile.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/peserta/biodata',
                    name: 'biodata',
                    component: () => import('./views/Biodata.vue'),
                    meta: { 
                        requiresAuth: true,
                        role: 'Peserta'
                    }
                },
                {
                    path: '/peserta/dokumen',
                    name: 'dokumen',
                    component: () => import('./views/Dokumen.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                },
                {
                    path: '/peserta/nametag',
                    name: 'nametag',
                    component: () => import('./views/Nametag.vue'),
                    meta: { 
                        requiresAuth: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
            meta: {
                requiresVisitor: true
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) { 
        if(!store.getters.isLoggedIn) {
            next('/login')
        }
        next()
    }else if(to.matched.some(record => record.meta.requiresVisitor)){
        if(store.getters.isLoggedIn){
            next('/dashboard')
        }else{
          next()
        }
    }else{
        next() 
    }
  })

export default router