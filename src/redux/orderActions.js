import {
    SET_DELIVERY,
    SET_ITEM_TO_CART,
    SET_USER_DETAILS
} from "./orderConstants";

export const setDeliveryOrder = () => dispatch => {
    dispatch({
        type: SET_DELIVERY
    })
}
export const setProductToOrder = (name,type,sum) => dispatch => {
    console.log(name)
    if(type===2){
        type = "קקאו"
    }else{
        type = "רגילה"
    }
    const newProduct = {
        name,
        type,
        sum
    }

    dispatch({
        type:SET_ITEM_TO_CART,
        payload:newProduct
    })
}
export const setUserDetails = (userName,phone,email,address) => dispatch => {
    console.log("*****************************************")
    console.log("*****************************************")
    console.log("user register")
    console.log("*****************************************")
    console.log("*****************************************")
    dispatch({
        type:SET_USER_DETAILS,
        payload:{userName,phone,email,address}
    })
}
