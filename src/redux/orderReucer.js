import {
    SET_ITEM_TO_CART,
    SET_DELIVERY,
    SET_USER_DETAILS
} from './orderConstants';

const initialState = {
    userName:"",
    address:"",
    phone:"",
    email:"",
    userRegister:false,
    delivery:false,
    products:[],
    totalProduct:0,
    loading:false
};


export const orderReducer = (
    state=initialState,
    action)=>{

    const {type,payload} = action;
    switch (type) {
        case SET_ITEM_TO_CART:
            return{
                ...state,
                products: [...state.products,payload],
                loading: true
            }
        case SET_DELIVERY:
            return{
                ...state,
                delivery: !state.delivery,
            }
        case SET_USER_DETAILS:
            return{
                ...state,
                userName: payload.userName,
                phone: payload.phone,
                email: payload.email,
                address: payload.address,
                userRegister: true
            }
        default:
            return state;
    }
}
