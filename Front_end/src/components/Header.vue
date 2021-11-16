<template>
  <nav  class="navbar fixed-top shadow navbar-expand-lg bg-fade-up navbar-light align-items-center px-0" id="bgcolor" :style="{ background:bgcolor,transition:'all 0.5s'}">
    <div class="container-fluid px-0" id="header-default">
        <router-link class="navbar-brand navbar-left mt-4" to="/">
            <img src="../assets/images/logo-sm.png" alt="" width="34px" height="35px" class="mx-3">
            <p style="font-size:11px;font-weight:bold" class="mx-0">TANIMBOLY</p>
        </router-link>
        <button class="navbar-toggler bg-white botton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-center px-0">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-center navbar-nav-scroll " style="bs-scroll-height: 100px;">
                <li class="nav-item px-0">
                    <router-link class="nav-link" :style="{color:active1,fontWeight:fontWeight1}" aria-current="page" to="/">{{OptionLangue[getLangage].accueil}}</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link to="/techniques" :style="{color:active2,fontWeight:fontWeight2}" class="nav-link" >{{OptionLangue[getLangage].technique}}</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link to="/climat" :style="{color:active5,fontWeight:fontWeight5}" class="nav-link" >{{OptionLangue[getLangage].climat}}</router-link>
                </li>
                <li class="nav-item px-0">
                    <router-link class="nav-link" :style="{color:active3,fontWeight:fontWeight3}" to="/carte">{{OptionLangue[getLangage].carte}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link"  :style="{color:active4,fontWeight:fontWeight4}"  to="/plantes">{{OptionLangue[getLangage].plante}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link"  :style="{color:active6,fontWeight:fontWeight6}"  to="/documentation">{{OptionLangue[getLangage].doc}}</router-link>
                </li>
                
            </ul>
            <ul class="navbar-nav me-auto d-flex langue">
                <div class="header__top__right__language">
                    <img :src="src1" v-if="getLangage=='fr'? true :false" alt="" width="30px" height="30px" class="round"/>
                    <img :src="src2" v-else alt="" width="30px" height="30px" class="round"/>
                    <div v-if="getLangage=='fr'? true :false">Français</div>
                    <div v-else>Malagasy</div>
                    <span class="arrow_carrot-down"></span>
                    <ul class="pt-2">
                        <li class="d-flex px-2 pt-1" @click="set()" v-if="getLangage=='fr'? true :false"><img  class="round" :src="src2" alt=""  width="30px" height="30px"/><a  class="mg ">Malagasy </a></li>
                        <li class="d-flex px-2 pt-1" @click="set()" v-else><img :src="src1" alt="" width="30px"  class="round" height="30px"/><a  class="mg ">Français</a></li>
                    </ul>
                </div>
            </ul>
             <ul class="navbar-nav me-auto mb-0 mb-lg-0 navbar-right">
                 
                <li class="nav-item mr-4"> 
                    <router-link to="/user/login" style="border-radius:20px"  type="button" class="btn btn-outline-light">{{OptionLangue[getLangage].login}}</router-link>
                </li>
               
            </ul>
        </div>
        <div class="collapse navcollaspse pr-4" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto d-flex langue2">
                <div class="header__top__right__language">
                    <img :src="src1" v-if="getLangage=='fr'? true :false" alt="" width="30px" height="30px" class="round"/>
                    <img :src="src2" v-else alt="" width="30px" height="30px" class="round" />
                    <div v-if="getLangage=='fr'? true :false">Français</div>
                    <div v-else>Malagasy</div>
                    <span class="arrow_carrot-down"></span>
                    <ul class="pt-2">
                        <li class="d-flex px-2 pt-1" @click="set()" v-if="getLangage=='fr'? true :false"><img :src="src2" alt=""  class="round" width="30px" height="30px"/><a  class="mg ">Malagasy </a></li>
                        <li class="d-flex px-2 pt-1" @click="set()" v-else><img :src="src1" alt=""  class="round" width="30px" height="30px"/><a  class="mg ">Français</a></li>
                    </ul>
                </div>
            </ul>
            <ul class="navbar-nav2 px-0" >
                <li class="nav-item">
                     <router-link class="nav-link" :style="{color:active1,fontWeight:fontWeight1}" aria-current="page" to="/">{{OptionLangue[getLangage].accueil}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/techniques" :style="{color:active2,fontWeight:fontWeight2}" class="nav-link" >{{OptionLangue[getLangage].technique}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/climat" :style="{color:active5,fontWeight:fontWeight5}" class="nav-link" >{{OptionLangue[getLangage].climat}}</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :style="{color:active3,fontWeight:fontWeight3}" to="/carte">{{OptionLangue[getLangage].carte}}</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link class="nav-link "  :style="{color:active4,fontWeight:fontWeight4}"  to="/plantes">{{OptionLangue[getLangage].plante}}</router-link>
                </li>
                <li class="nav-item mr-5">
                    <router-link class="nav-link "  :style="{color:active6,fontWeight:fontWeight6}"  to="/documentation">{{OptionLangue[getLangage].doc}}</router-link>
                </li>
            </ul>
            <ul class="navbar-nav3">
                <router-link to="/user/login" style="border-radius:20px"  type="button" class="btn btn-outline-light">{{OptionLangue[getLangage].login}}</router-link>
            </ul>
            
            
        </div>
       
    </div>
    </nav>

</template>

<script>
import langue from '../service/Multilangue.js'
import { toDataUrl } from '../helper/images.js'
import { mapGetters,mapActions} from 'vuex'

  export default {
    name: 'Header',
    props:{
      bgcolor:{
          type:String,
          default:()=>'transparent'
      },
      active1:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      active2:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
       active3:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
       active4:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
     active5:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      active6:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      active7:{
          type:String,
          default:()=>'rgb(206, 195, 195)'
      },
      fontWeight1:{
          type:String,
          default:()=>''
      },
      fontWeight2:{
          type:String,
          default:()=>''
      },
       fontWeight3:{
          type:String,
          default:()=>''
      },
       fontWeight4:{
          type:String,
          default:()=>''
      },
      fontWeight5:{
          type:String,
          default:()=>''
      },
      fontWeight6:{
          type:String,
          default:()=>''
      },
      fontWeight7:{
          type:String,
          default:()=>''
      },
      set:{
          type:Function,
          default:()=>{}
      }
    },
    components: {
    },
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
    mounted(){
        const images = document.querySelectorAll("img");
        for(let i = 0; i < images.length; i++){
            toDataUrl(images[i].getAttribute("src"), function(res){
                images[i].setAttribute("src", res);
            })
        }
    },
    data:function() {
      return{
          OptionLangue:langue,
          imageMg:require('../assets/images/malagasy.png'),
          imageFr:require('../assets/images/français.png'),
          src1:require('../assets/images/français.png'),
          src2:require('../assets/images/malagasy.png'),
          nbr_list:5
      }
   },
   
  methods: {
      ...mapActions('Technique',['getAllTechnique']),
      getAll(){
        var langage = this.getLangage
        var nbr_list = this.nbr_list
        let techniques = this.getAllTechnique({langage,nbr_list})
        return techniques
    },
    
    }
  }
</script>

<style scoped>
.round{
    border-radius: 50% !important
}
#bgcolor{
    box-shadow: rgb(0, 0, 0,0.9);

}
.navbar{
    height: 55px
}
.navbar-nav.navbar-center li a{
    text-transform: uppercase;
    font-size: 14px  !important;
    font-style: italic;
}

.navbar-nav.navbar-center li .nav-link:hover{
    color: rgb(255, 255, 255)!important
}
 .navbar-right i{
    font-size: 20px;
    cursor: pointer;
    color: rgb(219, 219, 219)
}
.navbar-right li{
    margin-left: 0px;
    color: #888  !important
}
.navbar-right i:hover,.navbar-left:hover{
    color: rgb(255, 255, 255)
}
.navbar-left{
    margin-left: 20px !important;
    color: rgb(219, 219, 219) !important
}
.active{
    color:white !important;
    font-weight: bold
}
.navcollaspse{
    padding-top: 10px;
    flex-direction: column !important

}
/* langue**/
.langue{
    position: absolute;
    left: 80%;
}
.header__top__right__language {
	position: relative;
	display: inline-block;
	margin-right: 40px;
	cursor: pointer;
}

.header__top__right__language:hover ul {
	top: 25px;
	opacity: 1;
	visibility: visible;
}

.header__top__right__language:after {
	position: absolute;
	right: -21px;
	top: 1px;
	height: 20px;
	width: 1px;
	background: #000000;
	opacity: 0.1;
	content: "";
}
.header__top__right__language .mg{
    margin-left: -15px !important
}
.header__top__right__language img {
	margin-right: 6px;
}

.header__top__right__language div {
	font-size: 14px;
	color: white;
	display: inline-block;
	margin-right: 4px;
}

.header__top__right__language span {
	font-size: 14px;
	color: rgb(37, 141, 84);
	position: relative;
	top: 2px;
}

.header__top__right__language ul {
	background: rgb(37, 141, 84);
	width: 100px;
	text-align: left;
	padding: 5px 0;
	position: absolute;
	left: 0;
	top: 43px;
	z-index: 9;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all, 0.3s;
	-moz-transition: all, 0.3s;
	-ms-transition: all, 0.3s;
	-o-transition: all, 0.3s;
	transition: all, 0.3s;
}

.header__top__right__language ul li {
	list-style: none;
}

.header__top__right__language ul li a {
	font-size: 14px;
	color: #ffffff;
	padding: 5px 10px;
}

@media (min-width: 1200px) {

    .navbar-nav.navbar-center {
        position: absolute;
        left: 42%;
        transform: translatex(-50%);
    }
    .navbar-nav.navbar-center li {
      margin-left: 10px
    }
    .navbar-left{
        margin-left: 10px
    }
    .navbar-right {
        margin-left: 88% !important
    }
    .navcollaspse{
        display: none
    }
}
.navcollaspse{
    position: absolute;
    width: 100%;
    left: 0px;
    background-color: rgb(37, 141, 84);
    top:60px;
}
.navbar-nav2{
    list-style: none;
    display: flex;
     align-items: center;
    flex-direction: column !important
}
.navbar-nav3{
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: row
}
.navbar-nav3 i{
    font-size: 30px !important;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 40px;
    color: rgb(199, 199, 199)
}
.navbar-nav3 i:hover{
    color: white
}
.navbar-nav2 a{
    text-decoration: none !important;
    color: rgb(199, 199, 199)
}
.navbar-nav2 a:hover{
    color: white
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
     .navbar-nav.navbar-center {
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
    }
    .navcollaspse{
        display: none
    }
    .navbar-right {
        margin-left: 90% !important
    }
    .navbar-nav3{
        padding-left: 49% !important;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
     .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 0% !important;
        flex-direction: row
    }
    .navbar-nav3{
        list-style: none;
        align-items: center;
        display: flex;
        padding-left: 42% !important;
        flex-direction: row
    }
     .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
    .navcollaspse{
        top:55px;
    }
    .navbar-nav3{
         margin-top: -20px;
    
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
        margin-left: -30px!important
    }
     .langue2{
        position: absolute;
        left:52%;
        top: -6vh
    }
}
@media only screen and (max-width: 767px) {
    .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 15% !important;
        flex-direction: row
    }
    .navbar-nav3{
        list-style: none;
        align-items: center;
        display: flex;
        padding-left: 36% !important;
        flex-direction: row
    }
    .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
    .navcollaspse{
        top:55px;
    }
    .navbar-nav3{
         margin-top: -20px
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
       text-align: center!important;
       margin-right: 20%!important
    }
    .langue2{
        position: absolute;
        left:52%;
        top: -6vh
    }
    

}
@media only screen and (max-width: 479px) {
    .botton{
        margin-top: -39px !important;
        margin-right: 10px;
    }
    .navbar-left{
        margin-top: -18px !important
    }
     .navbar-nav2{
        list-style: none;
        display: flex;
        padding-left: 30% !important;
        flex-direction: row
    }
    .navcollaspse{
        top:55px;
    }
     .navbar-nav3{
         margin-top: -20px;
         padding-left: 38% !important;
     }
    .navbar-nav3 i{
        font-size: 20px!important;
    }
    .navbar-nav2{
        margin-left: -30px!important
    }
    .langue2{
        position: absolute;
        left:52%;
        top: -6vh
    }
}
</style>
