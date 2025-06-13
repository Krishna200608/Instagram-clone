import { AppContext } from "@/context/AppContext";
import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetAllPost = () => {
	const backendUrl = "https://instagram-clone-5sjr.onrender.com";
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const res = await axios.get( backendUrl + '/api/v1/post/all', { withCredentials: true });
                if (res.data.success) { 
                    console.log(res.data.posts);
                    dispatch(setPosts(res.data.posts));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPost();
    }, []);
};
export default useGetAllPost;