<template>
  <form @submit.prevent="addPostit" @keyup.enter="addUser">
    <label for="note">Ajouter une note :</label>
    <br><br>
    <input type="text" class="title" name="title" v-model="title" placeholder="Title"/>
    <br><br>
    <textarea type="text" name="content" v-model="content" placeholder="Content"></textarea>
    <br>
    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import Axios from 'axios'

export default {
  data() {
    return {
      content:'',
      title:'',
      name:null,
    }
  },
      mounted() {
      Axios
      .get('http://5.135.119.239:3090/notes')
      .then((reponse) =>{
          this.name = reponse.data;
          console.log(this.name)
      });      
  },
  
  methods: {
    addUser() {
      axios.post(`http://5.135.119.239:3090/notes`, {
            title: this.title,
            content: this.content,
          },)
          .then((reponse)=>{
            console.log(reponse);
          });
      },
  },

    setup(props, ctx) {
      let content = ref("");

      const addPostit = function() {
        console.log("Postit | addPostit() | content.value", content.value);
        ctx.emit("add", content.value);
        content.value="";
      };

      return {
        content: content,
        addPostit,
      };
    },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Gloria+Hallelujah);

button {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 5px 0px 0px 390px;
  cursor: pointer;
  border-radius: 15px;
  transition-duration: 0.4s;
}

button:hover {
  background-color: #04759b;
}

label {
  margin: 20px 360px 0px 0px;
}

textarea {
  width: 500px;
  height: 250px;
  max-width: 500px;
  max-height: 250px;
  min-height: 250px;
}

.title {
  width: 500px;
}
</style>
