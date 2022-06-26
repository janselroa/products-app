<template>
    <div :style="`background-image:url(${data.img})`">
        <h2><a>{{data.title}}</a></h2>
    </div>
</template>
<script>
import {ref} from "vue";
export default {
    name:"Slider",
    setup(){
        let count=0
        const texts = [
            {
                title:"Los mejores productos tecnologicos",
                img:"header1"
            },
            {
                
                title:"Productos tecnlogicos de la mejor calidad",
                img:"header2"
            }
        ]

        const data = ref({
            title:texts[0].title,
            img:"/public/img/header1.jpg"
        }) 
        setInterval(()=>{
            count++
            if(count>=texts.length) count=0
            data.value={
                title:texts[count].title,
                img:`/public/img/${texts[count].img}.jpg`
            }
        },4000)
        return{data}
    }
}
</script>
<style scoped>
div{
    width:100%;
    height:450px;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background-blend-mode:multiply;
    background-color:#1113;
    transition:all 1s;
}
</style>
