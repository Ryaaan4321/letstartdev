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
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            setBlogs(response.data.blogs);
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