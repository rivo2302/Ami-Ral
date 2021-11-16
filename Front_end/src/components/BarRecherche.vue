<template>
<form action="" @submit.prevent="HandleSearch2">
    <div class="recherche">
            <div class="container-fluid">
                <div class="row row-cols-lg-4 row-cols-4 row-cols-md-4 row-cols-sm-4">
                    <div class="col col-lg-1 col-sm-2 col-md-2 col-12">
                        <label for="searchValue" class="recherchep">{{OptionLangue[getLangage].rechercher}}:</label>
                    </div>
                    <div class="col-lg-9 col-sm-4 col-md-6 col-3 responsive2 inputresponsive">
                        <input type="text" v-model="searchValue" class="form-control bg-white mt-2" id="searchValue" value="">
                    </div>
                    <div class="col-lg-1 col-sm-3 col-md-2 col mt-lg-2 mt-sm-2  mt-md-2 pt-lg-0 pt-sm-0  pt-md-0 responseSelect responsive2 pt-2">
                        <select class="form-select form-select-md mb-3" v-model="typeSearch" aria-label=".form-select-lg example">
                            <option value=0>{{OptionLangue[getLangage].tout}}</option> <!-- tout:0,1:technique,region:2,plante:3 -->
                            <option value=1>{{OptionLangue[getLangage].technique}}</option>
                            <option value=2>{{OptionLangue[getLangage].region}}</option>
                            <option value=3>{{OptionLangue[getLangage].plante}}</option>
                        </select>
                    </div>
                    <div class="col col-lg-1 col-sm-2 col-md-2 mt-lg-2 mt-sm-2 mt-md-2  pt-lg-0 pt-sm-0  pt-md-0 responsive2 pt-2">
                        <button type="submit"  class="btn btn-success">{{OptionLangue[getLangage].rechercher}}</button>
                    </div>
                </div>
            </div>
        </div>
</form>
    
</template>
<script>
import langue from '../service/Multilangue.js'
import { mapGetters} from 'vuex'

export default {
    name:'BarRecherche',
    props:{
      
    },
    computed: {
      ...mapGetters('Langage',['getLangage'])
    },
    data:function(){
        return{
            searchValue:'',
            typeSearch:0,
            OptionLangue:langue
        }
    },
    methods:{
        HandleSearch2(){
            if(this.searchValue){
                var vm = this
                var name = this.$route.name
                var type = this.$route.params.type
                var value = this.$route.params.value
                if(name =='ResultatRecherche'){
                    if(parseInt(this.typeSearch) == parseInt(type) && value == this.searchValue){
                        return null  
                    }else{
                        this.$router.push({
                            name:'ResultatRecherche',
                            params: {
                                type:vm.typeSearch,
                                value:vm.searchValue
                            }
                        })
                    }
                }else{
                    this.$router.push({
                        name:'ResultatRecherche',
                        params: {
                            type:vm.typeSearch,
                            value:vm.searchValue
                        }
                    })
                }
                
            }
        }

    }
}
</script>

<style>
.recherche{
  width: 100%;
  background: rgb(182, 182, 182);
  background-size: cover;
  position: relative;
  padding-top: 70px
}
.recherchep{
    margin-top: 15px;
    color: black !important;
    font-size: 16px
}
.responseSelect{
    margin-left: -20px
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
   .responsive2{
       margin-top: -40px
   }
   .inputresponsive{
       margin-left: 100px;

   }
}
</style>
