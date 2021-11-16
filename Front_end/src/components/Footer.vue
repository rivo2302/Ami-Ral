<template>
    <div class="footer">
        <div class="container pt-1 px-0">
           <div class="row row-cols-lg-1  justify-content-lg-center">
              <div class="col col-lg-12 text-justify my-lg-10 pl-4 mt-0">
                <div class="row align-items-center pt-0">
                  <div class="col-12  col-sm-6 col-md-3 col-lg-3 text-justify mt-0 px-lg-5 px-3 pt-2 pt-lg-0">
                    <img src="../assets/images/logo-lg.png"  alt="" width="70px" height="70px" class="mx-3">
                    <p class="mt-2" style="font-size:12px;font-weight:bolder">TANIMBOLY</p>
                  </div>
                  <div class="col-9 px-0 col-sm-6 col-md-3 col-lg-3 text-justify pt-0 pt-md-5 pt-sm-5 pt-lg-0 ">
                    <p class="px-3 pt-5 my-2 my-md-2 my-sm-4 my-lg-3 low px-0">{{OptionLangue[getLangage].technique}}</p>
                    <ul class="text-justify my-3">
                      <li v-for="(item,index) in items" :key="index">
                        <router-link :to="{name:'DetailTechnique',params:{id:item.id_technique}}" v-if="item.nom_fr==undefined || item.nom_fr=='null' ? false:true" style="text-decoration:none;color:rgb(110, 110, 110)">{{item.nom_fr}}</router-link>
                        <router-link :to="{name:'DetailTechnique',params:{id:item.id_technique}}" v-else style="text-decoration:none;color:rgb(110, 110, 110)">{{item.nom_mg}}</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-12 px-0 col-sm-6 col-md-3 col-lg-3 text-justify">
                    <p class="px-3">{{OptionLangue[getLangage].liens}}</p>
                    <ul>
                      <li><router-link to="/user/login" style="text-decoration:none">{{OptionLangue[getLangage].a_propos}}</router-link></li>
                      <li><a :href="rechercheId">{{OptionLangue[getLangage].rechercher}}</a></li>
                    </ul>
                  </div>
                  <div class="col-12 col-sm-6 col-md-3 col-lg-3 text-justify">
                    <p class="px-0 pt-0 pt-md-5 pt-sm-5 pt-lg-5">{{OptionLangue[getLangage].nous_contacter}}</p>
                    <ul class="px-md-2 px-lg-2 px-sm-2 px-3">
                      <li><a href="#" >Télephone : +261 34 09 666 81</a></li>
                      <li><a href="#" >Facebook : TanimbolyOrg</a></li>
                      <li><a href="#" >Twitter : tanimboly</a></li>
                      <li><a href="#" >Linkedin : Tanimboly.org</a></li>
                    </ul>
                  </div>
                </div>    
              </div> 
            </div> 
            <div class="row row-cols-lg-1  justify-content-lg-center text-center">
              <div class="col-12 col-lg-12 col-md-12 mt-5">
                <p class="p3  text-center">{{OptionLangue[getLangage].copyright}}</p>
              </div> 
            </div> 
        </div> 
        <transition name="fade">
          <div class="up" v-if="showup">
            <a :href="scrollId"><i class="fas fa-long-arrow-alt-up"></i></a>
          </div>
      </transition>
      </div>
</template>
<script>
import langue from '../service/Multilangue.js'
import { mapGetters} from 'vuex'
export default {
    name:'Footer',
    props:{
      items:{
        type:Array,
        default:()=>[]
      },
      showup:{
        type:Boolean,
        default:()=>false
      },
      scrollId:{
        type:String,
        default:()=>'#'
      },
      rechercheId:{
        type:String,
        default:()=>'#'
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
}
</script>

<style>
/* footer*/

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.up{
   text-align: center;
   display: block;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: rgb(37, 141, 84);
   position: fixed;
   top:90%;
   left: 95%;
}
.up i{
  font-size:30px ;
  text-align: center;
  margin-left: 0px;
  margin-top: 5px;
  color: rgb(243, 243, 243)
}
.footer{
  width: 100%;
  padding-left: 15px!important;
  background-size: cover;
  background-color: rgb(0, 0, 0);
  position: relative;
  padding: 0;
}
.footer ul{
  list-style: none;
}
.footer p{
  color: white;
  margin-left: 16px
}
.footer li{
  color: rgb(110, 110, 110)
}
.footer li:hover{
   text-decoration: underline
}
.footer .p3{
  font-size: 13px
}
.footer a{
  text-decoration: none;
  color: rgb(110, 110, 110);
}
@media only screen and (min-width: 1200px) {
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {

   .up{
   top:90%;
   left: 92%;
  }
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
  .up{
   top:88%;
   left: 90%;
  }
}
@media only screen and (max-width: 769px) {
 
  .up{
   top:90% !important;;
   left: 87%;
  }
  
}
@media only screen and (max-width: 479px) {
  
  .up{

   top:90%;
   left: 85%;
  }

}
</style>
