<script>
export default{
    methods: {
       goAddPage(){
           this.$router.push("/add");
       }
    },
}
</script>

<template>
  <div class="row submitCard" @click="goAddPage()">
    <div class="col-2 submitIcon">
      +
    </div>
    <div class="col-10">
      <h2 class="submitText">SUBMIT A LINK</h2>
    </div>
  </div>
</template>

<style scoped>

.submitCard{
  cursor: pointer;
  margin-bottom: 20px;
  background-color: #ecf0f1;
  height: 100px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
}

.submitIcon {
  background-color: #ecf0f1;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
}

.submitText{
  font-weight: 600;
  font-size: 35px;
  margin-left: 50px;
  top: 20%;
}

@media only screen and (max-width: 800px){
  .submitText {
   font-size: 20px;
  margin-left: 20px;
  top: 30%;
 }

 .submitIcon{
   font-size: 20px;
   padding-top: 20px;
 }
}


</style>