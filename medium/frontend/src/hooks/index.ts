import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
                setBlog(response.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            })
    })
    return {
        loading,
        blog
    }

}