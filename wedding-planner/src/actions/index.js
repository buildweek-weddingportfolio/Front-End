import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"
export const fetchData = () => dispatch => {

    dispatch({ type: FETCH_DATA_START})

    axiosWithAuth()
        .get("/pokemon/ditto")
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}