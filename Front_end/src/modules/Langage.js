
const state = {
    langage:'fr',
    status:false
}


const getters = {
    getLangage:state=>{
        return state.langage
    },
}
const actions = {

    setLangage({ commit }, langage) {

        commit('setOneLangageLoading');
        if(langage){
            commit('setOneLangageSuccess',langage)
        }

    }

};

const mutations = {

    setOneLangageLoading(state) {

        state.status = true;
    },

    setOneLangageSuccess(state, langage) {

        state.langage = langage;
    },


};

export const Langage = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
