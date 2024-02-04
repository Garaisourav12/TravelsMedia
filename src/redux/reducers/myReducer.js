import { ADD_DATA, ADD_ERROR, START_LOADING } from "../action/actions"

const initialstate = {
    loading: false,
    data: [],
    error: null
}


const myReducer = (state = initialstate, action) => {
    switch(action.type){
        case START_LOADING: return { loading: true, data: [], error: null};
        case ADD_DATA: return { loading: false, data: action.payload, error: null};
        case ADD_ERROR: return { loading: false, data: [], error: action.payload};
        default: return state;
    }
}

export default myReducer;