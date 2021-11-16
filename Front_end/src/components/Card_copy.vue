<template>
<div class="card" v-if="donnee != undefined ? true : false">

    <router-link  style="text-decoration:none;color:white" v-if="NameRoute == 1 ? true:false" class="card2" :to="{name:'DetailTechnique',params:{id:parse(donnee.id_technique)}}">
        <img :src="donnee.couverture" alt="" class="card-image">
        <div class="under-image"></div>
        <div class="detail" v-if="donnee.nom_fr == undefined || donnee.nom_fr=='null' ? false:true">
            <h4><router-link :to="{name:'DetailTechnique',params:{id:parse(donnee.id_technique)}}" style="text-decoration:none;color:white">{{donnee.nom_fr}}</router-link></h4>
            <h6>{{donnee.info_fr}}</h6>
        </div>
        <div class="detail" v-else>
            <h4><router-link :to="{name:'DetailTechnique',params:{id:parse(donnee.id_technique)}}" style="text-decoration:none;color:white">{{donnee.nom_mg}}</router-link></h4>
            <h6>{{donnee.info_mg}}</h6>
        </div>
    </router-link>

    <router-link style="text-decoration:none;color:white" v-else-if="NameRoute == 3" class="card2" :to="{name:'DetailPlante',params:{id:parse(donnee.id_plante)}}">
        <img :src="baseUrl + donnee.path_image.split('public')[1]" alt="" class="card-image">
        <div class="under-image"></div> 
        <div class="detail" v-if="donnee.nom_fr==undefined || donnee.nom_fr=='null' ? false:true">
            <h4><router-link :to="{name:'DetailPlante',params:{id:parse(donnee.id_plante)}}" style="text-decoration:none;color:white">{{donnee.nom_fr}}</router-link></h4>
            <h6>{{donnee.nom_scientifique}}</h6>
        </div>
        <div class="detail" v-else>
            <h4><router-link :to="{name:'DetailPlante',params:{id:parse(donnee.id_plante)}}" style="text-decoration:none;color:white">{{donnee.nom_mg}}</router-link></h4>
            <h6>{{donnee.nom_scientifique}}</h6>
        </div>
    </router-link>
</div>
</template>
<script>
import baseUrl from '../service/baseUrl.js'

export default {
    name:"Card",
    props:{
        donnee:{
            type:Object,
            default:()=>{} 
        },
        NameRoute:{
            type:Number,
            default:()=>1
        },
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
        top:23vh;
        left: 3vh;
    }
}
@media only screen and (max-width: 767px) {
  .detail{
        position:absolute;
        padding: 10px;
        top:18vh;
        left: 3vh;
    }
}

@media only screen and (max-width: 479px) {
    .detail{
        position:absolute;
        padding: 10px;
        top:16vh;
        left: 3vh;
    }
}
</style>
