<template>
    <div class="container-body">
       <div class="container-fluid px-0">
           <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1">
               <div class="col-lg-2 col-sm-2 col-md-2 col-2 bg-color bg-dark tabs" >
                   <Tabs/>
               </div>
               <div class="col-lg-10 col-sm-10 col-md-10 col-10 px-0">
                   <div class="header fixed-top">
                      <HeaderAdmin/>
                   </div>
                   <div class="body">
                       <form action="" @submit.prevent="addTechnique()" style="margin-bottom:10vh">
                           <div class="row mt-2  d-flex justify-content-center row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 " style="height:80vh">
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                    
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1f" class="form-label">Nom en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1f" v-model="technique.nom_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1q" class="form-label">Description en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1q"  v-model="technique.description_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1zz" class="form-label">Materiel en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1zz" v-model="technique.materiel_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1ss" class="form-label">Avantage en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1ss" v-model="technique.avantage_fr" required>
                                    </div>  
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Information en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.info_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Productivité en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.productivite_fr" required>
                                    </div> 
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Adaptation en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.adaptation_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Mitigation en Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.mitigation_fr" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1oo" class="form-label">Couverture*</label>
                                        <b-form-file
                                        v-model="technique.couverture"
                                        class="form-control"
                                        :state="Boolean(technique.couverture)"
                                        placeholder="Choisir un fichier image ici..."
                                        ></b-form-file>
                                    </div> 
                                    
                                </div>
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput11" class="form-label">Nom en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput11" v-model="technique.nom_mg" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1s" class="form-label">Description en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1s" v-model="technique.description_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1zzz" class="form-label">Materiel en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1zzz" v-model="technique.materiel_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1aa" class="form-label">Avantage en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1a" v-model="technique.avantage_mg" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Information en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.info_mg" required>
                                    </div>
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Productivité en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.productivite_mg" required>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Adaptation en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.adaptation_mg" required>
                                    </div>  
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Mitigation en Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.mitigation_mg" required>
                                    </div> 
                                     <div class="mb-3">
                                        <label for="exampleFormControlInput1pp" class="form-label">Source*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1pp" v-model="technique.source" required>
                                    </div> 
                                     
                                    <div class="mb-3 d-flex justify-content-center">
                                        <button type="submit" class="btn btn-success"  data-bs-target="#staticBackdrop">Ajouter</button>
                                        <button type="submit" class="btn btn-danger mx-4">Annuler</button>
                                    </div>
                                </div>
                            </div>
                       </form>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import HeaderAdmin from "../components/HeaderAdmin"
import Tabs from "../components/Tabs"
export default {
    name:'AddTechnique',
    components: {
      HeaderAdmin,
      Tabs
    },
     data:function() {
      return{
        technique:{
            nom_mg:'',
            nom_fr:'',
            description_mg:'',
            description_fr:'',
            info_mg:'',
            info_fr:'',
            avantage_fr:'',
            avantage_mg:'',
            materiel_mg:'',
            materiel_fr:'',
            mitigation_mg:'',
            mitigation_fr:'',
            productivite_mg:'',
            productivite_fr:'',
            source:'',
            couverture:null,
        },
        baseUrl:'https://api.tanimboly.org'
      }
   },
    computed: {
     
    },
    created(){
      
    },
    mounted() {
      
    },
    destroyed() {
      
    },
    methods: {
       addTechnique(){
           const FormData = require('form-data');
           const axios = require ( 'axios')
           let formData = new FormData();
           for ( let key in this.technique ) {
            formData.append(key, this.technique[key]);
          }
          axios.post('https://api.tanimboly.org/technique/insertionTechnique',formData)
          .then((res)=>{
              console.log(res.data)
          })
          .catch((error)=>{
              console.log(error)
          })
       }
    }
}
</script>
<style scoped>
.container-body{
    display:flex;
}
.tabs{
    
    margin-top: 10vh;
    height: 140vh;
    padding-bottom: 0px !important;
}
.body{
    margin-top: 15vh;
    height: 130vh;
}
.body label{
    font-size: 16px;
    color: white !important;
    
}
.red{
    text-align: center;
    color:red;
    margin-top: 0%;
}
</style>

