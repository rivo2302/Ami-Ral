<template>
    <div >
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2" :set="changeLangue"/>
                </header>
                <BarRecherche/>
                <List :items="AllTechnique1" :nameList="nameList" :NameRoute="NameRoute" :showPlus="showPlus" :afficherPlus="afficherPlus"/>
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

import Techniques from '../service/Techniques'
import baseUrl from '../service/baseUrl.js'
import { toDataUrl } from '../helper/images.js'

import Header from "../components/Header"
import Footer from "../components/Footer"
import List from "../components/Listcopy"
import BarRecherche from "../components/BarRecherche"


export default {
    name:'Technique',
     components: {
       Header,
       Footer,
       List,
       BarRecherche
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Listes des techniques',
        active2:'white!important',
        fontWeight2:'bolder',
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
        overlay:true,
        timeout: null,
        AllTechnique2:[],
        AllTechnique1:[],
        nbr_list:8,
        NameRoute:1,
        showPlus:true,
        fr:'fr',
        mg:'mg',
      }
   },
    computed: {
      ...mapGetters('Technique',['AllTechnique']),
      ...mapGetters('Langage',['getLangage'])
    },
    created(){
      this.getAll()
      this.setTimeout(() => {
          this.overlay = false
            if(this.isOnline){
                this.changeData();
              this.initialValue(this.AllTechnique)
              if(this.AllTechnique==undefined){
                    var langage = this.getLangage
                    var nbr_list = this.nbr_list 
                    var start = 0
                    Techniques.getAll(langage,nbr_list,start)
                    .then((res)=>{
                        this.AllTechnique1 = res.data
                    })
                    .catch(()=>{})
              }
            }
      })
      
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
    updated(){
        if (this.isOnline) {
            this.setOfflineData();
        }
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    methods: {
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
			}, 30)
        },
        getOfflineData(){
            const appData = this.$offlineStorage.get('technique-page');
            this.AllTechnique2 = appData.AllTechnique2;
            this.AllTechnique1 = appData.AllTechnique1;
        },
        async setOfflineData(){
            const self = this;
            let datas = [];
            if(this.AllTechnique1){
                for(let i = 0; i < this.AllTechnique1.length; i++){
                    let d = self.AllTechnique1[i];
                    toDataUrl(baseUrl + d.couverture.replace("public", ""), function(res) {
                        d.couverture = res;
                        datas.push(d);
                        if(i == self.AllTechnique1.length - 1){
                            self.$offlineStorage.set('technique-page', {
                                AllTechnique2 : self.AllTechnique2,
                                AllTechnique1 : datas,
                            });
                        }
                    });
                }
            }
        },
        getAll(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list
            let techniques = this.getAllTechnique({langage,nbr_list})
            return techniques
        },
        afficherPlus(){
            const self = this;
            var langage = this.getLangage
            var nbr_list = this.nbr_list 
            var start = this.AllTechnique1.length
            Techniques.getAll(langage,nbr_list,start)
            .then((res)=>{
                this.AllTechnique1 = this.AllTechnique1.concat(res.data)
                for(let i = 0; i < res.data.length; i++){
                    const appData = this.$offlineStorage.get('technique-page');
                    let datas = appData.AllTechnique1;
                    let d = res.data[i];
                    toDataUrl(baseUrl + d.couverture.replace("public", ""), function(result) {
                        d.couverture = result;
                        datas.push(d);
                        if(i == res.data.length - 1){
                            self.$offlineStorage.set('technique-page', {
                                AllTechnique2 : appData.AllTechnique2,
                                AllTechnique1 : datas,
                            });
                        }
                    });
                }
                if(res.data.length<8){
                    this.showPlus = false
                }
            })
            .catch(()=>{
                this.showPlus = false
            })
        },
        initialValue(table){

            this.AllTechnique1 = table
            this.AllTechnique2 = [];
            const l = table ? table.length > 3 ? 3 : table.length : 0;
            for(let i =0; i < l;i++){
                this.AllTechnique2.push(table[i]);

            }
           
        },
        changeData(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list 
            var start = 0
            Techniques.getAll(langage,nbr_list,start)
            .then((res)=>{
               this.initialValue(res.data)
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

