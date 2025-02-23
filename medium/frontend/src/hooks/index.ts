import axios from 'axios';
import { useEffect, useState } from 'react';
import { BACKEND_URL } from '../config';
interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
    "published":boolean
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            console.log("response data from the hook",response.data)
            setBlogs(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    })
    console.log("blogs from the hook = ",blogs)
    return {
        loading,
        blogs
    }

}