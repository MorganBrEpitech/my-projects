<template>
<div>
    <h3>PostitFull</h3>
        <router-link id="back" to="/PostList"><i class="bi bi-arrow-left-square"></i> Retour à la liste des Postit</router-link>
    <span id="areatext">{{ note }}</span>
        {{ id }}
</div>
</template>

<script>
export default {
    props: [
        'id',
        'note'
    ]
    }


</script>

<style>
  body { background:url(https://img.freepik.com/free-vector/graph-paper_127747-40.jpg?size=626&ext=jpg) #cacaca; margin:30px; }

  @import url(https://fonts.googleapis.com/css?family=Gloria+Hallelujah);

* { box-sizing:border-box; }

#back {
  border: none;
  color: rgb(0, 0, 0);
  padding: 1px 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 70px 0px 5px 340px;
  cursor: pointer;
  background-color: transparent;
}

#back:hover {
    color:red;
}

#areatext {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding:25px 25px 40px;
  width:700px;
  height:400px; 
  font:20px 'Gloria Hallelujah', cursive; 
  line-height:1.5;
  border:0;
  border-radius:3px;
  background: linear-gradient(#F9EFAF, #F7E98D);
  box-shadow:0 4px 6px rgba(0,0,0,0.1);
  overflow:hidden;
  transition:box-shadow 0.5s ease;
  max-width: 700px;
  max-height: 400px;
  min-height: 400px;
}
#areatext:hover { box-shadow:0 5px 8px rgba(0,0,0,0.15); }
#areatext:focus { box-shadow:0 5px 12px rgba(0,0,0,0.2); outline:none; }

</style>
