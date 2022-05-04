<script>
import submitCard from '../components/submitCard.vue'
import orderDropdown from '../components/orderDropdown.vue'
import list from '../components/list.vue'

export default{
  components:{
    submitCard,
    orderDropdown,
    list
  }
}

</script>

<template>
  <div class="main">
    <submitCard />
    <div class="hr"></div>
    <orderDropdown />
    <list />
  </div>
</template>

<style scoped>
 .main {
   margin: auto;
    width: 40%;
 }

  .hr{
    background-color: #ecf0f1;
    height: 3px;
    margin-bottom: 10px;
  }


@media only screen and (max-width: 1100px){
  .main {
   margin: auto;
    width: 80%;
 }
}

@media only screen and (max-width: 700px){
  .main {
   margin: auto;
    width: 95%;
 }
}

</style>
