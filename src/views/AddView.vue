<script>
import { useItemStore } from "../stores/item";

export default {
  data() {
    return {
      title: "",
      url: "",
      store: useItemStore(),
    };
  },
  methods: {
    addNewItem() {
      if (this.title.length > 1 && this.url.length > 1) {
        this.store.addItem(this.title, this.url);
        this.$toast.success(`${this.title} added`, {
          position: "top",
          duration: 2000,
          max: 1,
          useDefaultCss: true,
        });
        this.title = "";
        this.url = "";
      } else {
        this.$toast.warning(`Please, write something`, {
          position: "top",
          duration: 2000,
          max: 1,
          useDefaultCss: true,
        });
      }
    },
  },
};
</script>

<template>
  <div class="AddView">
    <router-link class="link" to="/"
      ><img src="@/assets/arrow_back.svg" /> Return to List</router-link
    >
    <br /><br />
    <h1 class="headerText">Add New Link</h1>
    <br />
    <p class="inputHeaderText">Link Name:</p>
    <input
      v-model="title"
      type="text"
      class="form-control"
      placeholder="e.g. Alphabet"
    />
    <br />
    <p class="inputHeaderText">Link URL:</p>
    <input
      v-model="url"
      type="text"
      class="form-control"
      placeholder="e.g. http://abc.xyz"
    />
    <br />
    <button @click="addNewItem()">ADD</button>
  </div>
</template>

<style scoped>
.AddView {
  margin: auto;
  width: 40%;
}
img {
  width: 15px;
  margin-bottom: 2px;
}
.link {
  text-decoration: none;
  color: #000;
  font-weight: 700;
}
h1 {
  font-weight: 800;
  font-size: 35px;
}
p {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 600;
}
input {
  margin-top: 0;
}
button {
  float: right;
  background: black;
  color: #fff;
  border-radius: 20px;
  padding: 20px 50px;
  border: none;
}

@media only screen and (max-width: 900px){
  .AddView {
   margin: auto;
    width: 95%;
 }
}
</style>
