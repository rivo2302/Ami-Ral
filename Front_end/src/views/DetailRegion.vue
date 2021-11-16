<template>
    <div>
        <transition name="fade">
            <div v-if="!overlay">
                <header id="header-default"  >
                    <Header :bgcolor="bgcolor" :active3="active" :fontWeight3="fontWeight3" :set="changeLangue"/>
                </header>
                <Details :key="updateDetail" />
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
import Details from "../components/DetailRegion"
//import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters, mapActions } from 'vuex'

export default {
    name:'DetailRegion',
    components: {
      Header,
      Details,
    },
     data:function() {
      return{
        bgcolor :'rgb(37, 141, 84)',
        nameList:'Boheny',
        active:'white!important',
        fontWeight3:'bolder',
        scrollId:"#scrollId3",
        scrolly: 0,
        showup:false,
        rechercheId:'#scrollId3',
        overlay:true,
        timeout: null,
        AllPlante2:[],
        AllTechnique2:[],
        nbr_list:5,
        nbr_list2:5,
        NameRoute:3,
        updateDetail: false,
        fr:'fr',
        mg:'mg',
      }
   },
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
    created(){
      this.setTimeout(() => {
          this.overlay = false
      })
    },
    mounted() {
      window.addEventListener('scroll', this.handleResize);
      this.handleResize()
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
                this.setLangage(this.fr);
            }else{
                this.setLangage(this.mg)
            }

            this.updateDetail = !this.updateDetail;
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
</style>