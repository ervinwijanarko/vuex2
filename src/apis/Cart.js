 
import Api from "../apis/Api";

export default{
    all(){
        return Api.get('cart');
    },
    store(product){
        return Api.post('cart', product);
    },
    delete(id){
        return Api.delete(`cart/${id}`);
    },
    deleteAll(){
        return Api.delete('cart');
    }

    
}