import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
interface Blog {
  "content": string,
  "title": string,
  "id": number,
  "author": {
      "name": string
  }
  "published": boolean
}

export default function Blog(){
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    console.log("blog from the Blog Page = ",blog)
    if (loading) return <p>Loading...</p>;


    return (
        <div>
          <FullBlog blog={blog!} />
        </div>
    );
};