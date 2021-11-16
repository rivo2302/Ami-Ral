<template>
    <div >
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4" :set="changeLangue"/>
                </header>
                <BarRecherche :HandleSearch="HandleSearch"/>
                <ListRecherche :items="All"/>
                <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="AllTechnique2"/>
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
                
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import Header from "../components/Header"
import Footer from "../components/Footer"
import ListRecherche from "../components/ListRecherche"
import BarRecherche from "../components/BarRecherche"
import baseUrl from "../service/baseUrl.js"

export default {
    name:'ResultatRecherche',
     components: {
       Header,
       Footer,
       ListRecherche,
       BarRecherche
    },
    watch:{
      $route() {
        this.repeat()
      }
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Listes des resultats',
        active4:'white!important',
        fontWeight4:'bolder',
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
        overlay:true,
        timeout: null,
        All:{},
        AllTechnique2:[],
        nbr_list:8,
        nbr_list2:5,
        NameRoute:3,
        baseUrl :baseUrl,
        fr:'fr',
        mg:'mg',
      }
   },
    computed: {
      ...mapGetters('Plante',['AllPlante']),
      ...mapGetters('Technique',['AllTechnique']),
      ...mapGetters('Langage',['getLangage'])
    },
    created(){
      
      this.repeat()
      this.getAll2()
      this.setTimeout(() => {
          this.overlay = false
          this.initialValue(this.AllTechnique)
      })
    },
    mounted() {
      window.addEventListener('scroll', this.handleResize);
      this.handleResize()
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    methods: {
        ...mapActions('Plante',['getAllPlante']),
        ...mapActions('Langage',['setLangage']),
        ...mapActions('Technique',['getAllTechnique']),
        repeat(){
          var type=parseInt(this.$route.params.type);
            var value = this.$route.params.value;
            var vm = this;
            var route ;
            const axios = require('axios')
            switch (type) {
                case 0:
                    route = '/div/search/'
                    break;
              case 1:
                    route = '/technique/search/'
                  break;
              case 2:
                    route = '/region/search/'
                    break;
              case 3:
                    route = '/plante/search/'
                    break;
                default:
                    break;
            }
            var params={
                  query:value
              }
            var url = this.baseUrl + route + this.getLangage
            console.log(url)
            axios.get(url,{params})
            .then((res)=>{
                vm.All = res.data
            })
            .catch((error)=>{})
        },
        handleResize(){
            this.scrolly=window.scrollY
            if(this.scrolly>110){
                this.showup = true
            }else{
                this.showup = false
            }
        },
        clearTimeout() {
			if (this.timeout) {
				clearTimeout(this.timeout)
				this.timeout = null
				}
			},
		setTimeout(callback) {
			this.clearTimeout()
			this.timeout = setTimeout(() => {
				this.clearTimeout()
				callback()
			}, 300)
        },
        getAll2(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list2-2
            let techniques = this.getAllTechnique({langage,nbr_list})
            return techniques
        },
        initialValue(table){
            if(table != undefined){
                 this.AllTechnique2 = table
            }
          
        },
        changeLangue(){
         if(this.getLangage == 'mg'){
           this.setLangage(this.fr)
         }else{
           this.setLangage(this.mg)
         }
        this.repeat()
     },
        
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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

