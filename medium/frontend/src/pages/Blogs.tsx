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
                <div className='max-w-xl'>
                    {blogs?.map(blog => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            content={blog.content}
                            authorname={blog.author?.name}
                            publisheddate='2nd Feb 2024'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}    