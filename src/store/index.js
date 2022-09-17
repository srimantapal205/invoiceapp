import { createStore } from 'vuex'
import db from "@/firebase/firebaseInit.js";
import { collection, getDocs } from "firebase/firestore";
export default createStore({
  state: {
    invoiceData:[],
    invoiceModal:null,
    modalActive:null,
    invoicesLoaded :null,
  },
  getters: {
  },
  mutations: {
    Toggle_Invoice(state){
      state.invoiceModal = !state.invoiceModal
    },
    Toggle_Modal(state){
      state.modalActive = !state.modalActive
    },
    Set_Invoice_Data(state, payload){
      state.invoiceData.push(payload);
    },
    Invoices_Loaded(state){
      state.invoicesLoaded = true
    }
  },
  actions: {
   async  Get_Invoice({commit, state}){
      const getData = await getDocs(collection(db, "invoice"));
      getData.forEach(doc=> {
        // eslint-disable-next-line no-debugger
        debugger;
        if(!state.invoiceData.some(invoice => invoice.docId === doc.id)){
          const data ={
          invoiceId: doc.id,
          billerStreetAddress: doc.data().billerStreetAddress,
          billerCity: doc.data().billerCity,
          billerZipCode: doc.data().billerZipCode,
          billerCountry: doc.data().billerCountry,
          clientName: doc.data().clientName,
          clientEmail: doc.data().clientEmail,
          clientStreetAddress: doc.data().clientStreetAddress,
          clientCity: doc.data().clientCity,
          clientZipCode: doc.data().clientZipCode,
          clientCountry: doc.data().clientCountry,
          invoiceDateUnix: doc.data().invoiceDateUnix,
          invoiceDate: doc.data().invoiceDate,
          paymentTerms: doc.data().paymentTerms,
          paymentDueDateUnix: doc.data().paymentDueDateUnix,
          paymentDueDate: doc.data().paymentDueDate,
          productDescription: doc.data().productDescription,
          invoicePending: doc.data().invoicePending,
          invoiceDraft: doc.data().invoiceDraft,
          invoicePaid: doc.data().invoicePaid,
          invoiceItemList: doc.data().invoiceItemList,
          invoiceTotal: doc.data().invoiceTotal, 
          }

          commit('Set_Invoice_Data', data);
        } 
      })
      commit('Invoices_Loaded' )
    }
  },
  modules: {
  }
})
