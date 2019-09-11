import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import log from './account'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        account: log,
        role: localStorage.getItem('role') || ''
    },
    mutations: {
        set_role(state, role){
            state.role = role
        },
        logout(state){
	    	// state.status = ''
	    	state.role = ''
	  	}
    },
    actions: {
        // signin({commit, state}, user){
        //     return new Promise((resolve, reject) => {

        //     })
        // }
        actionrole({commit}, role){
            commit('set_role', role)
        },
        logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	localStorage.removeItem('role')
		      	delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	}
    },
    getters: {
        isLoggedIn: state => !!state.role,
        log: state => state.account,
        role: state => state.role
    }
})