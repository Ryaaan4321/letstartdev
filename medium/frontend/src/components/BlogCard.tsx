interface BlogCardProps {
    authorname: string,
    title: string,
    content: string,
    publisheddate: string
}
export const BlogCard = ({ authorname, title, content, publisheddate }: BlogCardProps) => {
    return <>
        <div className="p-7  border-b border-slate-500 pb-4">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name="Author Name" size="small" />
                </div>
                <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                    {authorname}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="flex justify-center flex-col pl-2 text-sm font-thin text-slate-500 ">{publisheddate}</div>
            </div>
            <div className="font-bold">{title}</div>
            <div>{content.slice(0, 100) + '.....'}</div>
            <div className="text-sm font-thin text-slate-500">{`${Math.ceil(content.length) / 100} minutes`}</div>
        </div>
    </>
}

export function Avatar({ name, size }: { name: string, size: string }) {
    return (
        <div>
            <div className={`relative inline-flex items-center justify-center 
  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 
  ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
            >
                <span className={`font-sm text-gray-600 dark:text-gray-300 ${size === "small" ? "text-sm" : "text-md"}`}>{name.charAt(0)}</span>
            </div>
        </div>
    )
}
function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-400"></div>
}