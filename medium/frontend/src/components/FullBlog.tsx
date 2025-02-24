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
            <div className="grid grid-cols-12 px-10 w-full mt-8">
                <div className="col-span-8 bg-red-700">
                    <div className="text-3xl font-extrabold">{blog.title}</div>
                    <div className="text-xl font-sm">{blog.content}</div>
                </div>
                <div className="col-span-4">second one</div>
            </div>
        </div>
    );
};
