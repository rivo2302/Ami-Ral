<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3">
                    <Header :bgcolor="bgcolor" :active4="active4" :fontWeight4="fontWeight4" :set="changeLangue"/>
                </header>
                <BarRecherche/>
                <div class="body pb-1">
                    <div class="container-fluid mx-0 px-0 pb-1">
                    <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-0">
                        <div class="col-lg-12 col-sm-12 col-md-12 col-12 mt-4" >
                            <VueSlickCarousel  ref="c1"  v-bind="setting2">
                                <div v-for="(image0,index) in images" :key="index" style="width:100% !important;height:200px!important">
                                    <img :src="baseUrl + image0.path.split('public')[1]" class="img-cover" alt="" srcset="" width="100%" height="450px">
                                    <div class="under-image"></div>
                                    <div class="container detail">
                                        <div  class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-0">
                                            <div class="col-lg-12 col-sm-12 col-md-12 col-12 mt-0  mt-lg-0 mb-4">
                                                <h4 v-if="plante.nom_fr != undefined ? true :false" class="title mt-4">{{plante.nom_fr}}</h4>
                                                <h4 class="title mt-4" v-else>{{plante.nom_mg}}</h4>
                                            </div>
                                        </div>
                                        <div class="row row-cols-lg-4 row-cols-1 row-cols-md-1 row-cols-sm-1">
                                            <div class="col-lg-2 col-sm-3 col-md-3 col-3 mt-0 mx-0">
                                                <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1">
                                                    <div class="col-lg-3 col-sm-12 col-md-3 col-12 mt-2">
                                                        <img src="../assets/images/Icones/green-energy.png" alt="" srcset="" width="40px" height="40px">
                                                    </div>
                                                     <div class="col-lg-9 col-sm-12 col-md-9 col-12 mt-2">
                                                         <h6>{{OptionLangue[getLangage].lumiere}}</h6>
                                                         <p>{{plante.lumiere}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-sm-3 col-md-3 col-3 mt-2   mx-0 px-0" >
                                                <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-0">
                                                    <div class="col-lg-3 col-sm-12 col-md-3 col-12 mt-2">
                                                        <img src="../assets/images/Icones/humidity (1).png" alt="" srcset="" width="40px" height="40px">
                                                    </div>
                                                     <div class="col-lg-9 col-sm-12 col-md-9 col-12 mt-2">
                                                         <h6>{{OptionLangue[getLangage].humidite}}</h6>
                                                         <p>{{plante.humidite}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-sm-3 col-md-3 col-3 mt-2 mx-0 px-0">
                                                <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-0">
                                                    <div class="col-lg-3 col-sm-12 col-md-3 col-12 mt-2">
                                                        <img src="../assets/images/Icones/harvest.png" alt="" srcset="" width="40px" height="40px">
                                                    </div>
                                                     <div class="col-lg-9 col-sm-12 col-md-9 col-12 mt-2">
                                                         <h6>{{OptionLangue[getLangage].floraison}}</h6>
                                                         <p>{{plante.floraison}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-sm-3 col-md-3 col-3 mt-2 mx-0 px-0">
                                                <div class="row row-cols-lg-3 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-0">
                                                    <div class="col-lg-3 col-sm-12 col-md-3 col-12 mt-2">
                                                        <img src="../assets/images/Icones/humidity (2).png" alt="" srcset="" width="40px" height="40px">
                                                    </div>
                                                     <div class="col-lg-9 col-sm-12 col-md-9 col-12 mt-2">
                                                         <h6>{{OptionLangue[getLangage].temperature}}</h6>
                                                         <p>{{plante.temperature}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </VueSlickCarousel>
                        </div>
                    </div>
                    <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4 px-4">
                       <div class="col-lg-12 col-sm-12 col-md-12 col-12">
                           <VueSlickCarousel  ref="c2" :asNavFor="$refs.c1" v-bind="setting1">
                                 <div v-for="(image4,index) in images" :key="index" style="width:100px;height:200px" >
                                    <img :src="baseUrl + image4.path.split('public')[1]" alt="" srcset="" width="315px" height="200px">
                                </div>
                            </VueSlickCarousel>
                       </div>
                    </div >
                    <div v-if="getOne != undefined && getOne != 'null'?true:false" class="row row-cols-lg-2 row-cols-1 row-cols-md-2 row-cols-sm-1 pt-1 mx-0 flex bg-color mt-4 px-0 pb-5 mb-4">
                        <div class="col-lg-4 col-sm-12 col-md-5 col-12 border-style px-3" v-if="plante">
                            <div class="row row-cols-lg-2 row-cols-2 row-cols-md-1 row-cols-sm-2 mt-4">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/adn.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].nom_science}}</h6>
                                    <p>{{plante.nom_scientifique}}</p>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/planete-terre.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].regne}}</h6>
                                    <p>{{plante.regne}}</p>
                                </div>
                            </div>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/branche.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].embranchement}}</h6>
                                    <p>{{plante.embranchement}}</p>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/classification.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].classe}}</h6>
                                    <p>{{plante.classe}}</p>
                                </div>
                            </div>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/bonsai.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].ordre}}</h6>
                                    <p>{{plante.ordre}}</p>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/famille.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].famille}}</h6>
                                    <p>{{plante.famille}}</p>
                                </div>
                            </div>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4">
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/feuille.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].genre}}</h6>
                                    <p>{{plante.genre}}</p>
                                </div>
                                <div class="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <img src="../assets/images/Icones/cactus.png" alt="" srcset="" width="40px" height="40px">
                                    <h6 class="mt-2">{{OptionLangue[getLangage].espece}}</h6>
                                    <p>{{plante.espece}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-12 col-md-7 col-12 px-4 pd-b" v-if='plante'>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4">
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                    <h5>{{OptionLangue[getLangage].description}}</h5>
                                    <span></span>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                    <p v-if="plante.description_fr != undefined?true:false">{{plante.description_fr}}</p>
                                    <p v-else>{{plante.description_mg}}</p>
                                </div>
                            </div>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-2">
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                    <h5>{{OptionLangue[getLangage].technique}}</h5>
                                    <span></span>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                    <VueSlickCarousel    v-bind="setting3">
                                        <router-link    :to="{name:'DetailTechnique',params:{id:parseInt(image2.id_technique)}}" class="card ml-4 border-none" v-for="(image2,index) in technique" :key="index" style="margin-right:10px;width:30px !important;text-decoration:none">
                                            <img :src="baseUrl + image2.couverture.split('public')[1]" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <p class="card-text pb-0" style="font-size:12px" v-if="image2.nom_fr != undefined ? true :false">{{image2.nom_fr}}</p>
                                                <p class="card-text" v-else>{{image2.nom_mg}}</p>
                                            </div>
                                        </router-link>
                                    </VueSlickCarousel>
                                </div>
                            </div>
                            <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 mt-4">
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                    <h5>{{OptionLangue[getLangage].region}}</h5>
                                    <span></span>
                                </div>
                                <div class="col-lg-12 col-sm-12 col-md-12 col-12 ">
                                     <VueSlickCarousel    v-bind="setting3">
                                        <router-link  :to="{name:'DetailRegion',params:{id:image3.id_region}}" class="card ml-4 border-none" v-for="(image3,index) in region" :key="index" style="margin-right:10px;width:40px;height:20px !important;text-decoration:none">
                                            <img :src="baseUrl + image3.couverture.split('public')[1]" class="card-img-top" alt="...">
                                            <div class="card-body">
                                                <p class="card-text" v-if="image3.nom != undefined ? true :false">{{image3.nom}}</p>
                                                <p class="card-text" v-else>{{image3.nom_mg}}</p>
                                            </div>
                                        </router-link>
                                    </VueSlickCarousel>
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
import Header from "../components/Header"
import Footer from "../components/Footer"
import BarRecherche from "../components/BarRecherche"
import baseUrl from '../service/baseUrl.js'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Plantes from '../service/Plantes'
import Techniques from '../service/Techniques'
import langue from '../service/Multilangue.js'

export default {
    name:'DetailPlante',
     components: {
      Header,
      Footer,
      BarRecherche,
      VueSlickCarousel
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        refe:null,
        active4:'white!important',
        fontWeight4:'bolder',
        overlay:true,
        timeout: null,
        OptionLangue:langue,
        scrollId:"#scrollId3",
        scrolly: 0,
        baseUrl:baseUrl,
        showup:false,
        AllTechnique2:[],
        nbr_list:5,
        rechercheId:'#scrollId3',
        setting1:{
            dots: false,
            focusOnSelect: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            adaptiveHeight: true,
            slidesToScroll: 1,
            touchThreshold: 5,
            arrows: false,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]

        },
        setting2:{
            dots: false,
            focusOnSelect: true,
            infinite: true,
            fade: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 5,
            arrows: false,
        },
        setting3:{
            dots: false,
            focusOnSelect: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            touchThreshold: 5,
            arrows: false,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        },
        images:[],
        technique:[],
        region:[],
        plante:[],
        fr:'fr',
        mg:'mg',
      }
   },
    computed: {
      ...mapGetters('Technique',['AllTechnique']),
      ...mapGetters('Langage',['getLangage']), 
       ...mapGetters('Plante',['getOne'])
    },
    created(){
      this.getAll2()
      var id_plante =parseInt(this.$route.params.id);
      var langage = this.getLangage
      this.getOnePlante({langage,id_plante})
      
      this.setTimeout(() => {
          this.overlay = false
          if(this.isOnline){
               this.change(this.getOne)
               console.log(this.getOne)
               this.initialValue2(this.AllTechnique)
              if(this.getOne == undefined){
                  Plantes.getOne(langage,id_plante)
                  .then((res)=>{
                        this.change(res.data)
                  })
                  .catch(()=>{})
              }
          }
      })
      
    },
    beforeMount(){
        var id_plante =parseInt(this.$route.params.id);
        var langage = this.getLangage
        Plantes.getOne(langage,id_plante)
            .then((res)=>{
                this.change(res.data)
            })
            .catch(()=>{})
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
    methods:{
        ...mapActions('Technique',['getAllTechnique']),
        ...mapActions('Plante',['getOnePlante']),
        ...mapActions('Langage',['setLangage']),
        clearTimeout() {
			if (this.timeout) {
				clearTimeout(this.timeout)
				this.timeout = null
				}
            },
        handleResize(){
            this.scrolly=window.scrollY
            if(this.scrolly>110){
                this.showup = true
            }else{
                this.showup = false
            }
        },
        getOfflineData(){
            const appData = this.$offlineStorage.get('detail-plante-page');
            this.AllTechnique2 = appData.AllTechnique2;
            this.images = appData.images;
            this.technique = appData.technique;
            this.region = appData.region;
            this.plante = appData.plante;
        },
        setOfflineData(){
            const self = this;
            this.$offlineStorage.set('detail-plante-page', {
                AllTechnique2 : self.AllTechnique2,
                images: self.images,
                technique: self.technique,
                region: self.region,
                plante: self.plante,
            });
        },
        getAll2(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list - 2
            let techniques = this.getAllTechnique({langage,nbr_list})
            return techniques
        },
        initialValue2(table){
            if(table != undefined){
                this.AllTechnique2 = table
            }
        },
		setTimeout(callback) {
			this.clearTimeout()
			this.timeout = setTimeout(() => {
				this.clearTimeout()
				callback()
			}, 0)
        },
        change(data){
            this.images=data.images;
            this.technique=data.technique;
            this.region=data.region;
            this.plante=data.plante;
        },
        changeData(){
            var id_plante =parseInt(this.$route.params.id);
            var langage = this.getLangage
            Plantes.getOne(langage,id_plante)
            .then((res)=>{
                 this.change(res.data)
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
            
            this.changeDataFooter()
            this.changeData()
      }
   }
}
</script>
<style scoped>
.card-img-top{
	height: 150px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.body{
  width: 100%;
  background: rgb(15, 15, 17) top center;
  background-size: cover;
  margin-top: 0px;
  position: relative;
  padding: 0;
}
.img-cover{
    object-fit: cover;
    object-position: center;
}
.card-body{
     background: rgb(15, 15, 17) top center;
}
.card{
    padding-left: 7px;
    background: rgb(41, 41, 41) top center;
}
h6,p,h5{
    color: rgb(177, 177, 177);
    
}
h5{
    font-weight: bold
}
p{
    font-size: 14px
}
h6{
    font-weight: bolder;
    font-size: 15px !important
}
.border-style{
    border-right: 1px solid rgb(177, 177, 177)
}
span{
    display: flex;
    width: 50px;
    height: 2px;
    margin-bottom: 10px;
    background-color: rgb(177, 177, 177)
}
.bg-color{
    background-color: rgb(41, 41, 41);
    height: 110vh;
    
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
    top:35vh;
    left: 3vh;
}

.title{
    color:rgb(209, 209, 209)!important;
    font-style: italic
}
#container3{
    background-color: rgb(41, 41, 41);
    width: 95%;
    margin-right: 18px!important;
    text-align: center
}
#container3 p{
    margin-top: 10px;
    font-size: 16px;
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
    .bg-color{
        display: block;
        background-color: rgb(41, 41, 41);
        height: 190vh;
    
    }
    #container3{
        background-color: rgb(41, 41, 41);
        width: 100%;
        margin-right: 0vh!important;
        border-right: 2px solid rgb(209, 209, 209);
        text-align: center
    }

}
@media only screen and (max-width: 479px) {
    .bg-color{
        display: block;
        background-color: rgb(41, 41, 41);
        height: 190vh;
    
    }
    #container3{
        background-color: rgb(41, 41, 41);
        width: 81%;
        margin-right: 12vh!important;
        text-align: center
    }
}
</style>