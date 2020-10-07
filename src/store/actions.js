import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/products')
        .then(response =>{
            commit('SET_PRODUCTS', response.data)
        })
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}

export const addToCart = ({ commit }, { product, quantity }) => {
     commit('ADD_TO_CART', {product, quantity} ); 

     axios.post('http://127.0.0.1:8000/api/cart',{
         product_id : product.id,
         quantity : quantity
     })
}

export const getCartItems = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/cart')
        .then(response =>{
            commit('SET_CART_ITEM', response.data)
        })
}

export const removeCartItem = ({commit}, product) =>{
    commit('REMOVE_CART_ITEM', product)
    axios.delete(`http://127.0.0.1:8000/api/cart/${product.id}`)
}
export const clearAllCart = ({commit}) =>{
    commit('CLEAR_ALL_CART')
    axios.delete(`http://127.0.0.1:8000/api/cart/`)
}