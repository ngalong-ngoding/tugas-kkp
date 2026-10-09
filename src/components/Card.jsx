

const Card = ({children, title = "", className = ""}) => {

return (
    <div className={`w-full rounded-lg bg-white mt-6 pt-4 flex flex-col gap-6${className}`}>
            <h3 className="text-xl pl-10 font-bold">{title}</h3>       
        {children}</div>
)

}

export default Card 