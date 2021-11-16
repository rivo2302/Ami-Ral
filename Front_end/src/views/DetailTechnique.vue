<template>
    <div class="body">
        <transition name="fade">
          <div v-if="!overlay">
            <header id="scrollId3"  >
                <Header :bgcolor="bgcolor" :active2="active2" :fontWeight2="fontWeight2" :set="changeLangue"/>
              </header>
            <div id="main-container" v-if="datas">
                <div class="container pt-4">
                  <div class="d-flex top-text-aci">
                    <span>{{OptionLangue[getLangage].agriculture_tec}}</span>
                    <span>{{OptionLangue[getLangage].climato_tec}}</span>
                    <span>{{OptionLangue[getLangage].intelligente_tec}}</span>
                    <span style="margin-left: auto" v-if="datas.techique[0].info_fr == undefined? false :true">{{ datas.techique[0].info_fr }}</span>
                    <span style="margin-left: auto" v-else>{{ datas.techique[0].info_mg }}</span>
                  </div>
                </div>
                <div class="title-image" v-if="datas">
                  <h1 v-if="datas.techique[0].nom_fr==undefined? false : true">{{ datas.techique[0].nom_fr }}</h1>
                  <h1 v-else>{{ datas.techique[0].nom_mg }}</h1>
                  <img :src="baseUrl + datas.techique[0].couverture.replace('public/', '')" alt="Technique - Tanimboly" class="img-couverture" />
                </div>
                <div class="container" v-if="datas">
                  <div class="row">
                    <div class="col-md-4 col-sm-6 item-section-tt">
                      <h6 class="text-muted mt-3">{{OptionLangue[getLangage].productivite}}</h6>
                      <span v-if="datas.techique[0].productivite_fr == undefined?false:true"><b>{{ datas.techique[0].productivite_fr }}</b></span>
                      <span v-else><b>{{ datas.techique[0].productivite_mg }}</b></span>
                    </div>
                    <div class="col-md-4 col-sm-6 item-section-tt">
                      <h6 class="text-muted mt-3">{{OptionLangue[getLangage].adaptation}}</h6>
                      <span v v-if="datas.techique[0].adaptation_fr == undefined ? false:true"><b>{{ datas.techique[0].adaptation_fr }}</b></span>
                       <span v-else><b>{{ datas.techique[0].adaptation_mg}}</b></span>
                    </div>
                    <div class="col-md-4 col-sm-6 item-section-tt">
                      <h6 class="text-muted mt-3">{{OptionLangue[getLangage].mitigation}}</h6>
                      <span v-if="datas.techique[0].mitigation_fr==undefined? false:true"><b>{{ datas.techique[0].mitigation_fr }}</b></span>
                      <span v-else><b>{{ datas.techique[0].mitigation_mg }}</b></span>
                    </div>
                  </div>
                </div>

                <div class="pt-4 container" v-if="datas">
                  <div class="desc-part shadow p-5">
                    <div class="row">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].description_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <p v-if="datas.techique[0].description_fr == undefined ? false :true" class="text-secondary">
                          {{ datas.techique[0].description_fr }}
                        </p>
                         <p v-else class="text-secondary">
                          {{ datas.techique[0].description_mg }}
                        </p>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].materiels_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <p class="text-secondary" v-if="datas.techique[0].materiel_fr == undefined ? false :true">
                          {{ datas.techique[0].materiel_fr }}
                        </p>
                        <p class="text-secondary" v-else>
                          {{ datas.techique[0].materiel_mg }}
                        </p>
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].etapes_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <VueSlickCarousel    v-bind="settings">
                          <div class="p-2" v-for="etape in datas.etapes" :key="etape.id_etape">
                            <div class="card" style="border-radius: 0; border: none;">
                              <img :src="baseUrl + etape.image.replace('public/', 'image/')" class="card-img-top" :alt="etape.nom_fr">
                              <div class="card-body" v-if="etape.nom_fr == undefined ? false:true">
                                <h6 class="card-title">{{ etape.nom_fr }}</h6>
                                <p class="card-text">{{ etape.description_fr }}</p>
                              </div>
                               <div class="card-body" v-else>
                                  <h6 class="card-title">{{ etape.nom_mg }}</h6>
                                  <p class="card-text">{{ etape.description_mg }}</p>
                              </div>
                            </div>
                          </div>
                        </VueSlickCarousel>
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].plante_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <VueSlickCarousel    v-bind="settings">
                          <router-link :to="{name:'DetailPlante',params:{id:plante.id_plante}}" class="p-2" v-for="plante in datas.plantes" :key="plante.id_plante">
                            <div class="card" style="border-radius: 0; border: none;">
                              <img :src="baseUrl + plante.path.replace('public/', '')" class="card-img-top" :alt="plante.nom_fr">
                              <div class="card-body">
                                <h6 class="card-title" v-if="plante.nom_fr==undefined?false:true">{{ plante.nom_fr }}</h6>
                                <h6 class="card-title" v-else>{{ plante.nom_mg }}</h6>
                                <small class="text-muted" style="text-transform: uppercase;">{{ plante.nom_scientifique }}</small>
                              </div>
                            </div>
                          </router-link>
                        </VueSlickCarousel>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].climats_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <VueSlickCarousel    v-bind="settings">
                          <router-link  to="/climat" class="p-2" v-for="climat in datas.climats" :key="climat.id_climat">
                            <div  v-if="climat.nom_fr==undefined ? false:true"  class="card" style="border-radius: 0; border: none;">
                              <img :src="baseUrl + climat.image.replace('public','')" class="card-img-top" :alt="climat.nom_fr">
                              <div class="card-body">
                                <h6 class="card-title">{{ climat.nom_fr }}</h6>
                              </div>
                            </div>
                            <div v-else class="card" style="border-radius: 0; border: none;">
                              <img :src="baseUrl + climat.image.replace('public','')" class="card-img-top" :alt="climat.nom_mg">
                              <div class="card-body">
                                <h6 class="card-title">{{ climat.nom_mg }}</h6>
                              </div>
                            </div>
                          </router-link>
                        </VueSlickCarousel>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-lg-4 col-md-12">
                        <h2>{{OptionLangue[getLangage].regions_tec}}</h2>
                        <div class="underline"></div>
                      </div>
                      <div class="col-lg-8 col-md-12">
                        <VueSlickCarousel    v-bind="settings">
                          <router-link :to="{name:'DetailRegion',params:{id:region.id_region}}" class="p-2" v-for="region in datas.regions" :key="region.id_region">
                            <div class="card" style="border-radius: 0; border: none;">
                              <img :src="baseUrl + region.couverture.replace('public/', '')" class="card-img-top" :alt="region.nom">
                              <div class="card-body">
                                <h6 class="card-title">{{ region.nom }}</h6>
                              </div>
                            </div>
                          </router-link>
                        </VueSlickCarousel>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container p-4">
                  <div class="d-flex plus-info" style="font-size: 1.1rem;">
                    <div class="mb-2 d-inline-block" style="margin-right: .5rem;"><b>{{OptionLangue[getLangage].infos}}</b></div>
                    <div v-if="datas">
                      <a :href="datas.techique[0].source" class="text-secondary" target="_blank">{{ datas.techique[0].source }}</a>
                    </div>
                  </div>
                </div>
              </div>
              <Footer :showup="showup" :scrollId="scrollId" :rechercheId="rechercheId" :items="datasTechnique"/>
          </div>
            
          </transition>
        <div class="d-flex justify-content-center overlay"  v-if="overlay">
            <div class="spinner-border text-success" role="status">
               
            </div>
        </div>
    </div>
