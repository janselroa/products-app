<template>
<nav>
  <h1>Products app</h1>
    <ul :class="{showMenu}">
        <p @click="showMenu=false" class="display">X</p>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Publicar</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Iniciar Sesion</a></li>
    </ul>
    <img class="display" @click="showMenu=!showMenu" src="/public/img/icon-menu.svg">
</nav>
</template>
<script>
import {ref} from "vue";
export default {
    name:"NavBar",
    setup(){
        const showMenu = ref(false)
        return{showMenu}
    }
}
</script>
<style scoped>
nav{
  position:sticky;
  top:0;
  background:#fff;
  display: flex;
  justify-content: space-around;
  box-shadow:0px 0px 40px rgba(17, 17, 17, 0.110);
}
h1{
    margin-top:15px
}
ul{
    list-style:none;
}
h1{
  margin: 10px;
}
li:hover{
    border-bottom:1px solid #000
}
li:last-child a {
    color:#fff;
}
li:hover:last-child a{
    color: #fff;
}

li:last-child:hover{
    background:#fff;
}
li:last-child:hover>a{
    color:#111;
}
.display{
    display:none;
    cursor:pointer;
}
li:last-child{
    background-color: #000;
    padding: 10px;
    margin-top: -5px;
    border:1px solid #000
}
/*mobile desing*/
@media screen and (max-width:700px){
    .display{
        display:block;
    }
    p.display{
        width:30px;
        margin-left:-20px;
    }
    ul{
        display:none;
    }
    .showMenu{
        display:block
    }
    ul{
        width:300px;
        position:absolute;
        right:0;
        padding-top:20px;
        top:-15px;
        height:100vh;
        background:#fff;
        box-shadow:0px 0px 40px 200px #111a;
    }
    li{
        width:200px;
    }
    li:last-child{
        margin-top:20px
    }
    li{
        padding:20px 0;
    }
    img{
        margin-top:10px;
        margin-right:-50px;
        width:35px;
        height:30px;
    }
}
@media screen and (min-width:700px){
    ul{
        display: flex;
    }
    li{
        margin-top: 5px;
        margin-left: 20px;
    }
}
</style>
