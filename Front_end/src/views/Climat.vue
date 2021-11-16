<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
               <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active5="active5" :fontWeight5="fontWeight5" :set="changeLangue"/>
                </header>
                <BarRecherche/>
                <div class="listclimat pb-4 pb-2" v-if="AllClimat1.length > 3">
                    <div class="container-fluid px-3 pt-2 mb-4">
                        <div class="row align-items-center pt-5 px-4 mb-4">
                            <div class="col col-lg-12">
                                <h3>Climat</h3>
                                <span class="under-title"></span>
                            </div>
                        </div>
                        <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1">
                            <div class="col-3 col-lg-4 col-sm-12 col-md-6 col-12 ">
                                <img src="https://img.freepik.com/vecteurs-libre/feuilles-vertes-fond-clair_23-2147721708.jpg?size=338&ext=jpg" width="100%" height="300px" alt="">
                            </div>
                            <div class="col-12 col-lg-8 col-sm-12 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0 mt-sm-4" >
                                <div class="bbbdd" style="height:100% " :style="backgroundStyles(baseUrl + AllClimat1[0].image.replace('public', ''))">
                                    <div class="detail1 px-4">
                                        <h2 v-if="AllClimat1[0].nom_fr != undefined ? true:false">{{AllClimat1[0].nom_fr}}</h2>
                                        <h2 v-else>{{AllClimat1[0].nom_mg}}</h2>
                                        <u>
                                            <li class="d-flex"><img src="../assets/images/Icones/wind.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[0].vent}}</p></li>
                                            <li class="d-flex"><img src="../assets/images/Icones/drop.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[0].precipitation}}</p></li>
                                            <li class="d-flex"><img src="../assets/images/Icones/sun.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[0].temperature}}</p></li>
                                        </u>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                         <div class="row row-cols-lg-1 row-cols-1 row-cols-md-2 row-cols-sm-1 mt-3">
                            <div class="col-12 col-lg-6 col-sm-12 col-md-6 col-12 mt-2 mt-lg-0 mt-md-0 mt-sm-1 imagesoleie" >
                                <div style="height:100%" class="imagesoleie bbbdd" :style="backgroundStyles(baseUrl + AllClimat1[1].image.replace('public', ''))">
                                    <div class="detail2 px-4">
                                        <h2 v-if="AllClimat1[1].nom_fr != undefined ? true:false">{{AllClimat1[1].nom_fr}}</h2>
                                        <h2 v-else>{{AllClimat1[1].nom_mg}}</h2>
                                        <u>
                                            <li class="d-flex"><img src="../assets/images/Icones/wind.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[1].vent}}</p></li>
                                            <li class="d-flex"><img src="../assets/images/Icones/drop.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1">  {{AllClimat1[1].precipitation}}</p></li>
                                            <li class="d-flex"><img src="../assets/images/Icones/sun.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1">  {{AllClimat1[1].temperature}}</p></li>
                                        </u>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-sm-12 col-md-6 col-12">
                                <div class="row row-cols-lg-1  row-cols-1 row-cols-md-1 row-cols-sm-1">
                                    <div class="col-lg-12 col-sm-12 col-md-12 col-12 mt-3 mt-lg-0 mt-md-0 mt-sm-3">
                                        <div class="bbbdd" style="height:100%" :style="backgroundStyles(baseUrl + AllClimat1[2].image.replace('public', ''))">
                                            <div class="detail3 px-4">
                                                <h2 v-if="AllClimat1[2].nom_fr != undefined ? true:false">{{AllClimat1[2].nom_fr}}</h2>
                                                <h2 v-else>{{AllClimat1[2].nom_mg}}</h2>
                                                <u>
                                                    <li class="d-flex"><img src="../assets/images/Icones/wind.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[2].vent}}</p></li>
                                                    <li class="d-flex"><img src="../assets/images/Icones/drop.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[2].precipitation}}</p></li>
                                                    <li class="d-flex"><img src="../assets/images/Icones/sun.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[2].temperature}}</p></li>
                                                </u>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-3 mt-lg-4">
                                    <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                        <div class="bbbdd" style="height:200px" :style="backgroundStyles(baseUrl + AllClimat1[3].image.replace('public', ''))">
                                            <div class="detail3 px-4">
                                                <h2 v-if="AllClimat1[3].nom_fr != undefined ? true:false">{{AllClimat1[3].nom_fr}}</h2>
                                                <h2 v-else>{{AllClimat1[3].nom_mg}}</h2>
                                                <u>
                                                    <li class="d-flex"><img src="../assets/images/Icones/wind.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[3].vent}}</p></li>
                                                    <li class="d-flex"><img src="../assets/images/Icones/drop.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[3].precipitation}}</p></li>
                                                    <li class="d-flex"><img src="../assets/images/Icones/sun.png" alt="" srcset="" width="20px" height="20px"><p class="mx-1"> {{AllClimat1[3].temperature}}</p></li>
                                                </u>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="AllTechnique2"/>
            </div>
        </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status"></div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Climats from '../service/Climats'
