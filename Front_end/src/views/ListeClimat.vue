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
                   <div class="body bg-dark">
                      <b-table large :bordered="true" hover class="mt-2" style="text-align:center;color:white"
                        :dark="dark"
                        :fields="fields" id="my-table"
                        :items="items"
                        :per-page="perpage"
                        :current-page="currentPage" responsive
                        >
                            <template #thead-top>
                                <b-tr>
                                    <b-th  colspan="8" border="none" variant="light">
                                    <span style="margin-left:0;color:rgb(37, 141, 84);font-size:25px">Liste des Climats</span> 
                                    </b-th>
                                </b-tr>
                            </template>
                            <template #cell(ID)="data">
                            <div class="div1"><p>{{ data.item.id_climat }}</p></div>
                            
                            </template>

                            <template #cell(Nom)="data">
                            <div class="div3"><p>{{ data.item['nom_'+ getLangage] }}</p></div>    
                            </template>

                            <template #cell(Image_couverture)="data">
                                <div class="div4"><p>{{ data.item.image }}</p></div>    
                            </template>

                            <template #cell(precipitation)="data">
                                <div class="div4"><p>{{ data.item.precipitation }}</p></div>    
                            </template>

                             <template #cell(temperature)="data">
                                <div class="div4"><p>{{ data.item.temperature }}</p></div>    
                            </template>

                             <template #cell(vent)="data">
                                <div class="div4"><p>{{ data.item.vent }}</p></div>    
                            </template>

                            <template #cell(Actions)="data">
                                <div class="card-option div8">
                                    <div class="option1" title="Voir"><i class="fa fa-eye" aria-hidden="true" ></i></div>
                                    <div class="option2" title="Modifier"><i class="fas fa-edit" aria-hidden="true"></i></div>
                                    <div class="option3"  title="Supprimer"><i class="fa fa-trash" aria-hidden="true"></i></div>
                                </div>
                                </template>
                        </b-table>
                        <div class="overflow-auto ">
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="items.length"
                                :per-page="perpage"
                                aria-controls="my-table"
                                class="mt-1 justify-content-lg-center">
                            <template #first-text><span class="text-success" >Premier</span></template>
                            <template #prev-text><span class="text-danger" >Precedent</span></template>
                            <template #next-text><span class="text-warning">Suivant</span></template>
                            <template #last-text><span class="text-info">Dernier</span></template>
                            <template #ellipsis-text>
                                <b-spinner small type="grow"></b-spinner>
                                <b-spinner small type="grow"></b-spinner>
                                <b-spinner small type="grow"></b-spinner>
                            </template>
                            <template #page="{ page, active }">
                                <b v-if="active">{{ page }}</b>
                                <i v-else>{{ page }}</i>
                            </template>
                            </b-pagination>
                        </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import HeaderAdmin from "../components/HeaderAdmin"
import Tabs from "../components/Tabs"
import baseUrl from '../service/baseUrl.js'
import { mapGetters, mapActions } from 'vuex'

const axios = require('axios')
export default {
    name:'ListeClimat',
    components: {
      HeaderAdmin,
      Tabs
    },
     data:function() {
      return{
         fields: [
          'ID',
          'Nom',
          'Image_couverture',
          'precipitation',
          'temperature',
          'vent',
          'Actions'
        ],
        items:[],
        dark:true,
        baseUrl:baseUrl,
        perpage:8,
        getItems:100,
        currentPage: 1,
      }
   },
    computed: {
     ...mapGetters('Langage',['getLangage']),
    },
    created(){
      
    },
    mounted() {
        axios.get(this.baseUrl + `/climat/list/${this.getLangage}/${this.getItems}`)
        .then((res)=>{
            this.items = res.data
            console.log(res.data)
        })
    },
    destroyed() {
      
    },
    methods: {
       
    }
}
</script>
<style scoped>
.body{
    margin-left:25px !important;
    margin-right: 30px !important
}
.red{
    text-align: center;
    color:red;
    margin-top: 20%;
}
.table-content{
  position: absolute;
  top:35%;
  left: 20%
}
tbody > tr > td {
  max-width: 800px;
}
.card-option{
  display: flex;
  flex:20%;
  padding: 0px;
  flex-direction: row;
}
.card-option i{
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
}
.option1,.option2,.option3{
  flex: 30%;

}
.option1 i{
 color: #04AA6D;

}.option2 i{
 color: #043eaa;

}.option3 i{
  color: red;
}

</style>

