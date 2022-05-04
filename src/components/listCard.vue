<script>

import { useItemStore } from "../stores/item";

export default{
  props: ["item"],
  data(){
    return{
      showModal: false,
      store: useItemStore(),
    }
  },
  methods: {
    openModal(){
      this.showModal = !this.showModal
    },
    incrementVoteCount(){
      this.store.voteCountIncrement(this.item.title)
      this.showToastMessage(`Increment for <b>${this.item.title}</b>`)
    },
    decrementVoteCount(){
      this.store.voteCountDecrement(this.item.title)
      this.showToastMessage(`Decrement for <b>${this.item.title}</b>`)
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
}
</script>

<template>
  <div class="row listCard">
    <div class="col-2 listCount">
      <p class="listCountBold">{{ this.item.voteCount }}</p>
      <p class="listCountThin">POINTS</p>
    </div>
    <div class="col-10">
      <div class="listDetails">
      <h2 class="listTitle">{{ this.item.title }}</h2>
      <p class="listLink">{{ this.item.link }}</p>
      <div class="listOperations">
        <div @click="incrementVoteCount()" class="incrementVoteCount">
          <img src="@/assets/vote_up.svg" class="voteIcon">
          <span class="voteText">Up Vote</span>
        </div>
        <div @click="decrementVoteCount()" class="decrementVoteCount">
          <img src="@/assets/vote_down.svg" class="voteIcon">
          <span class="voteText">Down Vote</span>
        </div>
      </div>
      
    </div>
    </div>
      <img @click="openModal()" class="removeListCard" src="@/assets/remove_icon.svg">
      <modal :show="showModal" :title="item.title" @close="showModal = false" />
  </div>
</template>

<style scoped>

.listCard{
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.2s;
}

.listCard .col-10:hover + .removeListCard{
  display: block;
}

.listCount {
  background-color: #ecf0f1;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
}

.listCountBold{
  font-weight: 800;
  font-size: 40px;
  margin-top: 5px;
  margin-bottom: -10px;
}

.listCountThin{
  font-size: 20px;
}

.listDetails {
  display: inline-block;
}

.listTitle {
  font-weight: 700;
  padding-bottom: 0;
}

.listLink {
  margin-top: 0;
  padding-top: 0;
}

.removeListCard{
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  display: none;
}

.removeListCard:hover{
  display: block;
}

.listOperations div{
  display: inline-block;
  margin-right: 50px;
}

.voteIcon{
  width: 20px;
}

.voteText{
  font-weight: 700;
  color: grey;
}

@media only screen and (max-width: 1100px){
  .listCountBold{
  font-size: 20px;
  margin-top: 25px;
}
.listCountThin{
  font-size: 12px;
}
}

</style>