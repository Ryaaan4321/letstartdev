interface BlogCardProps{
    authorname:string,
    title:string,
    content:string,
    publisheddate:string
}
export const  BlogCard=({authorname,title,content,publisheddate}:BlogCardProps)=>{
    return <div>
       <div>{authorname} . {publisheddate}</div>
       <div>{title}</div>
       <div>{content}</div>
    </div>
}