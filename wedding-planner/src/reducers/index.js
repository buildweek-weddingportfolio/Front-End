import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    LOGIN_FIX_START, LOGIN_FIX_SUCCESS, LOGIN_FIX_FAILURE,
    FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
    EDIT_SEARCH_START, EDIT_SEARCH_SUCCESS, EDIT_SEARCH_FAILURE,
    POST_EVENT_START, POST_EVENT_SUCCESS, POST_EVENT_FAILURE,
    PUT_EVENT_START, PUT_EVENT_SUCCESS, PUT_EVENT_FAILURE,
    DELETE_EVENT_START, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE,
    NO_ERROR,
} from '../actions';



const initialState = {
    planners: [],
    searchObj: {
        coupleName: "",
        location: "",
        theme: "",
    },
    loggedBoolean: false,
    loggingIn: false,
    loggingOut: false,
    editingSearch: false,
    fetchingPlanners: false,
    postingEvent: false,
    puttingEvent: false,
    deletingEvent: false,
    error: null
}


export const reducer = (state = initialState, action) => {
    switch(action.type){

        //================================LOGIN================================//

        case LOGIN_START:
            return{
                ...state,
                loggingIn: true,
                error: null,
                loggedBoolean: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state, 
                loggingIn: false,
                loggedBoolean: true
            }
        
        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload
            }
        
        
        //================================REGISTER================================//

        case REGISTER_START:
            return{
                ...state,
                loggingIn: true,
                error: null,
                loggedBoolean: false
            }
        case REGISTER_SUCCESS:
            return{
                ...state, 
                loggingIn: false,
                loggedBoolean: true
            }
        
        case REGISTER_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload
            }


        //================================LOGOUT================================//

        case LOGOUT_START:
            return{
                ...state,
                loggingOut: true,
                error: null,
            }
        case LOGOUT_SUCCESS:
            return{
                ...state, 
                loggingOut: false,
                loggedBoolean: false
            }
        
        case LOGOUT_FAILURE:
            return{
                ...state,
                loggingOut: false,
                error: action.payload
            }


        //================================LOGINFIX================================//

        case LOGIN_FIX_START:
            return{
                ...state,
                loggingIn: true,
                error: null,
            }
        case LOGIN_FIX_SUCCESS:
            return{
                ...state, 
                loggingIn: false,
                loggedBoolean: true
            }
        
        case LOGIN_FIX_FAILURE:
            return{
                ...state,
                loggingIn: false,
                error: action.payload
            }


        //================================FETCHDATA================================//

        case FETCH_DATA_START:
            return{
                ...state,
                fetchingPlanners: true,
                error: null,
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


        //================================EDITSEARCH================================//

        case EDIT_SEARCH_START:
            return{
                ...state,
                editingSearch: true,
                error: null,
            }
        case EDIT_SEARCH_SUCCESS:
            return{
                ...state,
                editingSearch: false,
                searchObj: action.payload
            }
        case EDIT_SEARCH_FAILURE:
            return{
                ...state,
                editingSearch: false,
                error: action.payload
            }


        //================================POSTEVENT================================//

        case POST_EVENT_START:
            return{
                ...state,
                postingEvent: true,
                error: null,
            }
        case POST_EVENT_SUCCESS:
            return{
                ...state,
                postingEvent: false,
                planners: [...state.planners, action.payload]
            }
        case POST_EVENT_FAILURE:
            return{
                ...state,
                postingEvent: false,
                error: action.payload
            }


        //================================PUTEVENT================================//

        case PUT_EVENT_START:
            return{
                ...state,
                puttingEvent: true,
                error: null,
            }
        case PUT_EVENT_SUCCESS:
            return{
                ...state,
                puttingEvent: false,
            }
        case PUT_EVENT_FAILURE:
            return{
                ...state,
                puttingEvent: false,
                error: action.payload
            }


        //================================DELETEEVENT================================//

        case DELETE_EVENT_START:
            return{
                ...state,
                deletingEvent: true,
                error: null,
            }
        case DELETE_EVENT_SUCCESS:
            const newPlanners = state.planners.filter(event => event.id !== action.payload);
            return{
                ...state,
                deletingEvent: false,
                planners: newPlanners
            }
        case DELETE_EVENT_FAILURE:
            return{
                ...state,
                deletingEvent: false,
                error: action.payload
            }

        //================================DELETEEVENT================================//

        case NO_ERROR:
            return {
                ...state,
                error: null,
            }

            

        default: return state
    }
}