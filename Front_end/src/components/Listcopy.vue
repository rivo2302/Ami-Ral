<template>
    <div class="listTechnique">
            <div class="container-fluid px-3">
                <div class="row align-items-center pt-5 px-4 mb-4">
                    <div class="col col-lg-12">
                        <h3>{{nameList}}</h3>
                        <span class="under-title"></span>
                    </div>
                </div>
               <div v-if="items != undefined ? true : false" class="row row-cols-lg-4 row-cols-1 row-cols-md-2 row-cols-sm-2 ml-lg-6 pt-2 mx-4 mx-md-0 mx-lg-0 mx-sm-0">
                    <div class="col col-lg-3  col-sm-6 col-md-6 col-10  mt-lg-3 mt-4 mx-4 mx-lg-0 mx-md-0 mx-sm-0" v-for="(item,index) in items" :key="index">
                        <Card :donnee="item" :NameRoute="NameRoute"/>
                    </div>
                </div>
                 
                <div  class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6 justify-content-lg-center text-center justify-content-center">
                    <transition name="fade">
                        <div v-if="showPlus" class="col-12 col-lg-3 col-sm-12 col-md-12 col-12 mr-4">
                            <button type="button" class="btn btn-success mx-4 mt-5" @click="afficherPlus()">{{OptionLangue[getLangage].afficher_plus}}</button>
                        </div>
                     </transition>
                </div>
            </div>
        </div>
</template>
<script>
import Card from "./Card_copy.vue"
import langue from '../service/Multilangue.js'
import { mapGetters} from 'vuex'
export default {
    name:'List',
     components: {
       Card,
    },
    props:{
        items:{
            type:Array,
            default:()=>[]
        },
        nameList:{
            type:String,
            default:()=>""
        },
        NameRoute:{
            type:Number,
            default:()=>1
        },
        showPlus:{
            type:Boolean,
            default:()=>true
        },
        afficherPlus:{
            type:Function,
            default:()=>{}
        }
    },
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
    data:function() {
        return{
            OptionLangue:langue
        }
    },
    methods:{
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.listTechnique{
  width: 100%;
  background: rgb(15, 15, 17) top center;
  padding-bottom: 10vh !important; 
  background-size: cover;
  position: relative;
  padding: 0;
}
h3{
    color: whitesmoke
}

.under-title{
    display: block;
    width: 12vh;
    height: 2px;
    background-color: whitesmoke
}
@media only screen and (min-width: 1200px) {
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
 
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
 
}
@media only screen and (max-width: 767px) {
  
}
@media only screen and (max-width: 479px) {

}
</style>
