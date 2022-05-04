<script>
import { useItemStore } from "../stores/item";

export default{
  data(){
    return{
      isOpen: false,
      store: useItemStore(),
    }
  },
  methods: {
    changeOrderType(orderType){
      this.store.setOrderType(orderType)
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
  <div class="orderDropdown">
    <div class="header" @click="isOpen = !isOpen">
      <span>Order By</span>
      <img src="@/assets/arrow_dropdown.svg" alt="" />
    </div>

    <ul class="content" v-if="isOpen">
      <li @click="changeOrderType('mostvoted')">Most Voted (Z - A)</li>
      <li @click="changeOrderType('lessvoted')">Less Voted (A - Z)</li>
    </ul>
  </div>
</template>

<style scoped>
.orderDropdown{
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
}
.header {
  background-color: #ecf0f1;
  width: 150px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  cursor: pointer;
}
img {
  width: 30px;
  vertical-align: middle;
  margin-top: -2px;
  float: right;
}

ul {
  background-color: #ecf0f1;
  list-style-type: none;
  width: 150px;
  padding: 0;
  border: 1px solid #000;
  position: absolute;
}
li {
  border-top: 1px solid #000;
  padding-left: 10px;
  cursor: pointer;
}
</style>