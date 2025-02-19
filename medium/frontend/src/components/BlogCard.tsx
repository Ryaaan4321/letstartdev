interface BlogCardProps {
    authorname: string,
    title: string,
    content: string,
    publisheddate: string
}
export const BlogCard = ({ authorname, title, content, publisheddate }: BlogCardProps) => {
    return <div>
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name="Author Name"/>
            </div>
            <div className="font-extralight pl-2">
                {authorname}
            </div>
            <div className="pl-2 font-thin text-slate-500">{publisheddate}</div>
        </div>
        <div>{title}</div>
        <div>{content}</div>
        <div>{`${Math.ceil(content.length) / 100} minutes`}</div>
        <div className="bg-gray-100 h-1 w-full"></div>
    </div>
}

function Avatar({ name }: { name: string }) {
    return (
        <div>
            <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-sm text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
            </div>
        </div>
    )

}