<script>
export default {
  props: {
      listCount: Number
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
      changePage(pageNumber){
          this.currentPage = pageNumber
          this.$emit("changePage", this.currentPage)
      }
  }
};
</script>

<template>
  <div class="orderDropdown">
    <span
      v-if="listCount >= 5 && currentPage > 1"
      class="dropdownItem"
      @click="changePage(currentPage - 1)"
      >prev</span>
    <span
      class="dropdownItem"
      :class="currentPage == item ? 'dropdownActive' : ''"
      v-for="item in Math.ceil(listCount / 5)"
      :key="item"
      @click="changePage(item)"
      >{{ item }}</span>
      <span
      v-if="listCount >= 5 && currentPage < Math.ceil(listCount / 5)"
      class="dropdownItem"
      @click="changePage(currentPage + 1)"
      >next</span>
    
  </div>
</template>

<style scoped>
.orderDropdown {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.dropdownItem {
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  margin-right: 20px;
}
.dropdownActive {
  border: 1px solid #000;
  padding: 8px;
}
</style>