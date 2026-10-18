import cn from "../utils/cn"


const Button = ({ children = "", variant = "primary", onClick = () => {}}) => {
    const buttonVariant = {

        primary: "bg-blue-500 text-white hover:bg-blue-700", 
        secondary: "bg-red-500 text-white hover:bg-red-700",
        tertiary: "bg-blue-900 text-white",
        
    }

    return (
    <button onClick={onClick} className={cn("rounded-lg w-fit p-2 cursor-pointer", buttonVariant[variant])}>{children}</button>

    )
}

export default Button