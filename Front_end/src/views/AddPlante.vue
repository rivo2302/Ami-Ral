<template>
    <div>
       <div class="container-fluid px-0">
           <div class="row row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1">
               <div class="col-lg-2 col-sm-2 col-md-2 col-2 bg-color bg-dark">
                   <Tabs/>
               </div>
               <div class="col-lg-10 col-sm-10 col-md-10 col-10 px-0">
                   <div class="header">
                      <HeaderAdmin/>
                   </div>
                   <div class="body">
                       <form action="">
                           <div class="row mt-2  d-flex justify-content-center row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 " style="height:80vh">
                                <div class="col-lg-3 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                   <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Nom scientifique*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Groupe">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Nom Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nom Français">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Nom Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nom Malagasy">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Description Malagasy*</label>
                                        <input type="textarea" class="form-control" id="exampleFormControlInput1" placeholder="Description Malagasy">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Description Français*</label>
                                        <input type="textarea" class="form-control" id="exampleFormControlInput1" placeholder="Description Français">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Regne*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Embranchement">
                                    </div> 
                                    
                                </div>
                                <div class="col-lg-3 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                   <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Embranchement*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Groupe">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Classe*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Classe">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Ordre*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ordre">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Famille*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Famille">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Genre*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Genre">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Espece*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Espece">
                                    </div> 
                                    
                                </div>
                                <div class="col-lg-3 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tige*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tige">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Racine*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Racine">
                                    </div> 
                                    <div class="mb-3"> 
                                        <label for="exampleFormControlInput1" class="form-label">Fruit*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Fruit">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Feuille*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Feuille">
                                    </div> 
                                    <div class="mb-3 d-flex justify-content-center">
                                        <button type="button" class="btn btn-success">Ajouter</button>
                                        <button type="button" class="btn btn-danger mx-4">Annuler</button>
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
    name:'Admin',
    components: {
      HeaderAdmin,
      Tabs
    },
     data:function() {
      return{
        
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
       
    }
}
</script>
<style scoped>
.body label{
    font-size: 16px;
    color: white !important
}
.red{
    text-align: center;
    color:red;
    margin-top: 0%;
}
</style>

