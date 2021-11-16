import Vue from 'vue'
import Vuex from 'vuex'

import {admins } from './modules/admins'
import {Region } from './modules/Region'
import {Climat } from './modules/Climat'
import {Plante } from './modules/Plante'
import {Technique } from './modules/Technique' 
import {Langage } from './modules/Langage' 


 Vue.use(Vuex)

 export  const store = new Vuex.Store({
    modules: {
        admins,
        Plante,
        Region,
        Climat,
        Technique,
        Langage
    }
 })