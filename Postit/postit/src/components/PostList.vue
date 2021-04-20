<template>
<h3>Toutes les notes</h3>
  {{notes.length}} note{{notes.length > 1 ? 's' : ''}}
  <ul>
    <div class="content">
    <li v-for="not in notes" :key="not.id">
        <button id="button1" @click="editNote(not)"><i class="bi bi-pencil"></i></button>
        <button id="button2" @click="deleteNote(not)"><i class="bi bi-trash"></i></button>
        <router-link id="header-link" v-bind:to="{ name: 'PostitFull', params: { id: not.id, note: not.note }}"><i class="bi bi-eye"></i></router-link>
        <br><br>
        <div class="postit">
          <!--<span class="ecrit">{{not.note}}</span>-->
          <span v-if="noteToEdit !== null && noteToEdit.id === not.id">
          <textarea class="textarea" type="text" v-model="noteToEdit.note" @keypress.enter="save" ></textarea>
          <button id="button4" @click="save"><i class="bi bi-check-circle"></i> Enregistrer</button>
          </span>
          <span class="ecrit" v-else>{{not.note}}</span>
        </div>
    </li>
    </div>
  </ul>



<div>
  <div class="getPosts">
    <button @click="getPosts">Get Posts</button>
  </div>

  <div  v-for="(post, index) in posts" :key="index">
    <h1>---- {{ post.title }} ----</h1>
    <!--<ul>
      <li v-for="(post, index) in posts" :key="index">
        {{post.title}} - {{post.content}}
      </li>
    </ul>-->
  </div>
</div>
</template>

<script>
import { ref } from 'vue';
import Axios from 'axios'

export default {
  name: 'Postlist',
    emits: ["delete-note", "edit-note"],
    props: {
        notes: {
            type: Array,
            required: true
        }

    },

      data() {
        return {
          posts:'',
          pays:null,
          title:null,
    }
  },
        /*mounted() {
      Axios
      .get('http://5.135.119.239:3090/notes')
      .then((reponse) =>{
          this.pays = reponse.data;
          console.log(this.pays)
      });      
  },*/

  methods: {
    getPosts() {
      Axios.get('http://5.135.119.239:3090/notes')
            .then((reponse) =>{
              const data = reponse.data;
              this.posts = data;
          console.log(reponse);
      });
    }
  },

    setup(props, {emit}) {
        let noteToEdit = ref(null);
        let deleteNote = function(not) {
            emit('delete-note', not);
        };

        let editNote = function(not) {
            noteToEdit.value = not;
        };

        let save = function () {
            emit('edit-note', noteToEdit.value);
            noteToEdit.value = null;
        };
        return {
            deleteNote,
            editNote,
            save,
            noteToEdit
        };
    },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Gloria+Hallelujah);

ul {
  list-style: none;
}

li {
  width: 200px;
}

.content {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

#button1, #button2, #button3, #header-link  {
  border: none;
  color: rgb(0, 0, 0);
  padding: 1px 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 5px 15px 10px;
  cursor: pointer;
  background-color: transparent;
}

#button4 {
  border: none;
  color: rgb(0, 0, 0);
  padding: 1px 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 5px 15px 10px;
  cursor: pointer;
  background-color: transparent;
}

.postit, #button1, #button2, #button3, #button4, #header-link   { 
  float:left;
}

.postit {
  padding:25px 25px 40px;
  margin:-10px 20px 100px 0;
  width:250px;
  height:250px; 
  font:20px 'Gloria Hallelujah', cursive; 
  line-height:1.5;
  border:0;
  border-radius:3px;
  background: linear-gradient(#F9EFAF, #F7E98D);
  box-shadow:0 8px 12px rgba(0,0,0,0.1);
  overflow:auto;
  transition:box-shadow 0.5s ease;
  resize: none;
}
.postit:hover { box-shadow:0 10px 16px rgba(0,0,0,0.15); }
.postit:focus { box-shadow:0 5px 12px rgba(0,0,0,0.2); outline:none; }

.textarea {
  padding:25px 25px 40px;
  margin: -25px;
  width:250px;
  height:220px;
  max-height: 220px;
  font:20px 'Gloria Hallelujah', cursive; 
  line-height:1.5;
  border:0;
  border-radius:3px;
  background: transparent;
  resize: none;
}

.ecrit {
  display: block;
  width: 200px;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
}

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
</style>