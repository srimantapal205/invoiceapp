<template>
  <div class="modal flex">
    <div class="modalContent">
      <p>Are you sure want to exit ? Your changes will not be seved?</p>
      <div class="action flex">
        <button type="button" @click="CloseModal" class="purple">Return</button>
        <button type="button" @click="CloseInvoice" class="red">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";    
export default {
  name: "ModalComponent",
  methods: {
    ...mapMutations(["Toggle_Invoice","Toggle_Modal"]),
    CloseModal() {
        this.Toggle_Modal()
    },
    CloseInvoice() {
        this.Toggle_Invoice()
        this.Toggle_Modal()
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 100;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .modalContent {
    border-radius: 20px;
    padding: 48px 32px;
    max-width: 450px;
    background-color: #252945;
    color: #fff;
    p {
      text-align: center;
    }
    .action {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
  }
}
</style>
