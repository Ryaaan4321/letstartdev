import { AppBar } from "./AppBar"

interface Blog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "name": string
    }
    "published": boolean
}
export const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                    <div className="col-span-8 ">
                        <div className="text-3xl font-extrabold">{blog.title}</div>
                        <div className="text-xl font-sm pt-4">{blog.content}</div>
                        <div className="text-slate-400 font-sm pt-4">Posted on 2nd Dec 2024</div>
                    </div>
                    <div className="col-span-4 bg-green-200 ">Author
                        <div className="font-bold text-xl">{blog.author.name || "Anonymous"}</div>
                        <div>Random ability to catc the user attention</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
