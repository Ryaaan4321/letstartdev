interface BlogCardProps {
    authorname: string,
    title: string,
    content: string,
    publisheddate: string
}
export const BlogCard = ({ authorname, title, content, publisheddate }: BlogCardProps) => {
    return <div className="border border-slate-500 pb-4">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name="Author Name"/>
            </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                {authorname}
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
            </div>
            <div className="flex justify-center flex-col pl-2 text-sm font-thin text-slate-500 ">{publisheddate}</div>
        </div>
        <div className="font-bold">{title}</div>
        <div>{content.slice(0,100) + '.....'}</div>
        <div className="text-sm font-thin text-slate-500">{`${Math.ceil(content.length) / 100} minutes`}</div>
    </div>
}

function Avatar({ name }: { name: string }) {
    return (
        <div>
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-sm text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
            </div>
        </div>
    )

}
function Circle(){
    return <div className="h-1 w-1 rounded-full bg-gray-400"></div>
}