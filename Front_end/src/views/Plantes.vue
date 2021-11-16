<template>
    <div >
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4" :set="changeLangue"/>
                </header>
                <BarRecherche/>
                <List :items="AllPlante2" :nameList="nameList" :NameRoute="NameRoute" :showPlus="showPlus" :afficherPlus="afficherPlus"/>
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
import List from "../components/List"
import BarRecherche from "../components/BarRecherche"
import Plantes from '../service/Plantes'
import Techniques from '../service/Techniques'
import { setTimeout } from 'timers';

export default {
    name:'Plantes',
     components: {
       Header,
       Footer,
       List,
       BarRecherche
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Listes des plantes',
        active4:'white!important',
        fontWeight4:'bolder',
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
        overlay:true,
        timeout: null,
        AllPlante2:[],
        AllTechnique2:[],
        nbr_list:8,
        nbr_list2:5,
        NameRoute:3,
        showPlus:true,
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
      
      this.getAll2()
      this.getAll()
      this.setTimeout(() => {
          this.overlay = false
          if(this.isOnline){
              this.initialValue2(this.AllTechnique)
               this.initialValue(this.AllPlante)
               if(this.AllPlante == undefined){
                  var langage = this.getLangage
                  var nbr_list = this.nbr_list 
                  var start = 0
                  Plantes.getAll(langage,nbr_list,start)
                    .then((res)=>{
                        this.AllPlante2 = res.data
                    })
                    .catch(()=>{})

                    Techniques.getAll(langage,3,0)
                    .then((res)=>{
                       this.AllTechnique2 = res.data
                    })
                    .catch(()=>{})
              }
          }
      })
    },
    beforeMount(){
         
    },
    mounted() {
      window.addEventListener('scroll', this.handleResize);
      this.handleResize();
        const self = this;
        this.$on('offline', () => {
            self.getOfflineData();
        })

        if(this.isOffline){
            self.getOfflineData();
        }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    updated(){
        if (this.isOnline) {
            this.setOfflineData();
        }
    },
    methods: {
        ...mapActions('Plante',['getAllPlante']),
        ...mapActions('Technique',['getAllTechnique']),
        ...mapActions('Langage',['setLangage']),
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
			}, 200)
        },
        getOfflineData(){
            const appData = this.$offlineStorage.get('plante-page');
            this.AllTechnique2 = appData.AllTechnique2;
            this.AllPlante2 = appData.AllPlante2;
        },
        setOfflineData(){
            const self = this;
            this.$offlineStorage.set('plante-page', {
                AllTechnique2 : self.AllTechnique2,
                AllPlante2 : self.AllPlante2,
            });
        },
        getAll(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list
            let Plante = this.getAllPlante({langage,nbr_list})
            return Plante
        },
        getAll2(){
          
            var langage = this.getLangage
            var nbr_list = 3 
            var start = 0
            Techniques.getAll(langage,nbr_list,start)
            .then((res)=>{
                this.AllTechnique2 = res.data
            })
            .catch(()=>{})
        },
        initialValue2(table){
            if(table != undefined){
                 this.AllTechnique2 = table
            }
          
        },
        initialValue(table){
            if(table != undefined){
                this.AllPlante2 = table
            }
          
        },
        afficherPlus(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list 
            var start = this.AllPlante2.length
            Plantes.getAll(langage,nbr_list,start)
                .then((res)=>{
                    setTimeout(()=>{
                        this.AllPlante2 = this.AllPlante2.concat(res.data)
                        console.log(res.data)
                        if(res.data.length<8){
                            this.showPlus = false
                        }
                    },300)
                })
                .catch(()=>{
                    this.showPlus = false
                })
        },
        changeData(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list 
            var start = 0
            Plantes.getAll(langage,nbr_list,start)
            .then((res)=>{
                this.AllPlante2 = res.data
            })
            .catch(()=>{});

            Techniques.getAll(langage,3,0)
            .then((res)=>{
               this.AllTechnique2 = res.data
            })
            .catch(()=>{})
        },
        changeLangue(){
            if(this.getLangage == 'mg'){
            this.setLangage(this.fr)
            }else{
            this.setLangage(this.mg)
            }
            this.showPlus = true
            this.changeData()
        }
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