import Header from "../components/Header"
import baseUrl from '../service/baseUrl.js'
import BarRecherche from "../components/BarRecherche"
import Footer from "../components/Footer"
import Techniques from '../service/Techniques'
import { toDataUrl } from '../helper/images.js'

export default {
    name:'Climat',
     components: {
      Header,
      Footer,
      BarRecherche
    },
    computed: {
       ...mapGetters('Langage',['getLangage']), 
      ...mapGetters('Climat',['AllClimat']),
      ...mapGetters('Technique',['AllTechnique']),
      
    },
    created(){
       this.getAll1()
       this.getAll2()
      this.setTimeout(() => {
          this.overlay = false
          if(this.isOnline){
              this.initialValue2(this.AllTechnique)
              this.initialValue1(this.AllClimat)
               if(this.AllTechnique == undefined){
                  this.changeDataFooter()
               }
              if(this.AllClimat == undefined){
                    var langage = this.getLangage
                    var nbr_list = this.nbr_list2 
                    var start = 0
                    Climats.getAll(langage,nbr_list,start)
                    .then((res)=>{
                        this.AllClimat1 = res.data
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
    destroyed() {
      window.removeEventListener('scroll', this.handleResize);
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        active5:'white!important',
        fontWeight5:'bolder',
        overlay:true,
        timeout: null,
        NameRoute:1,
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        baseUrl: baseUrl,
        AllTechnique2:[],
        AllClimat1:[],
        nbr_list2:8,
        rechercheId:'#scrollId3',
        fr:'fr',
        mg:'mg',
      }
   },
    updated(){
        if (this.isOnline) {
            this.setOfflineData();
        }
    },
   methods:{
        ...mapActions('Technique',['getAllTechnique']),
        ...mapActions('Climat',['getAllClimat']),
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
			}, 300)
        }, 
        getOfflineData(){
            const appData = this.$offlineStorage.get('climat-page');
            this.AllTechnique2 = appData.AllTechnique2;
            this.AllClimat1 = appData.AllClimat1;
            this.AllClimat = 1;
        },
        setOfflineData(){
            const self = this;
            let datas = [];
            this.$offlineStorage.set('climat-page', {
                AllTechnique2 : self.AllTechnique2,
                AllClimat1 : self.AllClimat1,
            });
        },
        getAll2(){
            var langage = this.getLangage
            var nbr_list = 3
            let techniques = this.getAllTechnique({langage,nbr_list})
            return techniques
        },
        getAll1(){
            var langage = this.getLangage
            var nbr_list = 4
            let climat = this.getAllClimat({langage,nbr_list})
            return climat
        },
        initialValue2(table){
            if(table != undefined){
                this.AllTechnique2 = table
            }
           
        },
        initialValue1(table){
            if(table != undefined){
                this.AllClimat1 = table
            }
        },
        backgroundStyles(image) {
				return {
                    'background-image': `linear-gradient(to bottom,rgba(0, 0, 0, 0.2),rgb(0, 0, 0, 1)),url(${image})`,
                    'background-repeat': `no-repeat`,
                    'background-size': `100%`,
                    'width': `100%`,
				}
      },
       changeData(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list2 
            var start = 0
            Climats.getAll(langage,nbr_list,start)
            .then((res)=>{
                 this.AllClimat1 = res.data
            })
            .catch(()=>{})
        },
        changeDataFooter(){
            var langage = this.getLangage
            var nbr_list = 3
            var start = 0
            Techniques.getAll(langage,nbr_list,start)
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
            this.changeDataFooter()
            this.changeData()
      }
   }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.listclimat{
  width: 100%;
  background: rgb(15, 15, 17) top center;
  background-size: cover;
  position: relative;
  padding: 0;
}
h3{
    color: whitesmoke
}

.bbbdd{
    background-size: cover !important;
}

.under-title{
    display: block;
    width: 12vh;
    height: 2px;
    background-color: whitesmoke
}
.detail1{
    padding-top: 20vh
}
.detail2{
    padding-top: 40vh
}
.detail3{
    padding-top: 7vh
}
h2{
    font-weight: bold
}
u{
    list-style: none;
}
li{
    color: rgb(199, 199, 199)
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .detail2{
         padding-top: 40vh
    }
    .imagesoleie{
        height: 435px;
        background-size: 160% !important
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .detail2{
         padding-top: 40vh
    }
    .imagesoleie{
        height: 425px;
        background-size: 160% !important
    }
}
@media only screen and (max-width: 767px) {
     .detail2{
         padding-top: 35vh
    }
    .imagesoleie{
        height: 400px;
        background-size: 150% !important
    }
}
@media only screen and (max-width: 479px) {
    .detail2{
         padding-top: 35vh
    }
     .imagesoleie{
        height: 400px;
        background-size: 160% !important
    }
}
</style>

