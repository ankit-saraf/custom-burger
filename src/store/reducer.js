import * as actionTypes from './actionTypes'
import { updateObject } from './utility';

const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0

    },
    price:20,
    loading:false,
    token: null,
    userId: null,
    error: null,
    authRedirectPath: '/',
    orders:[]
}

const ING_PRICE ={
    salad:20,
    bacon:25,
    cheese:20,
    meat:30,
}

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};



const reducer=(state=initialState,action)=>{
    if(action.type===actionTypes.ADD_ING){
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ing]:state.ingredients[action.ing]+1
            },
            price:state.price+ING_PRICE[action.ing]
        }
    }
    if(action.type===actionTypes.REM_ING){
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ing]:state.ingredients[action.ing]-1
            },
            price:state.price-ING_PRICE[action.ing]
            
        }
    }
    if(action.type===actionTypes.RESET){
        return{
            ...state,
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            price:20
            
        }
    }
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );
        default:
            return state;
    }
};


export default reducer;