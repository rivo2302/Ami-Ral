<template>
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Page introuvable</h2>
                <div class="error-details">
                    Desolé, Vous ne pourriez pas acceder sur ce page!
                </div>
                <div class="error-actions">
                    <router-link to="/" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Accueil </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default {
    name:'NotFound',
    components: {
      
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
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
h2{
    color: red;
}
</style>

