<template>
    <div class="contact  pb-5  pt-md-3">
        <div class="container" id="contact">
          <form action="" @submit.prevent="handleEmail()">
            <div class="row row-cols-lg-1  justify-content-lg-center">
              <div class="col col-lg-10 text-justify my-lg-10 pl-4">
                    <div class="row align-items-center pt-3 ml-2">
                      <div class="col col-lg-12 text-justify connresponive">
                        <h2>{{OptionLangue[getLangage].contacter}}</h2>
                      </div>
                    </div>
                    <div class="row align-items-center pt-1">
                      <div class="col col-lg-12 text-center my-lg-10">
                        <span class="under2"></span>
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3 mt-3">
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="nom">{{OptionLangue[getLangage].nom}}*</label>
                        <input type="text" v-model="bodyEmail.nom"  class="form-control bg-white mt-2" id="nom" value="">
                      </div>
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="prenom">{{OptionLangue[getLangage].prenom}}*</label>
                        <input type="text" v-model="bodyEmail.prenom" class="form-control bg-white mt-2" id="prenom" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="email">{{OptionLangue[getLangage].email}}*</label>
                        <input type="email" v-model="bodyEmail.email"  class="form-control bg-white mt-2" id="email" value="">
                      </div>
                      <div class="col-6 col-lg-6 col-sm-6 col-md-6">
                        <label for="telephone">{{OptionLangue[getLangage].telephone}}</label>
                         <input type="telephone" v-model="bodyEmail.telephone" class="form-control bg-white mt-2" id="telephone" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="objet">{{OptionLangue[getLangage].Objet}}*</label>
                        <input type="text" v-model="bodyEmail.objet"  class="form-control bg-white mt-2" id="objet" value="">
                      </div>
                    </div>
                    <div class="row justify-content-md-center pt-3">

                      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label for="message">{{OptionLangue[getLangage].message}}</label>
                        <input type="textarea" v-model="bodyEmail.message" class="form-control bg-white mt-2 pb-5" id="message" value="">
                      </div>
                      <transition name="fade">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-3" v-if="status">     
                          <p :style="{color:statusColor}">{{textStatus}} <i :class="classStatus"></i></p>
                        </div>
                      </transition>
                      <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">     
                        <button type="submit" class="btn btn-success">{{OptionLangue[getLangage].envoyer}}</button>
                      </div>
                    </div>
              </div>
            </div>
          </form>
        </div>
      </div>
</template>
<script>
import baseUrl from '../service/baseUrl'
import langue from '../service/Multilangue.js'
import { mapGetters} from 'vuex'

const axios = require('axios');

export default {
    name:'Contact',
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
   data:function() {
      return{
          bodyEmail:{
              nom:'',
              prenom:'',
              email:'',
              telephone:'',
              message:'',
              objet:'',
          },
          status:false,
          textStatus:'',
          classStatus:'',
          statusColor:'white',
          OptionLangue:langue
      }
   },
    
    methods: {
        handleEmail(){
          console.log(this.bodyEmail)
            axios.post(baseUrl + '/div/contacter ',this.bodyEmail)
            .then((res)=>{
                this.classStatus="fas fa-check-circle"
                this.textStatus= res.data
                this.statusColor = 'green'
                this.bodyEmail.message =''
                this.bodyEmail.objet =''
                this.status = true
                let vm = this
                setTimeout(function(){
                  vm.status = false
                },5000)
            })
            .catch(()=>{
               
                this.classStatus="fas fa-times"
                this.textStatus= 'Envoie erreur'
                this.statusColor = 'red'
                 this.status = true
            })
        }
    }
}
</script>
 <style>
/*conctact*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.contact{
  width: 100%;
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.contact label{
  font-size: 16px;
  color: white
}
/*conctact*/
.contact{
  background-size: cover;
  background-color: rgb(15, 15, 17);
  position: relative;
  padding: 0;

}
.contact label{
  font-size: 16px;
  color: white
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
 
}
@media only screen and (max-width: 769px) {
 
}
@media only screen and (max-width: 479px) {

}
 </style>
 