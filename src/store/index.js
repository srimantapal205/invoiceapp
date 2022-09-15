import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal:null
  },
  getters: {
  },
  mutations: {
    Toggle_Invoice(state){
      state.invoiceModal = !state.invoiceModal
    }
  },
  actions: {
  },
  modules: {
  }
})
