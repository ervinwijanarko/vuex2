export const cartItemCount = (state) =>{
   return state.cart.length;
}
export const totalPrice = (state) =>{
    let total = 0;
     
    state.cart.forEach(pembelian => {
        total += pembelian.product.price * pembelian.quantity;
    }) 
    return total;
 }