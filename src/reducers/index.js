import { FETCH_SMURFS_START, FETCH_SMURFS_FAIL, FETCH_SMURFS_SUCCESS, ADD_SMURF } from '../actions'; 

export const initialState = {
    isFetching: false, 
    error: '',
    smurfs: [],
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(FETCH_SMURFS_START):
            return({
                ...state, 
                isFetching: true, 
                error: '',
                smurfs: []
            }); 
        case(FETCH_SMURFS_SUCCESS): 
            return({
                ...state, 
                isFetching: false, 
                error: '', 
                smurfs: action.payload
            })
        case(FETCH_SMURFS_FAIL):
        return({
            ...state, 
            error: action.payload, 
            isFetching: false
        });
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as parameters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary

// NEED TO ADD CASE FOR ADDSMURFS