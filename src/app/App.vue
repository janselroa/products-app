<template>
    <header>
        <navBar/>
        <slider/>
   </header>
</template>
<script>
import navBar from "./navBar.vue";
import slider from "./slider.vue";
export default{
    name:"App",
    components:{navBar,slider}
}
</script>
<style>
body{
    margin:0;
    font-family:arial;
    overflow-x:hidden;
    --h1-size:3rem;
}
.container{
    width:600px;
    margin:auto
}
h2{
    margin-left:30px;
    font-size:var(--h1-size);
}
a{
    text-decoration:none;
    color:#111;
}
img{
    width:100%;
    object-fit:cover;
}
@media screen and (max-width:700px){
    body{
        --h1-size:2rem
    }
}
.btn{
    font-size:1rem;
    padding:10px;
    border:none;
    background:#000;
    color:#fff;
    cursor:pointer;
    display:block;
    margin:20px auto;
}
</style>
