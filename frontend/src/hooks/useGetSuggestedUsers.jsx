import { AppContext } from "@/context/AppContext";
import { setSuggestedUsers } from "@/redux/authSlice";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetSuggestedUsers = () => {
    const { backendUrl } = useContext(AppContext);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSuggestedUsers = async () => {
            try {
                const res = await axios.get( backendUrl + '/api/v1/user/suggested', { withCredentials: true });
                if (res.data.success) { 
                    dispatch(setSuggestedUsers(res.data.users));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSuggestedUsers();
    }, []);
};
export default useGetSuggestedUsers;