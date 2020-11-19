import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            { text: 'Categoría 1' },
            { text: 'Categoría 2' },
            { text: 'Categoría 3' },
            { text: 'Categoría 4' },
            { text: 'Categoría 5' },
            { text: 'Categoría 6' },
        ],
        products: []
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        }
    },
    actions: {
        getProducts({ commit }) {
            Axios.get('http://sva.talana.com:8000/api/product/').then((response) => {
                commit('SET_PRODUCTS', response.data)
            })
        }
    },
    modules: {}
})