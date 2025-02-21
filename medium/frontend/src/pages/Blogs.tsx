import { AppBar } from '../components/AppBar'
import { BlogCard } from '../components/BlogCard'
import { useBlogs } from '../hooks'
export const Blogs = () => {
    const {loading,blog}=useBlogs();
    if(loading){
        return <div>Loading</div>
    }
    return (
        <div>
            <AppBar/>
            <div className='flex justify-center'>
                <div className=' max-w-xl'>
                    <BlogCard title='How does this website will look like when aryan will make this' content='there is a content How does this website will look like when aryan will make this How does this website will look like when aryan will make this How does this website will look like when aryan will make this' authorname='Naam' publisheddate='23/10/2024' />
                    <BlogCard title='How does this website will look like when aryan will make this' content='there is a content How does this website will look like when aryan will make this How does this website will look like when aryan will make this How does this website will look like when aryan will make this' authorname='Naam' publisheddate='23/10/2024' />
                    <BlogCard title='How does this website will look like when aryan will make this' content='there is a content How does this website will look like when aryan will make this How does this website will look like when aryan will make this How does this website will look like when aryan will make this' authorname='Naam' publisheddate='23/10/2024' />
                    <BlogCard title='How does this website will look like when aryan will make this' content='there is a content How does this website will look like when aryan will make this How does this website will look like when aryan will make this How does this website will look like when aryan will make this' authorname='Naam' publisheddate='23/10/2024' />
                </div>
            </div>
        </div>
    )
}