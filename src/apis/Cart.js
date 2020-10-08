 
import Api from "../apis/Api";

const END_POINT = 'cart'; 

export default{
    all(){
        return Api.get(END_POINT);
    },
    store(product){
        return Api.post(END_POINT, product);
    },
    delete(id){
        return Api.delete(`${END_POINT}/${id}`);
    },
    deleteAll(){
        return Api.delete(END_POINT);
    }

    
}