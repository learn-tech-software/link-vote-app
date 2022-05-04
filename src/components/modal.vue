<script>
import { useItemStore } from "../stores/item";

export default {
  props: {
    show: Boolean,
    title: String,
  },
  data(){
    return{
      store: useItemStore(),
    }
  },
  methods: {
    removeItem(){
      this.store.removeItem(this.title)
      this.showToastMessage('Removed succesfully item')
    },
    showToastMessage(message){
        this.$toast.success(`${message}`, {
          position: "top",
          duration: 2000,
          max: 1,
          useDefaultCss: true,
        });
    }
  }
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <h5>Do you want to remove?</h5>
            <b>{{ title }}</b>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-ok-button" @click="removeItem()">
                OK
              </button>
              <button class="modal-cancel-button" @click="$emit('close')">
                CANCEL
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    text-align: center;
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer{
  border: none;
  align-items: center;
  justify-content: center;
}

.modal-ok-button {
  width: 30%;
  margin-left: 20px;
  color: #fff;
  background: #000;
}

.modal-cancel-button {
  width: 30%;
  margin-left: 20px;
  color: #fff;
  background: #000;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>