import { axiosWithAuth } from "../utils/axiosWithAuth";



//================================LOGIN================================//

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START})

    return axiosWithAuth()
        .post("/auth/login", creds)
        .then(res => {
            console.log(res.data.userid);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userid);
            dispatch({ type: LOGIN_SUCCESS });
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: LOGIN_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: LOGIN_FAILURE, payload: `${err}`}); }
        })
}



//================================REGISTER================================//

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const register = creds => dispatch => {

    dispatch({ type: REGISTER_START})

    return axiosWithAuth()
        .post("/auth/register", creds)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", JSON.stringify(res.data.id));
            dispatch({ type: REGISTER_SUCCESS });
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: REGISTER_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: REGISTER_FAILURE, payload: `${err}`}); }
        })
}



//================================LOGOUT================================//

export const LOGOUT_START = "LOGOUT_START"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILURE = "LOGOUT_FAILURE" // I don't think Logging out should ever fail . . .
export const logout = () => dispatch => {
    
    dispatch({ type: LOGOUT_START });
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch({ type: LOGOUT_SUCCESS });
}



//================================LOGINFIX================================//

export const LOGIN_FIX_START = "LOGIN_FIX_START"
export const LOGIN_FIX_SUCCESS = "LOGIN_FIX_SUCCESS"
export const LOGIN_FIX_FAILURE = "LOGIN_FIX_FAILURE" // I don't think Logging out should ever fail . . .
export const loginFix = id => dispatch => {
    
    dispatch({ type: LOGIN_FIX_START });
    dispatch({ type: LOGIN_FIX_SUCCESS, payload: id});
}



//================================GETPLANNERS================================//

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const getPlanners = () => dispatch => {

    dispatch({ type: FETCH_DATA_START})

    return axiosWithAuth()
        .get("/posts/all")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: FETCH_DATA_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: FETCH_DATA_FAILURE, payload: `${err}`}); }
        })
}



//================================POSTEVENT================================//

export const POST_EVENT_START = "POST_EVENT_START"
export const POST_EVENT_SUCCESS = "POST_EVENT_SUCCESS"
export const POST_EVENT_FAILURE = "POST_EVENT_FAILURE"
export const postEvent = event => dispatch => {

    dispatch({ type: POST_EVENT_START})

    return axiosWithAuth()
        .post("/posts", event)
        .then(res => {
            console.log(res);
            dispatch({ type: POST_EVENT_SUCCESS, payload: res.data });
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: POST_EVENT_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: POST_EVENT_FAILURE, payload: `${err}`}); }
        })
}



//================================DELETEEVENT================================//

export const DELETE_EVENT_START = "DELETE_EVENT_START"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE"
export const deleteEvent = id => dispatch => {

    dispatch({ type: DELETE_EVENT_START})


    return axiosWithAuth()
        .delete(`/posts/${id}`, id)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_EVENT_SUCCESS, payload: id });
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: DELETE_EVENT_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: DELETE_EVENT_FAILURE, payload: `${err}`}); }
        })
}



//================================PUTEVENT================================//

export const PUT_EVENT_START = "PUT_EVENT_START"
export const PUT_EVENT_SUCCESS = "PUT_EVENT_SUCCESS"
export const PUT_EVENT_FAILURE = "PUT_EVENT_FAILURE"
export const putEvent = event => dispatch => {

    dispatch({ type: PUT_EVENT_START})
    const id = event.id;

    return axiosWithAuth()
        .put(`/posts/${id}`, event)
        .then(res => {
            console.log(res);
            dispatch({ type: PUT_EVENT_SUCCESS });
            return true;
        })
        .catch(err => {
            if (err.response.data.error) {
                console.log(err.response.data.error);
                dispatch({ type: PUT_EVENT_FAILURE, payload: `${err.response.data.error}`});
            } else { dispatch({ type: PUT_EVENT_FAILURE, payload: `${err}`}); }
        })
}