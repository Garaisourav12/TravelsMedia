import axios from "axios"
import { ADD_DATA, ADD_ERROR, START_LOADING } from "./actions"

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}

export const addData = (data) => {
    return {
        type: ADD_DATA,
        payload: data
    }
}

export const addError = (error) => {
    return {
        type: ADD_ERROR,
        payload: error
    }
}

export const fetchData = () => {
    return async (dispatch) => {
        try{
            dispatch(startLoading());
            const {data} = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            )
            dispatch(addData(data));
        }
        catch(e){
            dispatch(addError(e.message));
        }
    }
}