</template>
<script>
import Header from "../components/Header"
import { mapGetters, mapActions } from 'vuex'
import Footer from "../components/Footer"
import VueSlickCarousel from 'vue-slick-carousel'
import langue from '../service/Multilangue.js'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    name:'DetailTechnique',
     components: {
      Header,
      VueSlickCarousel,
      Footer
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
         active2:'white!important',
        fontWeight2:'bolder',
        overlay:true,
        timeout: null,
        datas: null,
        OptionLangue:langue,
        scrollId:"#scrollId3",
        rechercheId:'#scrollId3',
        showup:false,
        scrolly: 0,
        baseUrl : "https://api.tanimboly.org/",
        settings:{
            infinite: true,
            slidesToShow: 3,
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]
        },
        datasTechnique:[],
        fr:'fr',
        mg:'mg',
      }
   },
   computed: {
       ...mapGetters('Langage',['getLangage']), 
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
          this.getTechnique()
      })
    },
     beforeMount(){
        
        this.getData();
    },
    updated(){
        if (this.isOnline) {
            this.setOfflineData();
        }
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
    methods:{
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
        setTimeout(callback) {
          this.clearTimeout()
          this.timeout = setTimeout(() => {
            this.clearTimeout()
            callback()
          }, 300)
        },
         getData(){
            const self = this;
            var id = this.$route.params.id;
            var langage = this.getLangage;
            fetch(self.baseUrl + `technique/getDetails/${langage}/${id}`)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.warning('Status Code: ' + response.status);
                        return;
                    }
            
                    response.json().then(function(data) {
                        self.datas = data;
                    });
                }
            )
            .catch(function(err) {
                console.error('Fetch Error :-S', err);
            });
        },
        getTechnique(){
          var langage = this.getLangage
          var self = this
          var nbr_list = 3;
          var start = 0
          fetch(self.baseUrl + `technique/list/${langage}/${nbr_list}/${start}`)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        console.warning('Status Code: ' + response.status);
                        return;
                    }
            
                    response.json().then(function(data) {
                        self.datasTechnique = data;
                    });
                }
            )
            .catch(function(err) {
                console.error('Fetch Error :-S', err);
            });
        },
        getOfflineData(){
            const appData = this.$offlineStorage.get('detail-technique-page');
            this.datasTechnique = appData.datasTechnique;
            this.datas = appData.datas;
        },
        setOfflineData(){
            const self = this;
            this.$offlineStorage.set('detail-technique-page', {
                datasTechnique : self.datasTechnique,
                datas : self.datas,
            });
        },

        changeLangue(){
            if(this.getLangage == 'mg'){
                this.setLangage(this.fr)
            }else{
                this.setLangage(this.mg)
            }
            
            this.getTechnique()
            this.getData();
      }
   }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.body{
	background-color: #1d1d1d;
	color: whitesmoke;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body{
	background-color: #1d1d1d;
	color: whitesmoke;
}

.top-text-aci span{
	display: inline-block;
	margin: 5px 2rem;
	text-transform: uppercase;
}

.title-image{
	padding: 5% 5% 0 5%;
}

.title-image h1{
	position: relative;
	z-index: 2;
	font-size: 6rem;
	word-spacing:9999px;
	padding: 3rem 10rem;
	line-height: .8;
	font-variant: small-caps;
}

.title-image img.img-couverture{
	width: 100%;
	height: 358px;
	object-fit: cover;
	object-position: center;
	position: relative;
	z-index: 1;
	margin-top: -200px;
	filter: brightness(.6);
}

.item-section-tt h6{
	font-weight: normal;
	text-transform: uppercase;
}

.item-section-tt span{
	font-size: .9rem;
}

.desc-part{
	background-color: whitesmoke;
	color: #1d1d1d;
}

.desc-part h2{
	color: #258d54;
}

.underline{
	width: 60px;
	height: 2px;
	margin-bottom: 1rem;
	background-color: #258d54;
}

 .card-text{
	font-size: .9rem;
}

 .card-img-top{
	height: 150px;
}
.container {
  margin-top: 55px;
}
@media (max-width : 768px){
	.top-text-aci{
		flex-direction: column;
	}

	.title-image h1{
		font-size: 4rem;
		padding: 2rem;
		word-break: break-all;
	}

	.title-image img.img-couverture{
		margin-top: -100px;
	}

	.plus-info{
		flex-direction: column;
	}
}
</style>