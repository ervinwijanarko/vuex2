import Api from "./Api";

export default{
    all(){
        return Api.get('products');
    },
    show(id){
        return Api.get(`product/${id}`);
    } 
 
}