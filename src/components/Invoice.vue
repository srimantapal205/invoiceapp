<template>
        <router-link class="invoice flex" :to="{name:'Invoice', params:{invoiceId:invoice.invoiceId}}">

            <div class="left flex">
                <span class="trackingNumber">#{{invoice.invoiceId}}</span>
                <span class="dueDate">{{invoice.paymentDueDate}}</span>
                <span class="person">{{invoice.class}}</span>
            </div>
            <div class="right flex">
                <span class="price">${{invoice.invoiceTotal}}</span>
                <div class="status-button flex" :class="{paid: invoice.invoicePaid, draft: invoice.invoiceDraft, pending: invoice.invoicePending}">
                
                </div>
            </div>
        </router-link>
</template>

<script>
    export default {
        name:"InvoiceComponent",
        props: ["invoice"],
    }
</script>

<style lang="scss" scoped>

</style>