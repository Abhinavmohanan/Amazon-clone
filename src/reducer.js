import { red } from "@mui/material/colors";

export const initialState ={
    cart:[],
};



const reducer = (state,action)=>{
    const newcart= []
    var flag = 0;
    function checkReorder(item){
        state.cart.forEach(element => {
            if(element.id === item.id){
                newcart.push({
                    id:item["id"],
                    image:item["image"],
                    heading: item["heading"],
                    price: item["price"],
                    qty: element.qty+1,
                })
                flag = 1;
            }
            else{
            newcart.push(element);
            }
        });

        if(flag === 0){
            newcart.push(item);
        }
    }
    function decreaseItem(item){
        state.cart.forEach(element => {
            if(element.id === item.id){
                if(element.qty - 1 !== 0){
                newcart.push({
                    id:item["id"],
                    image:item["image"],
                    heading: item["heading"],
                    price: item["price"],
                    qty: element.qty-1,
                })
                }
            }
            else{
            newcart.push(element);
            }
        })
    }

    function deleteItem(item){
        state.cart.forEach(element => {
            if(element.id !== item.id){
                newcart.push(element);
            }
        })
    }

    switch(action.type){
        case 'Add_to_Cart': 
            checkReorder(action.item);
            return{
                ...state,
                cart:newcart
            }
        case 'Delete_from_Cart': 
            deleteItem(action.item);
            return{...state,cart:newcart}
        case 'Decrease_from_Cart': 
            decreaseItem(action.item);
            return{...state,cart:newcart}    
        default: return state
    }
}

export default reducer;