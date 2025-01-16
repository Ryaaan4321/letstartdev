export function Button({label}){
    return (
        <div className="mt-3">
            <button className="w-full p-1 text-md rounded-md" style={{backgroundColor:"#46464f",color:"whitesmoke"}}>{label}</button>
        </div>
    )
}