

import Plantes from '../service/Plantes'


const state = {
    all:{
        items:[]
    },
    OnePlante:{},
    statusDelete:false
}


const getters = {

    AllPlante:state=>{
        return state.all.items
    },
    getOne:state=>{
        return state.OnePlante
    },
}
const actions = {

    
    register({commit }, plante) {
        commit('registerRequest', plante);
    
        Plantes.register(plante)
            .then((res) => {
                    commit('registerSuccess', res.data);
                })
            .catch((error) => {
                commit('registerFailure', error);
            })
    },

    getOnePlante({ commit },{langage,id_plante}) {

        commit('getOnePlanteLoading');

        Plantes.getOne(langage,id_plante)
            .then((res)=>{
                commit('getOnePlanteSuccess', res.data)
               
            })
            .catch(() => commit('getOnePlanteFailure'))
    },

    getAllPlante({ commit },{langage,nbr_list}){
        commit('getAllPlanteLoading');
        Plantes.getAll(langage,nbr_list)
            .then((res)=>{
                commit('getAllPlanteSuccess',res.data)

            })
            .catch((error) => commit('getAllPlanteFailure',error))
    },

    UpdatePlante({ commit }, plante){
        commit('UpdatePlanteLoading');

        Plantes.Update(plante)
            .then((res)=>{
                commit('UpdatePlanteSuccess', res.data)
            })
            .catch(() => commit('UpdatePlanteFailure'))
    },
    
    deletePlante({commit},plante){
        commit('deletePlanteLoading');
        Plantes.delete(plante.id)
            .then(()=>{
                var statusDelete = true
                commit('deletePlanteSuccess',{plante,statusDelete})
            })
            .catch(() =>{
                var statusDelete = false
                commit('deletePlanteFailure',statusDelete)
            })
    },
    

};

const mutations = {



    registerRequest(state) {

        state.status = { registering: true };
    },

    registerSuccess(state) {

        state.status = {};
    },

    registerFailure(state) {

        state.status = {};
    },

    getOnePlanteLoading(state) {

        state.OnePlante = { loading: true };
    },


    getOnePlanteSuccess(state, plante) {

        state.OnePlante = plante;
    },


    getOnePlanteFailure(state) {
        state.OnePlante = {};
    },

    getAllPlanteLoading(state) {

        state.all = { loading: true };
    },

    getAllPlanteSuccess(state, plante) {

        state.all.items = plante ;
    },


    getAllPlanteFailure(state,error) {

        state.all.error = error;
    },



    UpdatePlanteLoading(state) {
        state.all = { loading: true };
    },

    UpdatePlanteSuccess(state, plante) {

        state.all.items=plante ;
    },

    UpdatePlanteFailure(state,error) {
        state.all.error = error
    },
    
    deletePlanteLoading(state) {

        state.statusDelete = null;
    },


    deletePlanteSuccess(state,{plante,statusDelete}) {
        state.statusDelete = statusDelete;
        state.all.items = state.all.items.filter(item => item !== plante)
    },

    deletePlanteFailure(state,statusDelete) {

        state.statusDelete = statusDelete;
    },
};

export const Plante = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

