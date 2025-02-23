import { AppBar } from "../components/AppBar";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export default function Blog(){
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });

    if (loading) return <p>Loading...</p>;


    return (
        <div>
          hmlo hmlo here is the blog
        </div>
    );
};