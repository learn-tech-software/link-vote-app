<script>
import { useItemStore } from "../stores/item";
import listCard from "./listCard.vue";
import pagination from "./pagination.vue";

export default {
  data() {
    return {
      store: useItemStore(),
      page: 1,
    };
  },
  components: {
    listCard,
    pagination
  },
  computed:{
    paginatedData() {
      return this.store.orderItems ? this.store.orderItems.slice((this.page - 1) * 5, this.page * 5) : null
    }
  },
  methods: {
    getDataFromPagination(pageNumber){
      this.page = pageNumber
    }
  }
};
</script>

<template>
  <div class="list">
    <listCard v-for="item in paginatedData" :key="item.title" :item="item" />

    <pagination
      v-if="store.items && store.items.length >= 5"
      :listCount="store.items.length"
      @changePage="getDataFromPagination($event)"
    />
  </div>
</template>

<style scoped>
</style>