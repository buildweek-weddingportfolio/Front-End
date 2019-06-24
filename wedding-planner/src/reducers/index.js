import {
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actions';



const initialState = {
    planners:[],
    loggingIn:false,
    fetchingPlanners:false,
    error:''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return{
                ...state,
                error:'',
                fetchingPlanners:true
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                fetchingPlanners: false,
                planners:action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                fetchingPlanners:false,
                error: action.payload
            }

        case LOGIN_START:
            return{
                ...state,
                error:"",
                loggingIn:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state, 
                error:'',
                loggingIn:false
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn:false,
                error: action.payload
            }

        default: return state
    }
}