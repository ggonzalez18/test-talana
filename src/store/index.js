import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        itemsCategory: [],
        products: [],
        product: null
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        },
        SET_PRODUCT(state, payload) {
            state.product = payload
        },
        SET_CATEGORIES(state, payload) {
            state.itemsCategory = payload
        },
        FILTER_PRODUCT(state, payload) {
            state.products = state.products.filter((product) => {
                return product.name.toLowerCase().includes(payload.toLowerCase()) ||
                    product.category.name.toLowerCase().includes(payload.toLowerCase())
            })
        },
        FILTER_CATEGORY(state, payload) {
            state.products = state.products.filter((product) => {
                return product.category.id == payload.id
            })
        }
    },
    actions: {
        getProducts({ commit }) {
            Axios.get('http://sva.talana.com:8000/api/product/').then((response) => {
                commit('SET_PRODUCTS', response.data)
            })
        },
        getProduct({ commit }, payload) {
            commit('SET_PRODUCT', payload)
        },
        getCategories({ commit }) {
            Axios.get('http://sva.talana.com:8000/api/product-category/').then((response) => {
                commit('SET_CATEGORIES', response.data)
            })
        },
        filterBySearch({ commit }, payload) {
            commit('FILTER_PRODUCT', payload)
        },
        filterByCategory({ commit }, payload) {
            commit('FILTER_CATEGORY', payload)
        }
    },
    modules: {}
})