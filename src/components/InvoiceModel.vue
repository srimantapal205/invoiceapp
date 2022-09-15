<template>
  <div @click="CheckClick" ref="invoiceWrap" class="invoiceWrape flex flex-column">
    <form @submit.prevent="submitForm" class="invoiceContent">
      <h1>New Voice</h1>
      <!-- Bill From -->
      <div class="billFrom flex flex-Column">
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

        <!-- Bill To -->
        <div class="billTo flex flex-column">
        
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

<style lang="scss" scoped></style>
