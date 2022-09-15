<template>
  <div @click="CheckClick" ref="invoiceWrap" class="invoiceWrap flex flex-column">
    <form @submit.prevent="submitForm" class="invoiceContent">
      <h1>New Invoice</h1>
      <!-- Bill From -->
      <div class="billFrom flex flex-column">
        <h4>Bill From</h4>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Street Address</label>
          <input
            required
            type="text"
            name="treetAddress"
            id="billerStreetAddress"
            v-model="billerStreetAddress"
          />
        </div>

        <div class="location flex">
          <div class="input flex flex-column">
            <label for="billerCity">City</label>
            <input
              required
              type="text"
              name="billerCity"
              id="billerCity"
              v-model="billerCity"
            />
          </div>

          <div class="input flex flex-column">
            <label for="billerZipCode">Zip Code</label>
            <input
              required
              type="text"
              name="billerZipCode"
              id="billerZipCode"
              v-model="billerZipCode"
            />
          </div>

          <div class="input flex flex-column">
            <label for="billerCountry">Country</label>
            <input
              required
              type="text"
              name="billerCountry"
              id="billerCountry"
              v-model="billerCountry"
            />
          </div>
        </div>
      </div>
      <!-- Bill To -->
      <div class="billTo flex flex-column">
        <h4>Bill To</h4>
        <div class="input flex flex-column">
          <label for="clientName">Client's Name</label>
          <input
            required
            type="text"
            name="clientName"
            id="clientName"
            v-model="clientName"
          />
        </div>

        <div class="input flex flex-column">
          <label for="clientEmail">Client's Email</label>
          <input
            required
            type="text"
            name="clientEmail"
            id="clientEmail"
            v-model="clientEmail"
          />
        </div>

        <div class="input flex flex-column">
          <label for="clientStreetAddress">Street Address</label>
          <input
            required
            type="text"
            name="clientStreetAddress"
            id="clientStreetAddress"
            v-model="clientStreetAddress"
          />
        </div>

        <div class="location flex">
          <div class="input flex flex-column">
            <label for="clientCity">City</label>
            <input
              required
              type="text"
              name="clientCity"
              id="clientCity"
              v-model="clientCity"
            />
          </div>

          <div class="input flex flex-column">
            <label for="clientZipCode">Zip Code</label>
            <input
              required
              type="text"
              name="clientZipCode"
              id="clientZipCode"
              v-model="clientZipCode"
            />
          </div>

          <div class="input flex flex-column">
            <label for="clientCountry">Country</label>
            <input
              required
              type="text"
              name="clientCountry"
              id="clientCountry"
              v-model="clientCountry"
            />
          </div>
        </div>
      </div>
      <!-- Invoice Work Details -->
      <div class="invoiceWork flex flex-column">
        <div class="payment flex">
          <div class="input flex flex-column">
            <label for="invoiceDate">Invoice Date</label>
            <input
              disabled
              type="text"
              name="invoiceDate"
              id="invoiceDate"
              v-model="invoiceDate"
            />
          </div>
          <div class="input flex flex-column">
            <label for="paymentDueDate">Payment Due Date</label>
            <input
              disabled
              type="text"
              name="paymentDueDate"
              id="paymentDueDate"
              v-model="paymentDueDate"
            />
          </div>
        </div>
        <div class="input flex flex-column">
          <label for="paymentTerms">Payment Terms</label>
          <select required name="paymentTerms" id="paymentTerms" v-model="paymentTerms">
            <option value="30">Net 30 Daye's</option>
            <option value="60">Net 60 Daye's</option>
          </select>
        </div>
        <div class="input flex flex-column">
          <label for="billerStreetAddress">Product Description</label>
          <input
            required
            type="text"
            name="productDescription"
            id="productDescription"
            v-model="productDescription"
          />
        </div>
        <div class="workItem">
          <h3>Item List</h3>
          <table class="itemList">
            <tr class="tableHeading flex">
              <th class="itemName">Item Name</th>
              <th class="qty">Qty</th>
              <th class="price">Price</th>
              <th class="total">Total</th>
            </tr>
            <tr
              class="tableItem flex"
              v-for="(item, index) in invoiceItemList"
              :key="index"
            >
              <td class="itemName"><input v-model="item.itemName" type="text" /></td>
              <td class="qty"><input v-model="item.qty" type="text" /></td>
              <td class="price"><input v-model="item.price" type="text" /></td>
              <td class="total flex">{{ (item.total = item.qty * item.price) }}</td>
              <img
                @click="deleteInvoiceItem(item.id)"
                src="@/assets/icon-delete.svg"
                alt="removeItem"
              />
            </tr>
          </table>
          <div @click="addNewInvoiceItem" class="flex button">
            <img src="@/assets/icon-plus.svg" alt="" srcset="" />Add New Item
          </div>
        </div>
      </div>

      <!-- Save/Exit -->
      <div class="save flex">
        <div class="left">
          <button @click="closeInvoice" class="red">Cancel</button>
        </div>
        <div class="right flex">
          <button @click="saveDraft" class="dark-purple">Save Draft</button>
          <button @click="publishInvoice" class="purple">Create Invoice</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "InvoiceModel",
  data() {
    return {
      billerStreetAddress: null,
      billerCity: null,
      billerZipCode: null,
      billerCountry: null,
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: null,
      invoiceDateUnix: null,
      invoiceDate: null,
      paymentTerms: null,
      paymentDueDateUnix: null,
      paymentDueDate: null,
      productDescription: null,
      invoicePending: null,
      invoiceDraft: null,
      invoiceItemList: [],
      invoiceTotal: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.invoiceWrap {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  @media (min-width: 900px) {
    left: 90px;
  }
  .invoiceContent {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #141625;
    color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }
    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }
    h4 {
      color: #7c5dfa;
      font-size: 12px;
      margin-bottom: 24px;
    }
    // Bill to /Bil from
    .billFrom,
    .billTo {
      margin-bottom: 48px;
      .location {
        gap: 16px;
        div {
          flex: 1;
        }
      }
    }

    //Invoice Work
    .invoiceWork {
      .payment {
        gap: 24px;
        div {
          flex: 1;
        }
      }
      .workItem {
        .itemList {
          width: 100%;

          //Item Table Style
          .tableHeading,
          .tableItem {
            gap: 16px;
            font-size: 12px;
            .itemName {
              flex-basis: 50%;
            }
            .qty {
              flex-basis: 10%;
            }
            .price {
              flex-basis: 20%;
            }
            .total {
              flex-basis: 20%;
              align-self: center;
            }
          }
          .tableHeading{
            margin-bottom: 16px;
            th{
                text-align: left;
            }
          }
          .tableItem{
            position: relative;
            margin-bottom: 24px;
            img{
                position: absolute;
                top: 15px;
                right: 0;
                width: 12px;
                height: 16px;
            }
          }
        }
        .button{
            
        }
      }
    }
  }
  .input {
    margin-bottom: 24px;
  }
  label {
    font-size: 12px;
    margin-bottom: 6px;
  }
  input,
  select {
    width: 100%;
    color: #fff;
    background-color: #1e2139;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
</style>
