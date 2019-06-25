import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START})

    return axiosWithAuth()
        .post("/auth/login", creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.userid});
            return true;
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAILURE, payload: `${err}`});
        })
}



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
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.userid});
            return true;
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REGISTER_FAILURE, payload: `${err}`});
        })
}



export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const getPlanners = () => dispatch => {

    dispatch({ type: FETCH_DATA_START})

    axiosWithAuth()
        .get("/posts/all")
        .then(res => {
            console.log(res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_DATA_FAILURE, payload: `${err}`})
        })
}



export const POST_EVENT_START = "POST_EVENT_START"
export const POST_EVENT_SUCCESS = "POST_EVENT_SUCCESS"
export const POST_EVENT_FAILURE = "POST_EVENT_FAILURE"
export const postEvent = event => dispatch => {

    dispatch({ type: POST_EVENT_START})

    axiosWithAuth()
        .post("/posts", event)
        .then(res => {
            console.log(res);
            dispatch({ type: POST_EVENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: POST_EVENT_FAILURE, payload: `${err}`});
        })
}

export const DELETE_EVENT_START = "DELETE_EVENT_START"
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS"
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE"
export const deleteEvent = id => dispatch => {

    dispatch({ type: DELETE_EVENT_START})


    axiosWithAuth()
        .delete(`/posts/${id}`, id)
        .then(res => {
            console.log(res);
            dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: DELETE_EVENT_FAILURE, payload: `${err}`});
        })
}


export const PUT_EVENT_START = "PUT_EVENT_START"
export const PUT_EVENT_SUCCESS = "PUT_EVENT_SUCCESS"
export const PUT_EVENT_FAILURE = "PUT_EVENT_FAILURE"
export const putEvent = event => dispatch => {

    dispatch({ type: PUT_EVENT_START})
    const id = event.id;

    axiosWithAuth()
        .delete(`/posts/${id}`, event)
        .then(res => {
            console.log(res);
            dispatch({ type: PUT_EVENT_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: PUT_EVENT_FAILURE, payload: `${err}`});
        })
}