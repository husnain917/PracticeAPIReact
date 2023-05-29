import { useRef, useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { addUser, updateSingleUser } from "../../store/actions/UserAction";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UseUsers() {

    const dispatch = useDispatch();

    // location hook
    const location = useLocation();

    // navigation hook
    const navigate = useNavigate();


    // States
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(false);


    // Focus Function start
    let textInputOne = useRef(null);
    let textInputTwo = useRef(null);
    let textInputThree = useRef(null);


    const focusHandlerName = () => {
        setTimeout(() => {
            textInputOne.current.focus();
        }, 100);
    }
    const focusHandlerEmail = () => {
        setTimeout(() => {
            textInputTwo.current.focus();
        }, 100);
    }
    const focusHandlerPhoneNum = () => {
        setTimeout(() => {
            textInputThree.current.focus();
        }, 100);
    }
    // Focus Function End


    // Add User
    const addUserHandler = () => {
        if (!userName || !email || !phoneNo) {
            alert('Please Enter Fields')
        }
        let data = {
            userName: userName,
            email: email,
            phoneNo: phoneNo,
        }

        dispatch(addUser(data, setLoading))

        setUserName('')
        setEmail('')
        setPhoneNo('')
    }


    // data get from navigation
    useEffect(() => {
        if (location?.state !== null) {
            // console.log(location.state.singleUser,'data user file for navigation');
            updateUser(location)
        }
    }, [])


    // update Handler
    const updateUser = (location) => {
        setUserName(location?.state?.singleUser?.userName)
        setEmail(location?.state?.singleUser?.email)
        setPhoneNo(location?.state?.singleUser?.phoneNo)
        setFlag(true);
    }


    const updateHandler = () => {
        if (!userName || !email || !phoneNo) {
            alert('Please Enter Fields')
        }
        let data = {
            id: location?.state?.singleUser?._id,
            userName: userName,
            email: email,
            phoneNo: phoneNo,
        }

        dispatch(updateSingleUser(data, setLoading))

        setUserName('')
        setEmail('')
        setPhoneNo('')
        navigate('/showUsers')
    }




    return {
        focusHandlerName,
        focusHandlerEmail,
        focusHandlerPhoneNum,
        textInputOne,
        textInputTwo,
        textInputThree,
        setUserName,
        setEmail,
        setPhoneNo,
        userName,
        email,
        phoneNo,
        addUserHandler,
        loading,
        flag,
        updateHandler,
    }
}
