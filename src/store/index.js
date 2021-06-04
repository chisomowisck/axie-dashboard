import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
axios.defaults.baseURL = 'https://khodo-prod.herokuapp.com'

export default new Vuex.Store({
  state: {
    //token: JSON.parse(localStorage.getItem("access_token")) || null

    token: localStorage.getItem("access_token") || null
  },
  getters: {
loggedIn(state){
return state.token != null
},
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
  },
  actions: {

    destroyToken(context) {
      //axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8080/#/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
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
    //   const formData = new FormData();
    //   formData.append("username", credentials.username);
    //   formData.append("password", credentials.password);

        axios.post('/auth/user/login', {
            mobileOrEmail: credentials.mobileOrEmail,
            password: credentials.password,
            pin: credentials.pin
        })
          .then(response => {
            const token = response.token
            localStorage.setItem("access_token", response.data.token);
            context.commit('retrieveToken', token)
            resolve(response)
          
          })
          .catch(error => {
            console.log(error)
            reject(error)
            //reject(error)
          })
        })
        },

  },
  modules: {
  }
})
