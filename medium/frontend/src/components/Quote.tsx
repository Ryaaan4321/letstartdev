interface QuoteProps{
    maintitle:string,
    descreption:string,
    context:string
}
export const Quote = ({maintitle,descreption,context}:QuoteProps) => {
    return <div className="bg-slate-300 h-screen  flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="max-w-lg text-3xl font-bold">
                {maintitle}
            </div>
        </div>
        <div className="max-w-md text-center  text-xl font-semibold">
            {descreption}
        </div>
        <div className="max-w-md text-center text-gray-400  text-xl font-semibold">
            {context}
        </div>
    </div>
}