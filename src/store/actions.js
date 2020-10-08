 
import Product from "../apis/Product";
import Cart from "../apis/Cart";

export const getProducts = ({ commit }) => {
    Product.all()
            .then(response =>{
            commit('SET_PRODUCTS', response.data)
        })
}

export const getProduct = ({ commit }, productId) => {
    Product.show(productId)
            .then(response => {
            commit('SET_PRODUCT', response.data);
        })
}

export const addToCart = ({ commit }, { product, quantity }) => {
     commit('ADD_TO_CART', {product, quantity} );  
     Cart.store({
         product_id : product.id,
         quantity : quantity
     })
}

export const getCartItems = ({ commit }) => {
        Cart.all()
            .then(response =>{
            commit('SET_CART_ITEM', response.data)
        })
}

export const removeCartItem = ({commit}, product) =>{
        commit('REMOVE_CART_ITEM', product)
            Cart.delete(product.id)
}
export const clearAllCart = ({commit}) =>{
        commit('CLEAR_ALL_CART')
          Cart.delete()
}