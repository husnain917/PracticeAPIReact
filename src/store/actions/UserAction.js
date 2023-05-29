import axios from 'axios';


// Add User Type
export const ADD_USER = "ADD_USER";
export const SHOW_USER = "SHOW_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";


// env variable
// const baseURL =  process.env.URL
// console.log(baseURL,'base URL');
// console.log(process.env.REACT_APP_BASE_URL,'url');


// action Add User 
export const addUser = (data, setLoading) => async (dispatch) => {

    try {
        setLoading(true)
        const response = await axios.post(`http://localhost:7000/users/createUser`,data)
        // console.log('response in action', response.data);

        if (response) {
            dispatch({
                type: ADD_USER,
                payload: response?.data
            })
        }

    } catch (error) {
        console.log('error in response', error);
    } finally {
        setLoading(false)
    }
}


// action Show User
export const showUser = (setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        const response = await axios.get(`http://localhost:7000/users/getUsers`)
        // console.log('response in action', response.data);

        if (response) {
            dispatch({
                type: SHOW_USER,
                payload: response?.data
            })
        }

    } catch (error) {
        console.log('error in response', error);
    } finally {
        setLoading(false)
    }
}


// action Delete User
export const deleteUser = (id, setLoading) => async (dispatch) => {

    try {
        setLoading(true)
        const response = await axios.delete(`http://localhost:7000/users/deleteUser?id=${id}`)
        // console.log('response in action', response.data);

        if (response) {
            dispatch({
                type: DELETE_USER,
                payload: response?.data
            })
        }

    } catch (error) {
        console.log('error in response', error);
    } finally {
        setLoading(false)
    }
}


// action Update User
export const updateSingleUser = (data, setLoading) => async (dispatch) => {

    try {
        setLoading(true)
        const response = await axios.put(`http://localhost:7000/users/updateUser/${data?.id}`,data)
        // console.log('response in action', response.data);

        if (response) {
            dispatch({
                type: UPDATE_USER,
                payload: response?.data
            })
        }

    } catch (error) {
        console.log('error in response', error);
    } finally {
        setLoading(false)
    }
}