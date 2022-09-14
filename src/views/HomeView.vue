<template>
  <div class="home container">
    <!-- Header  -->
    <div class="header flex">
      <div class="left flex flex-column">
        <h1>Invoice</h1>
        <span>There are 4 total invoices</span>
      </div>
      <div class="right flex">
        <div @click="toggleFilterMenu" class="filter flex" ref="filter">
          <span>Filter by Status</span>
          <img src="@/assets/icon-arrow-down.svg" alt="">
          <ul v-show="filterMenu" class="filterMenu">
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
            <li>Clear Filter</li>
          </ul>

        </div>
        <div @click="newInvoice" class="button flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
