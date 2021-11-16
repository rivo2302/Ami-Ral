<template>
    <div class="mg-map" @mousemove="hoverDoc">
        <div id="desc">Test</div>
        <svg id="svg_map" baseprofile="tiny" fill="#7c7c7c" height="100%" width="100%" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
            <path class="component" v-for="path in paths" v-bind:d="path.path" v-bind:id="path.id_region" v-bind:name="path.nom"
                 @mouseover="e => overMap(e, path.nom)" @mouseleave="leaveMap" v-on:click="e => showDetail(e, path.id_region)" :key="path.id_region">
                <title>{{ path.nom }}</title>
		    </path>
            <circle cx="918.1" cy="338.2" id="0">
            </circle>
            <circle cx="925.9" cy="342.8" id="1">
            </circle>
            <circle cx="984.1" cy="496.4" id="2">
            </circle>
        </svg>
    </div>
</template>
<script>
import langue from '../service/Multilangue.js'
import MapService from '../service/Map.js'

export default {
    name:'List',
    data:function() {
        return{
            paths:[],
            onMap : false,
            viewBox : "0 0 1000 1985"
        }
    },
    beforeMount(){
        const self = this;
        const d = MapService.all();
        d.then(res => {
            self.paths = res.data;
        })
    },
    mounted () {
        const self = this;
        this.$on('offline', () => {
            const appData = self.$offlineStorage.get('map-page');
            self.paths = appData;
        })

        if(this.isOffline){
            const appData = self.$offlineStorage.get('map-page');
            self.paths = appData;
        }

    },
    updated (){
        if (this.isOnline) {
            this.$offlineStorage.set('map-page', this.paths);
        }
    },
    methods:{
        showDetail(e, id){
            this.$router.push("region/"+ id);
        },
        hoverDoc : function(e){
            const desc = document.getElementById("desc");
            desc.style.left = e.pageX + "px";
            desc.style.top = e.pageY - 70 + "px";
        },
        overMap: function(event, nom){
            this.onMap = true;

            const desc = document.getElementById("desc");
            desc.classList.add("active");
            desc.innerHTML = nom;
        },
        leaveMap: function(){
            this.onMap = false;

            const desc = document.getElementById("desc");
            desc.classList.remove("active");
        }
    },
}
</script>

<style scoped>
.mg-map{
	margin: 5rem 0 0 0;
    width : 100%;
	height: calc(100vh - 100px);
}

path{
	cursor: pointer;
    fill:#103a30;
    stroke:#fff8;
    pointer-events:all;
    transition: all .4s;
}

path:hover{
    fill:#0e2c25;
}

.component .tooltip {visibility: hidden}
.component:hover .tooltip {
    visibility: visible;
}
.tooltip text {
    fill: black;
    font-size: 12px;
    font-family: sans-serif;
}
.tooltip rect {
    fill: yellow;
    stroke: blue;
}

#desc
{
    pointer-events: none;
    position: absolute;
    font-size: 14px !important;
    text-align: center;    
    background: white;
    padding: 10px 15px;
    z-index: 5;
    height: auto;
    line-height: 30px;
    margin: 0 auto;
    color: #696969 !important;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #eee;
    transform : translateX(-50%);
    display: none;
}

#desc.active{
    display: block
}  
#desc:after{
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
}

</style>