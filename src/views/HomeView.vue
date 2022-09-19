<template>
  <div class="home container">
    <!-- Header  -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoice</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex">
          <span>Filter by Status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="">
          <ul v-show="filterMenu" class="filterMenu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>

        </div>
        <div @click="newInvoice" class="button flex">
          <div class="innerButton flex">
            <img src="@/assets/icon-plus.svg" alt="">            
          </div>
          <span>New Invoice</span>
        </div>
      </div>
    </div>
    <!-- Invoice List -->
    <div v-if="invoiceData.length>0">
      <Invoice v-for="(invoice, index) in invoiceData" :invoice="invoice" :key="index"/>
    </div>
    <div v-else class="empty flex flex-column">
      <img src="@/assets/illustration-empty.svg" alt="Ino Invoice">
      <h3>There is nothing here</h3>
      <p>Create a new invoice by clicking the New In voice button and get started</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapMutations, mapState} from "vuex"
import Invoice from "@/components/Invoice.vue" 
export default {
  name: 'HomeView',
  components: {
    Invoice
},
  data() {
    return {
      filterMenu:null
    }
  },
  methods: {
    ...mapMutations(['Toggle_Invoice']),
    newInvoice() {
      this.Toggle_Invoice()
    },
    toggleFilterMenu(){
      this.filterMenu = !this.filterMenu
    }

  },
  computed: {
    ...mapState(["invoiceData"])
  },
}
</script>
<style lang="scss">
  .home{
    color: #ffffff;
    .header{
      margin-bottom: 65px;
      .left,.right{
        flex: 1;
      }

      .right{
        justify-content: flex-end;
        align-items: center;
        .button, .filter{
          align-items: center;
          span{
            font-size: 12px;
          }
        }
        .filter{
          position: relative;
          margin-right: 40px;
          cursor: pointer;
          img{
            margin-left: 12px;
            width: 9px;
            height: 5px;

          }

          .filterMenu{
            width: 120px;
            position: absolute;
            top: 25px;
            list-style: none;
            background-color: #1e2139;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.6);
            li{
              cursor: pointer;
              font-size: 12px;
              padding: 10px 20px;
              &:hover{
                color: #1e2139;
                background-color: #ffffff;
              }
            }
          }

        }
        .button{
          padding: 8px 10px;
          background-color: #7c5dfa;
          border-radius: 40px;
          .innerButton{
            margin-right: 8px;
            border-radius: 50%;
            padding: 8px;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            img{
              width: 10px;
              height: 10px;
            }
          }
        }
      }
    }
  
  .empty {
    margin-top: 160px;
    align-items: center;
    img {
      width: 214px;
      height: 200px;
    }
    h3 {
      font-size: 20px;
      margin-top: 40px;
    }
    p {
      text-align: center;
      max-width: 224px;
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
    }
  }
}

</style>