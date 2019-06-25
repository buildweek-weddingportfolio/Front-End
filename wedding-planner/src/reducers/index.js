import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    POST_EVENT_START, POST_EVENT_SUCCESS, POST_EVENT_FAILURE,
    PUT_EVENT_START, PUT_EVENT_SUCCESS, PUT_EVENT_FAILURE,
    DELETE_EVENT_START, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE,
} from '../actions';



const initialState = {
    planners:[],
    loggingIn: false,
    fetchingPlanners: false,
    postingEvent: false,
    puttingEvent: false,
    deletingEvent: false,
    error:''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return{
                ...state,
                loggingIn: true,
                error:"",
            }
        case LOGIN_SUCCESS:
            return{
                ...state, 
                loggingIn: false,
                error:'',
            }
        
        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload
            }
        
        
        case REGISTER_START:
            return{
                ...state,
                loggingIn: true,
                error:"",
            }
        case REGISTER_SUCCESS:
            return{
                ...state, 
                loggingIn: false,
                error:'',
            }
        
        case REGISTER_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload
            }


        case FETCH_DATA_START:
            return{
                ...state,
                fetchingPlanners: true,
                error:'',
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                fetchingPlanners: false,
                planners: action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                fetchingPlanners: false,
                error: action.payload
            }


        case POST_EVENT_START:
            return{
                ...state,
                postingEvent: true,
                error:'',
            }
        case POST_EVENT_SUCCESS:
            return{
                ...state,
                postingEvent: false,
                planners: action.payload
            }
        case POST_EVENT_FAILURE:
            return{
                ...state,
                postingEvent: false,
                error: action.payload
            }


        case PUT_EVENT_START:
            return{
                ...state,
                puttingEvent: true,
                error:'',
            }
        case PUT_EVENT_SUCCESS:
            return{
                ...state,
                puttingEvent: false,
                planners: action.payload
            }
        case PUT_EVENT_FAILURE:
            return{
                ...state,
                puttingEvent: false,
                error: action.payload
            }


        case DELETE_EVENT_START:
            return{
                ...state,
                deletingEvent: true,
                error:'',
            }
        case DELETE_EVENT_SUCCESS:
            return{
                ...state,
                deletingEvent: false,
                planners: action.payload
            }
        case DELETE_EVENT_FAILURE:
            return{
                ...state,
                deletingEvent: false,
                error: action.payload
            }

            

        default: return state
    }
}