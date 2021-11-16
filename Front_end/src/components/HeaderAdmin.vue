                    <template>
                      <nav class="navbar navbar-expand-lg navbar-light header shadow">
                        <div class="container-fluid">
                          <router-link class="navbar-brand mt-3" to="/">
                              <img src="../assets/images/logo-sm.png" alt="" width="34px" height="35px" class="mx-3">
                              <p style="font-size:11px;font-weight:bold;color: rgb(255, 255, 255)" class="mx-0">TANIMBOLY</p>
                          </router-link>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:70px">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item">
                                <router-link  to="/" class="nav-link" aria-current="page" href="#">Accueil</router-link>
                              </li>
                              <li class="nav-item">
                                <router-link  to="/admin/home" class="nav-link active" href="#">Tableau de board</router-link>
                              </li>
                              <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Ajouter
                                </a>
                                <ul class="dropdown-menu shadow bg-dark" aria-labelledby="navbarDropdown">
                                  <li><router-link class="dropdown-item" to="/admin/technique/add" href="#"><i class="fas fa-cogs"></i> Technique</router-link></li>
                                  <li><router-link class="dropdown-item" to="/admin/climat/add" href="#"><i class="fas fa-cloud-sun-rain"></i> Climat</router-link></li>
                                  <li><router-link class="dropdown-item" to="/admin/plante/add" href="#"><i class="fas fa-tree"></i> Plante</router-link></li>
                                </ul>
                              </li>
                              <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Listes
                                </a>
                                <ul class="dropdown-menu shadow bg-dark" aria-labelledby="navbarDropdown">
                                  <li><router-link class="dropdown-item" to="/admin/technique/list"><i class="fas fa-cogs"></i> Technique</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/climat/list"><i class="fas fa-cloud-sun-rain"></i> Climat</router-link></li>
                                      <li><router-link class="dropdown-item" to="/admin/plante/list"><i class="fas fa-tree"></i> Plante</router-link></li>
                                      
                                </ul>
                              </li>
                            </ul>
                            <form class="d-flex" style="margin-right:40px !important">
                              <input class="form-control me-1" type="search" placeholder="Rechercher..." aria-label="Search">
                              <button class="btn btn-light" type="submit">Rechercher</button>
                            </form>
                            <li class="nav-item dropdown mb-4 mr-4" style="padding-right:50px !important">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  <em style="color:white;font-weigth:bold"><i class="fa fa-user"></i> Vulgarisateur</em>
                                </a>
                                <ul class="dropdown-menu shadow bg-dark" style="width:40px!important" aria-labelledby="navbarDropdown">
                                   <li @click="logout()">
                                      <div class="mx-3" >
                                          <i class="fas fa-sign-out-alt" style="font-size:18px" > Deconnexion</i>
                                      </div>
                                    </li>
                                </ul>
                              </li>
                          </div>
                        </div>
                    </nav>
                  </template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "HeaderAdmin",
  props: {},
  methods:{
    ...mapActions('admins',['logout']),
  }
};
</script>

<style>
.dropdown-menu i,
a ,.dropdown-item {
  color: white;
}
.bg-color {
  height: 100vh;
}
.dropdown-menu li:hover i {
  color: black !important;
}

.nav-link{
  color: rgb(206, 206, 206) !important;
}
.nav-link:hover {
  color: white !important;
}
.active {
  color: white !important;
  font-weight: bolder;
}
.header {
  background-color: rgb(37, 141, 84);
  height: 10vh;
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
