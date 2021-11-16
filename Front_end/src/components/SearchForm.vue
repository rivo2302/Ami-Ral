<template>
    <form v-on:submit="showDetail">
      <input list="country" type="text" id="region-input" :data-id="value" name="country" v-on:keyup="handleOption" />

      <datalist id="country">
        <option v-for="(path,index) in paths">{{ path.nom }}</option>
      </datalist>

      <input type="submit" :value="value" />
   </form>
</template>
<script>
import MapService from '../service/Map.js'

export default {
    name:'List',
    props:{
        value:{
            type:String,
            default:()=>''
        }
    },
    data:function() {
        return{
            paths:[],
            val : "0",
        }
    },
    beforeMount(){
        const self = this;
        const d = MapService.all();
        d.then(res => {
            self.paths = res.data;
        })
    },
    methods:{
        showDetail(e, id){
            e.preventDefault();
            if(this.valInpath()){
                this.$router.push("region/"+ this.val);
            } else {
                const input = document.querySelector("form input[type=submit]");
                input.style.backgroundColor = "#863333";

                setTimeout(() => {
                    input.style.backgroundColor = "#1c6d41";
                }, 1500)
            }
        },
        handleOption(e){
            const valeur = e.target.value.toLowerCase();
            const input = document.getElementById("region-input"); 
            let none = true;

            for(let i = 0; i < this.paths.length; i++){
                if(this.paths[i].nom.toLowerCase() === valeur){
                    this.val = this.paths[i].id_region;
                    none = false;
                }
            }

            if(none){
                this.val = "0";
                input.style.backgroundColor = "#a006";
            } else {
                input.style.backgroundColor = "#0006";
            }
        },
        valInpath(){
            for(let i = 0; i < this.paths.length; i++){
                if(this.paths[i].id_region === this.val) return true;
            }
            return false;
        }
    },
}
</script>

<style scoped>

form{
    padding-left: 3rem;
}

form input{
    padding: 10px;
    border: none;
}

form input[type=text]{
    background-color: #0006;
    color: white;
    caret-color: white;
}

form input:focus{
    outline: none;
}

form input[type=submit]{
    background-color: #1c6d41;
    color: white;
    transition: background-color .3s;
}

</style>