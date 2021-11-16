

import Techniques from '../service/Techniques'



const state = {
    all:{
        items:[]
    },
    OneTechnique:{},
    statusDelete : false
}


const getters = {

    AllTechnique:state=>{
        return state.all.items
    },
    getOneTechnique:state=>{
        return state.OneTechnique
    },
}
const actions = {

    
    register({commit }, technique) {
        commit('registerRequest', technique);
    
        Techniques.register(technique)
            .then((res) => {
                    commit('registerSuccess', res.data);
                })
            .catch((error) => {
                commit('registerFailure', error);
            })
    },

    getOneTechnique({ commit },{langage, id}) {

        commit('getOneTechniqueLoading');

        Techniques.getOne(langage, id)
            .then((res)=>{
                commit('getOneTechniqueSuccess', res.data)
                
            })
            .catch(() => commit('getOneTechniqueFailure'))

    },
    getAllTechnique({ commit},{langage,nbr_list}){
        commit('getAllTechniqueLoading');
        Techniques.getAll(langage,nbr_list)
            .then((res)=>{
                commit('getAllTechniqueSuccess', res.data)
            })
            .catch(() => commit('getAllTechniqueFailure'))
    },

    deleteTechnique({commit},technique){
        commit('deleteRegionLoading');
        Techniques.delete(technique.id)
            .then(()=>{
                var statusDelete = true
                commit('deleteRegionSuccess',{technique,statusDelete})
            })
            .catch(() =>{
                var statusDelete = false
                commit('deleteRegionFailure',statusDelete)
            })
    },

    UpdateTechnique({ commit },technique){

        commit('UpdateTechniqueLoading');
        Techniques.Update(technique)
            .then((res)=>{
                commit('UpdateTechniqueSuccess', res.data)
            })
            .catch(() => commit('UpdateTechniqueFailure'))
    },
};

const mutations = {


    registerRequest(state) {

        state.status = { registering: true };
    },

    registerSuccess(state) {

        state.status = true;
    },

    registerFailure(state) {

        state.status = false;
    },


    getOneTechniqueLoading(state) {

        state.OneTechnique = { loading: true };
    },


    getOneTechniqueSuccess(state, technique) {

        state.OneTechnique = technique;
    },


    getOneTechniqueFailure(state) {

        state.OneTechnique = { };
    },


    getAllTechniqueLoading(state) {

        state.all = { loading: true };
    },


    getAllTechniqueSuccess(state, technique) {

        state.all.items = technique ;
    },

    getAllTechniqueFailure(state,error) {

        state.all.error = error;
    },
    deleteTechniqueLoading(state) {

        state.statusDelete = null;
    },


    deleteTechniqueSuccess(state,{technique,statusDelete}) {
        state.statusDelete = statusDelete;
        state.all.items = state.all.items.filter(item => item !== technique)
    },

    deleteTechniqueFailure(state,statusDelete) {

        state.statusDelete = statusDelete;
    },

    UpdateTechniqueLoading(state) {
        state.all = { loading: true };
    },


    UpdateTechniqueSuccess(state, technique) {

        state.all.items = technique
    },

    UpdateTechniqueFailure(state,error) {

        state.all.items = error
    },


};

export const Technique = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

