import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
axios.defaults.baseURL = 'https://cryptoudiscordbot.herokuapp.com'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
  },
  getters: {
    loggedIn(state){
        return state.token != null
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    registerUser(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  actions: {
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8081/#/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/api/auth/signin', {
          username: credentials.username,
            password: credentials.password,
        })
          .then(response => {
            const token = response.data.accessToken
            localStorage.setItem("access_token", response.data.accessToken);
            context.commit('retrieveToken', token)
            resolve(response)
          
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
        },

        

        registerUser(context, credentials) {
          return new Promise((resolve, reject) => {
            axios.post('/api/auth/signup', {
                username: credentials.username,
                email: credentials.email,
                password: credentials.password,
                roles: credentials.roles
            })
              .then(response => {
                // const token = response.data.token
                // localStorage.setItem("access_token", response.data.token);
                // context.commit('registerUser', token)
                resolve(response)
              
              })
              .catch(error => {
                console.log(error)
                reject(error)
              })
            })
            },

  },
  modules: {
  }
})
