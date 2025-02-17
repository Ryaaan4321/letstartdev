interface QuoteProps {
    maintitle: string,
    descreption: string,
    context: string
}
export const Quote = ({ maintitle, descreption, context }: QuoteProps) => {
    return <div className="bg-slate-300 h-screen  flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="max-w-lg">
                <div className="text-3xl font-bold">{maintitle}</div>
                <div className="max-w-md text-xl font-semibold text-left mt-4">
                    {descreption}
                </div>
                <div className="max-w-md  text-gray-400  text-sm font-mono text-left">
                    {context}
                </div>
            </div>
        </div>
    </div>
}