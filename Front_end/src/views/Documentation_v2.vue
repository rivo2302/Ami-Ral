<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="scrollId3" >
                    <Header :bgcolor="bgcolor" :active6="active6" :fontWeight6="fontWeight6" :set="changeLangue"/>
                </header>
                <div class="doc-content container pt-4">
                  <h2 class="mt-3 mb-5 text-dark">{{OptionLangue[getLangage].help}}</h2>
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="d-flex">
                        <div style="width : 50px; margin: 1rem;">
                          <img class="icons-images" src="../assets/images/doc-icons/accueil.png" alt="Accueil">
                        </div>
                        <div style="width: calc(100% - 50px)">
                          <h5>
                            <router-link to="/">
                              <b>{{OptionLangue[getLangage].titre_1_bloc}}</b>
                            </router-link>
                          </h5>
                          <p>{{OptionLangue[getLangage].description_1_bloc}}</p>
                        </div>
                      </div>

                      <div class="d-flex">
                        <div style="width : 50px; margin: 1rem;">
                          <img class="icons-images" src="../assets/images/doc-icons/bonsai.png" alt="Accueil">
                        </div>
                        <div style="width: calc(100% - 50px)">
                          <h5>
                            <router-link to="/plantes">
                              <b>{{OptionLangue[getLangage].titre_4_bloc}}</b>
                            </router-link>
                          </h5>
                          <p>{{OptionLangue[getLangage].description_4_bloc}}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="container" style="margin-bottom: 2rem;">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/0o6sUM8qQQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                      <div class="d-flex">
                        <div style="width : 50px; margin: 1rem;">
                          <img class="icons-images" src="../assets/images/doc-icons/agriculture.png" alt="Accueil">
                        </div>
                        <div style="width: calc(100% - 50px)">
                          <h5>
                            <router-link to="/techniques">
                              <b>{{OptionLangue[getLangage].titre_2_bloc}}</b>
                            </router-link>
                          </h5>
                          <p>{{OptionLangue[getLangage].description_2_bloc}}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                      <div class="d-flex">
                        <div style="width : 50px; margin: 1rem;">
                          <img class="icons-images" src="../assets/images/doc-icons/maps.png" alt="Accueil">
                        </div>
                        <div style="width: calc(100% - 50px)">
                          <h5>
                            <router-link to="/carte">
                              <b>{{OptionLangue[getLangage].titre_3_bloc}}</b>
                            </router-link>
                          </h5>
                          <p>{{OptionLangue[getLangage].description_3_bloc}}</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                      <div class="d-flex">
                        <div style="width : 50px; margin: 1rem;">
                          <img class="icons-images" src="../assets/images/doc-icons/profile.png" alt="Accueil">
                        </div>
                        <div style="width: calc(100% - 50px)">
                          <h5>
                            <router-link to="/user/login">
                              <b>{{OptionLangue[getLangage].titre_5_bloc}}</b>
                            </router-link>
                          </h5>
                          <p>{{OptionLangue[getLangage].description_5_bloc}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
import Header from "../components/Header"
import Techniques from '../service/Techniques'
import { mapGetters,mapActions} from 'vuex'
import Footer from "../components/Footer"
import langue from '../service/Multilangue.js'


export default {
    name:'DetailTechnique',
     components: {
      Header,
      Footer 
    },
    computed: {
       ...mapGetters('Langage',['getLangage']), 
      
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
          var langage = this.getLangage
          var nbr_list = 3
          Techniques.getAll(langage,nbr_list)
            .then((res)=>{
              this.AllTechnique2 = res.data
            })
      })
    },
    data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
         active6:'white!important',
        fontWeight6:'bolder!important',
        overlay:true,
        timeout: null,
        AllTechnique2:[],
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
         rechercheId:'#scrollId3',
         OptionLangue:langue,
         fr:'fr',
         mg:'mg',
      }
   },
    methods:{
      ...mapActions('Langage',['setLangage']),
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
        handleResize(){
            this.scrolly=window.scrollY
            if(this.scrolly>110){
                this.showup = true
            }else{
                this.showup = false
            }
        },
        changeLangue(){
            
            if(this.getLangage == 'mg'){
                this.setLangage(this.fr)
            }else{
                this.setLangage(this.mg)
            }
            var langage = this.getLangage
            var nbr_list = 3
            Techniques.getAll(langage,nbr_list)
            .then((res)=>{
              this.AllTechnique2 = res.data
            })
      }
   }
}
</script>

<style scoped>
  .doc-content{
    margin-top: 72px;
  }

  .icons-images{
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  .d-flex{
    margin-bottom: 2rem;
  }

  h5 a{
    color: #33648d;
  }
</style>
