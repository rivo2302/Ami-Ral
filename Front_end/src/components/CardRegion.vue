<template>
    <div class="card" v-if="donnee != undefined ? true : false">

        <router-link  style="text-decoration:none;color:white"  class="card2" :to="{name:'DetailRegion',params:{id:donnee.id_region}}">
            <img :src="baseUrl + donnee.couverture.split('public')[1] " alt="" class="card-image">
            <div class="under-image"></div>
            <div class="detail" v-if="donnee.type_sol_fr == undefined || donnee.type_sol_fr=='null' ? false:true">
                <h4><router-link :to="{name:'DetailRegion',params:{id:donnee.id_region}}" style="text-decoration:none;color:white">{{donnee.nom}}</router-link></h4>
                <h6>{{donnee.type_sol_fr}}</h6>
            </div>
            <div class="detail" v-else>
                <h4><router-link :to="{name:'DetailRegion',params:{id:donnee.id_region}}" style="text-decoration:none;color:white">{{donnee.nom}}</router-link></h4>
                <h6>{{donnee.type_sol_mg}}</h6>
            </div>
        </router-link>
    </div>
</template>
<script>
import baseUrl from '../service/baseUrl.js'

export default {
    name:"CardRegion",
    props:{
        donnee:{
            type:Object,
            default:()=>{} 
        }
    },
    created(){
    },
     data:function() {
      return{
          baseUrl:baseUrl,
      }
    },
    methods:{
        parse(url){
            var newUrl;
            if(url){
                newUrl= parseInt(url);
            }
        return newUrl
        },
    }
}
</script>

<style>
.card{
    width: 100%;
    height: 100%;
    border: none;
    padding: 0px;
    transform: scale(1);
    transition: transform 0.3s
}
.card2{
    width: 100%;
    height: 100%;
}
.card-image{
    width: 100%;
    height: 250px;
    border: none;
}
.under-image{
    position:absolute;
    background-image: linear-gradient(to bottom, transparent, rgb(0,0,0,0.9));
    width: 100%;
    border: none;
    height: 100%;
    top:0;
    left: 0; 
}
.detail{
    position:absolute;
    padding: 10px;
    top:20vh;
    left: 3vh;
}
.card h4{
    font-size: 16px;
    font-weight: bold;
    margin: 0px;
}
.card h6{
    font-size: 13px;
    margin-left: 5px;
    margin-top: 5px;
    font-style: italic;
    color: rgb(165, 165, 165)
}
.card:hover{
    transform: scale(1.02);
    border: none;
    transition: transform 0.3s
}
@media only screen and (min-width: 1200px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:25vh;
        left: 3vh;
    }
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:10vh;
        left: 3vh;
    }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
 .detail{
        position:absolute;
        padding: 10px;
        top:25vh;
        left: 3vh;
    }
}
@media only screen and (max-width: 767px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:20vh;
        left: 3vh;
    }
}

@media only screen and (max-width: 479px) {
    .detail{
        position:absolute;
        padding: 10px;
        top:18vh;
        left: 3vh;
    }
}
</style>
