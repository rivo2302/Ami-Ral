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
                       <h4 class="red"><i class="fas fa-exclamation-triangle"></i>En cours de developpement<i class="fas fa-exclamation-triangle"></i></h4>
                       <form action="">
                           <div class="row mt-2  d-flex justify-content-center row-cols-lg-2 row-cols-1 row-cols-md-1 row-cols-sm-1 " style="height:80vh">
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                   <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Nom*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Groupe">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Description Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nom Français">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Description Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nom Malagasy">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Type de sol Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Precipitation">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Type de sol Malagasy*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Vent">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Structure Français*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nebulosité">
                                    </div> 
                                    
                                </div>
                                <div class="col-lg-4 pt-4 col-sm-2 col-md-2 col-2 bg-dark">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Structure Malagas*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lumière">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Temperature*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Temperature">
                                    </div> 
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Image*</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" >
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
    name:'AddRegion',
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

