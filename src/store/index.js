import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
axios.defaults.baseURL = 'https://khodo-prod.herokuapp.com'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    buyDetails: [],
    saleDetails: null,
    cryptoValue: null,
    mwkAmount: null,
    signUpData: null
  },
  getters: {
    loggedIn(state){
        return state.token != null
    },
    getsignUpDetails(state){
      return state.signUpData
  },
    getbuyDetails(state){
        return state.buyDetails
    },
    getsaleDetails(state){
        return state.saleDetails
    },
    getcrypto(state){
        return state.cryptoValue
    },
    getmwkamount(state){
        return state.mwkAmount
    },
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
    },

    buyCrypto(state, buyDetails){
      state.buyDetails = buyDetails
    },
    saleCrypto(state, saleDetails){
      state.saleDetails = saleDetails
    },
    setCrypto(state, cryptoValue){
      state.cryptoValue = cryptoValue
    },
    setMWKAmount(state, mwkAmount){
      state.mwkAmount = mwkAmount
    },

    setSignUp(state, signUpData){
      state.signUpData = signUpData
    },
  },
  actions: {

    buyCrypto(context, event){
      const buyDetails = event
      context.commit('buyCrypto', buyDetails)
    },
    saleCrypto(context, event){
      const saleDetails = event
      context.commit('saleCrypto', saleDetails)
    },
    setCrypto(context, event){
      const cryptoValue = event
      context.commit('setCrypto', cryptoValue)
    },

    setSignUp(context, event){
      const signUpData = event
      context.commit('setSignUp', signUpData)
    },
    setMWKAmount(context, event){
      const mwkAmount = event
      context.commit('setMWKAmount', mwkAmount)
    },

    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('http://localhost:8080/#/logout')
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
        axios.post('/auth/user/login', {
            mobileOrEmail: credentials.mobileOrEmail,
            password: credentials.password,
            pin: credentials.pin
        })
          .then(response => {
            const token = response.data.token
            localStorage.setItem("access_token", response.data.token);
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
            axios.post('/auth/user/register', {
                fullName: credentials.fullName,
                email: credentials.email,
                mobile: credentials.mobile,
                country: credentials.country,
                city: credentials.city,
                password: credentials.password,
                pin: credentials.pin,
                otp: credentials.otp,
            })
              .then(response => {
                const token = response.data.token
                localStorage.setItem("access_token", response.data.token);
                context.commit('registerUser', token)
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
