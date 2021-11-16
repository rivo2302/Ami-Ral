
<template>
  <div>
    <transition name="fade2">
    <div class="" v-if="!overlay">
      <header  id="scrollId">
        <Header :bgcolor="bgcolor" :active1="active1" :fontWeight1="fontWeight1" :set="changeLangue"/>
      </header>
      <div class="" id="container">
        <div class="container" id="recherche">
          <div class="inner-container">
              <h2>{{OptionLangue[getLangage].titre1}}<br>{{OptionLangue[getLangage].titre2}}</h2>
              <p>{{OptionLangue[getLangage].sous_titre}}</p>
             
              <transition name="fade">
                <div  class="container  min-vh-80 py-4" style="position:absolute" v-if="!showsearch">
                    <div class="row pl-2">
                        <form action="" @submit.prevent="HandleSearch">
                          <div class="col-md-5 mx-auto" style="width:300px">
                              <div class="input-group">
                                  <input class="form-control border-end-0 border rounded-pill" type="search" :placeholder="OptionLangue[getLangage].rechercher + '...'" value="" v-model="searchValue" id="example-search-input">
                                  <span class="input-group-append" style="margin-left:-42px">
                                      <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="submit">
                                          <i class="fa fa-search"></i>
                                      </button>
                                  </span>
                              </div>
                          </div>
                        </form>
                    </div>
                </div>
              </transition>
               <transition name="fade">
                <div class="d-flex decouvre" @click="showCherche()" v-if="showsearch">
                  <i class="fa fa-search"></i>
                </div>
              </transition>
          </div>
        </div>
      </div>
      <div class="connaissance  pb-5">
        <div class="row  align-items-center row-cols-1  pt-5" id="decouvrir">
          <div class="col col-lg-5 col-12 col-md-6 my-lg-10 bgskills">
            <div class="row align-items-center pt-4">
                <div class="col col-lg-6  my-lg-10 pl-4">
                  <div class="container2">
                    <div class="min-card ml-4">
                        <img src="../assets/images/outils.png" class="" width="35px" height="35px" alt="">
                    </div>
                    <div>
                      <h6 class="mt-2">
                       {{OptionLangue[getLangage].onglet1}}
                      </h6>
                      <p>
                        {{OptionLangue[getLangage].onglet1_description}}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-6  my-lg-10">
                  <div class="container2">
                    <div class="min-card ml-4">
                        <img src="../assets/images/technologie.png" width="35px" height="35px" alt="">
                    </div>
                    <div>
                      <h6 class="mt-2">
                        {{OptionLangue[getLangage].onglet2}}
                      </h6>
                      <p>
                        {{OptionLangue[getLangage].onglet2_description}}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row align-items-center pt-2">
                <div class="col col-lg-6  my-lg-10">
                  <div class="container2">
                    <div class="min-card ml-4">
                      <img src="../assets/images/technique.png" width="35px" height="35px" alt="">
                    </div>
                    <div>
                      <h6 class="mt-2">
                        {{OptionLangue[getLangage].onglet3}}
                      </h6>
                      <p>
                        {{OptionLangue[getLangage].onglet3_description}}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-lg-6 my-lg-10">
                   <div class="container2">
                    <div class="min-card ml-4">
                        <img src="../assets/images/rendement.png" width="35px" height="35px" alt="">
                    </div>
                    <div>
                      <h6 class="mt-2">
                        {{OptionLangue[getLangage].onglet4}}
                      </h6>
                      <p>
                        {{OptionLangue[getLangage].onglet4_description}}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="col col-lg-6 text-justify col-md-6 my-lg-10 p bl-4 responsiveconne">
            <div class="row align-items-center pt-3 ml-2">
              <div class="col col-lg-12 text-justify connresponive">
                <h2>{{OptionLangue[getLangage].connaissance}}</h2>
              </div>
              </div>
              <div class="row align-items-center pt-1">
                <div class="col col-lg-12 text-center my-lg-10">
                  <span class="under2"></span>
                </div>
              </div>
              <div class="row justify-content-md-center pt-3">
                <div class="col col-lg-12 techtextresponsive">
                  <p >{{OptionLangue[getLangage].description_connaissance}}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="technique pt-5 pb-5">
        <div class="container">
        <div class="row align-items-center pt-5">
          <div class="col col-lg-12 text-center my-lg-10">
           <h2>{{OptionLangue[getLangage].technique}}</h2>
          </div>
        </div>
        <div class="row align-items-center pt-1">
          <div class="col col-lg-12 text-center my-lg-10">
           <span class="under"></span>
          </div>
        </div>
        <div class="row justify-content-md-center pt-4">
          <div class="col col-lg-9"> 
            <p> {{OptionLangue[getLangage].description_technique}}</p>
          </div>
        </div>
        <div class="row row-cols-lg-3 row-cols-1 row-cols-md-1 row-cols-sm-1 ml-lg-6  justify-content-lg-center lg-content justify-content-center">
          <div class="col col-lg-3 col-sm-12 col-md-12 col-12 mr-4" v-for="(item,index) in AllTechnique2" :key="index">
            <router-link :to="{name:'DetailTechnique',params:{id:parse(item.id_technique)}}" class="card Bgimage zoom responsiveimage" style="width: 16rem;height:20rem;text-decoration:none;color:white" :style="backgroundStyles( baseUrl + item.couverture.split('public')[1])">
              <div class="card-body mt">
                 <h4 class="card-title" v-if="item.nom_fr==undefined || item.nom_fr=='null' ? false:true"><router-link :to="{name:'DetailTechnique',params:{id:parse(item.id_technique)}}" style="text-decoration:none;color:white">{{item.nom_fr}}</router-link></h4>
                 <h4 class="card-title" v-else><router-link   :to="{name:'DetailTechnique',params:{id:parse(item.id_technique)}}" style="text-decoration:none;color:white" >{{item.nom_mg}}</router-link></h4>
                <h6 class="card-subtitle mb-2" v-if="item.nom_fr==undefined || item.info_fr=='null' ? false:true">{{item.info_fr}}</h6>
                <h6 class="card-subtitle mb-2" v-else>{{item.info_mg}}</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      </div>
      <div class="galery  pb-5">
        <div class="container">
          <div class="row align-items-center pt-5">
            <div class="col col-lg-12 text-center my-lg-10">
            <h2>{{OptionLangue[getLangage].gallerie}}</h2>
            </div>
          </div>
          <div class="row align-items-center pt-1">
            <div class="col col-lg-12 text-center my-lg-10">
              <span class="under"></span>
            </div>
          </div>
          <div class="row row-cols-lg-2 row-cols-md-2 row-cols-1 row-cols-sm-1 mt-5 justify-content-lg-center">
            <div class="col-12 col-sm-12 col-md-5 col-lg-5 mr-4" style="height:18rem !important">
              <img width="100%" height="100%" class="zoom" src="https://images.pexels.com/photos/1065753/pexels-photo-1065753.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  alt="...">
            </div>
            <div class=" col-12 col-sm-12 col-md-7 col-lg-5 mr-4 mt-lg-0 mt-md-0 mt-4">
              <div class="row row-cols-lg-2 mt-0 justify-content-lg-center">
                <div class="col col-lg-6 text-center"  style="height:132px !important"> 
                    <img width="100%" height="100%" class="zoom"  src="https://images.pexels.com/photos/5231014/pexels-photo-5231014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="...">
                </div>
                <div class="col col-lg-6 text-center" style="height:132px !important">
                    <img width="100%" height="100%" class="zoom" src="https://pbs.twimg.com/media/DfeCP_KXUAAzIiD.jpg"  alt="...">
                </div>
              </div>
              <div class="row row-cols-lg-2 mt-4 justify-content-lg-center">
                <div class="col col-lg-6 text-center " style="height:132px !important" >
                    <img width="100%" height="100%"  class="zoom" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEV8Nk-vQ7Qmy-RnJf5UvZdQvj5QgJFyOGg&usqp=CAU"  alt="...">
                </div>
                <div class="col col-lg-6 text-center" style="height:132px !important">
                    <img width="100%" height="100%" class="zoom"  src="https://images.pexels.com/photos/6780331/pexels-photo-6780331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="...">
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>

      <div class="galery  pb-5">
        <div class="container">
          <div class="row align-items-center pt-5">
            <div class="col col-lg-12 text-center my-lg-10">
            <h2>{{OptionLangue[getLangage].sponsor}}</h2>
            </div>
          </div>
          <div class="row align-items-center pt-1">
            <div class="col col-lg-12 text-center my-lg-10">
              <span class="under"></span>
            </div>
          </div>
          <div class="row row-cols-lg-6 row-cols-md-4 row-cols-4 row-cols-sm-3 mt-5 justify-content-lg-center px-lg-5">
            <div class="col-4 col-sm-4 col-md-4 col-lg-2" v-for="item in sponsor" :key="item.image">
              <a :href="item.url" target="_blank" class="mx-lg-5">
                <img :src="item.image" class="zoom" style="padding: 10px 0;" width="85px"  height="85px" alt="">
              </a>
            </div>
          </div>
          <!--
          <div class="row row-cols-lg-6 row-cols-md-4 row-cols-4 row-cols-sm-3 mt-3  px-lg-5">
            <div class="col-4 col-sm-4 col-md-4 col-lg-2" v-for="item in sponsor2" :key="item.image">
              <a :href="item.url" target="_blank" class="mx-lg-5">
                <img :src="item.image" class="zoom" style="padding: 10px 0;" width="85px"  height="85px" alt="">
              </a>
            </div>
          </div>
          -->
      </div>
      </div>

      <Contact/>
      <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="AllTechnique2"/>
    </div>
    </transition>
    <div class="d-flex justify-content-center overlay"  v-if="overlay">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import langue from '../service/Multilangue.js'
  import Header from "../components/Header"
  import Contact from "../components/Contact"
  import Footer from "../components/Footer"
  import AOS from 'aos'
  import Techniques from '../service/Techniques'
  import baseUrl from '../service/baseUrl.js'
  export default {
    name: 'Home',
    components: {
      Header,
      Contact,
      Footer

    },
    data:function() {
      return{
        text:"",
        rechercheId:'#recherche',
        scrolly: 0,
        bgcolor:"",
        showup:false,
        scrollId:"#scrollId",
        active1:'white!important',
        fontWeight1:'bolder',
        showsearch:true,
        overlay:true,
        timeout: null,
        nbr_list:3,
        baseUrl:baseUrl,
        AllTechnique2:[],
        OptionLangue:langue,
        fr:'fr',
        mg:'mg',
        searchValue:'',
        typeSearch:0,
        sponsor:[
          {
            url:'https://www.afaas-africa.org/fr/home-francais/',
            image: require("../assets/images/AFAAS.png")
          },
          {
            url:'https://fca-madagascar.org/',
            image: require('../assets/images/FCA.png')
          },
          {
            url:'https://europa.eu/european-union/index_fr',
            image: require('../assets/images/Unioneuropene.png')
          },
          {
            url:'https://www.ifad.org/en/',
            image: require('../assets/images/JLIFAD.jpg')
          },
          {
            url:'https://au.int/fr/caadp ',
            image: require('../assets/images/CAADP.jpeg')
          },
           {
            url:'https://www.facebook.com/AVANA-HUB-222214588337602/',
            image: require('../assets/images/AVANA_HUB.jpeg')
          },
        ],
        /*
        sponsor2:[
          {
            url:'https://iteam-s.mg/',
            image:require('../assets/images/iteams.png')
          },
        ]
        */
      }
   },
    computed: {
      ...mapGetters('Technique',['AllTechnique']),
      ...mapGetters('Langage',['getLangage']),
    },
    created(){
      this.getAll()
      this.setTimeout(() => {
          this.overlay = false
          if(this.isOnline){
            this.initialValue(this.AllTechnique)
            if(this.AllTechnique==undefined){
                this.afficherPlus()
            }
          }
      })
    },
    updated(){
        if (this.isOnline) {
            this.setOfflineData();
        }
    },
    mounted() {
      AOS.init()
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
    
  methods: {
    ...mapActions('Technique',['getAllTechnique']),
    ...mapActions('Langage',['setLangage']),
    backgroundStyles(image) {
				return {
					'background-image': `linear-gradient(to bottom,rgba(44, 44, 44, 0.3),rgb(44, 44, 44, 0.3)),url(${image})`,
				}
      },
        getOfflineData(){
            const appData = this.$offlineStorage.get('home-page');
            this.AllTechnique2 = appData.AllTechnique2;
        },
        setOfflineData(){
            const self = this;
            this.$offlineStorage.set('home-page', {
                AllTechnique2 : self.AllTechnique2,
            });
        },
    handleResize(){
      this.scrolly=window.scrollY
      if(this.scrolly>510){
        this.showup = true
      }else{
        this.showup = false
      }
      if(this.scrolly>0){
        this.bgcolor ='rgb(37, 141, 84)'
      }else{
        this.bgcolor ='transparent'
      }
    },
    showCherche(){
     this.showsearch =false
    },
    parse(url){
      var newUrl;
      if(url){
        newUrl= parseInt(url);
      }
      return newUrl
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
    getAll(){
      var langage = this.getLangage
      var nbr_list = this.nbr_list
      let techniques = this.getAllTechnique({langage,nbr_list})
      return techniques
    },
    initialValue(table){
      if(table != undefined ){
         this.AllTechnique2 = table
      }
    },
    afficherPlus(){
            var langage = this.getLangage
            var nbr_list = this.nbr_list 
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
        this.afficherPlus()
     },
     HandleSearch(){
            if(this.searchValue){
                var vm = this
                this.$router.push({
                    name:'ResultatRecherche',
                    params: {
                        type:vm.typeSearch,
                        value:vm.searchValue
                    }
                })
            }
        }
  }
}
</script>
<style>
.technique h2{
  text-transform: uppercase
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade2-enter-active, .fade2-leave-active {
  transition: opacity 2s
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#header-default{
  overflow: hidden;
}
a{
  text-decoration: none;
}
.overlay{
  padding-top: 20%;
  background-size: cover;
  position: relative;
  width:100%;
}
#container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom,rgba(44, 44, 44, 0.4),rgb(44, 44, 44, 0.4)),url("../assets/images/bg.jpg") top center;
  background-size: cover;
  position: relative;
  padding: 0;
}



.inner-container{
  text-align: center;
  padding-top: 20%;

}
.inner-container h2{
 font-weight: bolder;
 word-spacing: 0px;
 font-style:italic;
 color: white !important
}
.inner-container p{
 font-style:italic;
 color: rgba(248, 248, 248, 0.7);
 font-size: 10px;
}
.decouvre{
   text-align: center;
   margin-left: 47%;
   display: block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: rgb(37, 141, 84);
   margin-top: 40px;
}


.decouvre i{
  font-size:30px ;
  text-align: center;
  margin-left: 0px;
  margin-top: 5px;
  color: rgb(243, 243, 243)
}
.decouvre i{
  margin-left: 17px;
  margin-top: 12px;
  margin-left: 11px;
  cursor: pointer;
}
.technique{
  width: 100%;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.galery{
  width: 100%;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.connaissance{
  width: 100%;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;
}
.technique p,.techniqueh2,.connaissance p,.connaissance h2,h2{
  color:white
}
.technique p{
  font-size: 13px
}
.connaissance p{
  font-size: 13px;
}
.under{
  display: block;
  height: 4px;
  text-align: center;
  width: 50px;
  margin-left: 48%;
  background-color:white
}
.under2{
  display: block;
  height: 4px;
  text-align: center;
  width: 50px;
  margin-left: 0%;
  background-color:white
}

.mt{
  margin-top: 90%
}

.Bgimage{
  background-size: cover;
  background-color: rgb(0, 0, 0,0.5) !important;
  background-repeat: no-repeat
}

.card-body h4{
  color:white
}
.card-body h6{
  color:rgb(233, 233, 233)
}
.zoom{
  transform: scale(1);
  transition: all 0.3s
}
.zoom:hover{
  transform: scale(1.05);
  transition: all 0.3s
}
.bgskills{
  background: linear-gradient(to right, rgba(255,0,0,0), rgb(37, 141, 84));
  padding-left: 60px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 70px
}
.bgskills p,label{
  font-size: 11px;
  color: rgb(222, 225, 228)
}
.bgskills h6{
   font-size: 13px;
  color: white
}
.bgskills img{
  font-size: 30px !important;
  margin: 10px 0px 0px 0px;
  margin-left: 7px;
  transition: all 0.3s;
  
}

.min-card{
  height: 50px;
  width: 50px;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
}
.min-card:hover img{
  transform: scale(1.1);
}




@media (max-width: 992px) {
  #header-default {
    padding: 12px 0;
  }
}
@media only screen and (min-width: 1200px) {
  .responsiveconne{
    margin-left: 40px
  }
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .inner-container{
    text-align: center;
    padding-top: 45%;

  }
  
  .responsiveconne{
    margin-left: 40px
  }
  .overlay{
    padding-top: 25%;
  }
}
@media only screen and (min-width: 770px) and (max-width: 991px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 40%;

  }
  .connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 30px
  }
  .technique{
    height: 190vh !important;
  }
  .responsiveimage{
    width: 65% !important;
    margin-bottom: 40px;
    margin-left: 15%
  }
  .overlay{
    padding-top: 30%;
  }
}
@media only screen and (max-width: 769px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 50%;

  }
  .connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 10px
  }
  .responsiveimage{
    width: 80% !important;
    margin-bottom: 40px;
    margin-left: 10%
  }
  .mt{
    margin-top: 50%
  }
  .overlay{
    padding-top: 40%;
  }
  
}
@media only screen and (max-width: 479px) {
  #container {
    margin-top: -20px
  }
  .inner-container{
    text-align: center;
    padding-top: 60%;

  }
  connresponive{
    text-align: center;
  }
  .under2,.under{
    margin-left: 45%
  }
  .connaissance p{
    margin-left: 10px
  }
  .responsiveimage{
    width: 80% !important;
    margin-bottom: 40px
  }
  .mt{
    margin-top: 50%
  }
  .overlay{
    padding-top: 50%;
  }
}

</style>