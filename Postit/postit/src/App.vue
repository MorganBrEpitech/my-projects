<template>
  <h1>Post-it</h1>
  <Postit @add="savePostit" />
  <br>
  <PostList :notes="notes" @delete-note="deleteNote" @edit-note="editNote" />
  <router-view/>
</template>

<script>
import Postit from "./components/Postit";
import PostList from "./components/PostList";
import { ref } from 'vue';

export default {
  name:"App",
  components: {
    Postit,
    PostList,
  },
  /*mounted() {
            axios.post('http://5.135.119.239:3090/notes', {
            title: this.title,
            content: this.content,
          }).then(response => {
            console.log(response);
          });
  },*/

  setup() {
    let notes = ref([]);

    const savePostit = function(data) {
      console.log("App | savePostit() | data", data);
      notes.value = [...notes.value, { note: data, id: Date.now() }];
      console.log("App | savePostit() | notes.value", notes.value);
    };

    const editNote = function(not) {
      notes.value = notes.value.map(n => n.id !== not.id ? n : not);
    }

    const deleteNote = function (not) {
      console.log("App | deleteNote() | not", not);
      notes.value = notes.value.filter(n => n.id !== not.id);
    };

    return {
      savePostit,
      deleteNote,
      notes,
      editNote
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
