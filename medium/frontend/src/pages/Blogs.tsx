import { AppBar } from '../components/AppBar'
import { BlogCard } from '../components/BlogCard'
import { useBlogs } from '../hooks'

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AppBar />
            <div className='flex justify-center'>
                <div className=''>
                    {blogs.map((blog:any)=> 
                        <BlogCard
                            key={blog.id || Math.random()} 
                            title={blog.title || "Untitled Blog"}
                            content={blog.content || "No content available"}
                            authorname={blog.author?.name || "Unknown Author"}
                            publisheddate={new Date().toString()}
                            id={blog.id}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}    