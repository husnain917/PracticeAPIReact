import { useEffect,useState } from "react";
import { showUser,deleteUser } from "../../store/actions/UserAction";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UseShowUsers() {

    const dispatch = useDispatch();

    // navigation hook
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    // Store Data
    const allData = useSelector((store) => store?.UserReducer?.userData);
    // console.log('data in User File', allData.data);

    // Show Hook
    useEffect(() => {
        dispatch(showUser(setLoading))
    }, [])


    // Delete Handler
    const deleteHandler = (id) => {
        // console.log(id,'user id');

        dispatch(deleteUser(id,setLoading))
    }


    // Delete Handler
    const updateHandler = (items) => {
        // console.log(items,'user data');
        navigate('/', {
            state : {
                singleUser : items,
            }
        })
    }

    return {
        allData,
        loading,
        deleteHandler,
        updateHandler,
    }
}
