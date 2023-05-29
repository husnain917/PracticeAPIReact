import { ADD_USER,SHOW_USER,DELETE_USER,UPDATE_USER } from "../actions/UserAction";


// initial state 
const initialState = {
    userData: null,
}



export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        // Add User

        case ADD_USER:
            return {
                ...state,
                userData: action?.payload,
            }


        // Show User

        case SHOW_USER:
            return {
                ...state,
                userData: action?.payload,
            }


        // Delete User

        case DELETE_USER:
            return {
                ...state,
                userData: action?.payload,
            }


        // Update User

        case UPDATE_USER:
            return {
                ...state,
                userData: action?.payload,
            }
        default:
            return state;
    }
}
