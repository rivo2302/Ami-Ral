<template>
 <div>
                      <div class="container-fluid mx-0 px-0 my-2">
                        <div class="row row-cols-lg-2 row-cols-2 row-cols-md-2 row-cols-sm-2">
                            <div class="col-lg-3 col-sm-2 col-md-2 col-2">
                                <img src="../assets/images/logo-sm.png" alt="" width="50px" height="50px" class="mx-3">
                            </div>
                            <div class="col-lg-8 col-sm-10 col-md-10 col-10 mt-3">
                                <h6 style="color:white">Tanimboly Admin</h6>
                            </div>
                        </div>
                        
                      </div>
                      <div class="container-fluid mx-0 px-0 my-1">
                        <div class="row row-cols-lg-12 row-cols-12 row-cols-md-12 row-cols-sm-12">
                           <span style="background-color:#888;height:2px"></span>
                        </div>
                      </div>
                      <div class="container-fluid mx-0 px-0 my-0">
                        <div class="row row-cols-lg-2 row-cols-2 row-cols-md-2 row-cols-sm-2">
                            <div class="col-lg-11 col-sm-11 col-md-11 col-11 mt-3 mx-4 pt-0 pb-0">
                                <h6 style="color:white"><i class="fas fa-user-circle" style="font-size:27px;color:white"></i> {{nom}}</h6>
                            </div>
                        </div>
                        
                      </div>
                      <div class="container-fluid mx-0 px-0 my-1">
                        <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1">
                           <span style="background-color:#888;height:2px"></span>
                        </div>
                      </div>
                     <div class="container-fluid mx-1 px-2 my-2">
                       <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1">
                           <div class="col-lg-12 col-sm-12 col-md-12 col-12">
                             <div class="input-group">
                                <input class="form-control border-end-0 border " v-model="searchValue" type="search" placeholder="Rechercher..." value="" id="example-search-input">
                                <span class="input-group-append" style="margin-left:-42px">
                                    <button class="btn btn-outline-secondary bg-white border-bottom-0 border  ms-n0" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container-fluid mx-0 px-0 my-1">
                        <div class="row row-cols-lg-1 row-cols-1 row-cols-md-1 row-cols-sm-1">
                           <span style="background-color:#888;height:2px"></span>
                        </div>
                      </div>
                      <div class="container-fluid mx-1 px-0 my-1">
                          <div class="accordion accordion-flush" id="accordionFlushExample">
                              <div class="accordion-item my-4">
                                  <div class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button  collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                      Ajouter
                                    </button>
                                  </div>
                                
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                    <ul class="head" aria-labelledby="navbarDropdown">
                                     <li><router-link class="dropdown-item" to="/admin/technique/add"><i class="fas fa-cogs"></i> Technique</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/climat/add"><i class="fas fa-cloud-sun-rain"></i> Climat</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/plante/add"><i class="fas fa-tree"></i> Plante</router-link></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item my-4">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Afficher
                                  </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body"> 
                                    <ul class="head" aria-labelledby="navbarDropdown">
                                      <li><router-link class="dropdown-item" to="/admin/technique/list"><i class="fas fa-cogs"></i> Technique</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/climat/list"><i class="fas fa-cloud-sun-rain"></i> Climat</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/plante/list"><i class="fas fa-tree"></i> Plante</router-link></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="accordion-item my-4">
                                <h2 class="accordion-header" id="flush-headingThree">
                                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Ajout d'image
                                  </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                  <div class="accordion-body">
                                     <ul class="head" aria-labelledby="navbarDropdown">
                                      <li><router-link class="dropdown-item" to="/" href="#"><i class="fas fa-tree"></i> Plante</router-link></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                  </div> 
</template>
<script>
import Vue from 'vue'
export default {
    name:'Tabs',
     components: {
       
    },
    props:{
        
    },
    created(){
      if(Vue.$cookies.get('admin')){
         this.nom =Vue.$cookies.get('admin').appelation
      }
      
    },
    data:function() {
        return{
            searchValue:'',
            nom:'Nom admin'
        }
    },
    methods:{
       
    }
}
</script>

<style>

.head{
  list-style: none;
  margin-left: -30px
}
.head li a{
  color: rgb(37, 141, 84);
  font-size: 16px
}
@media only screen and (min-width: 1200px) {
 
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
 
}
@media only screen and (min-width: 767px) and (max-width: 991px) {
 
}
@media only screen and (max-width: 767px) {
  
}
@media only screen and (max-width: 479px) {

}
</style>
