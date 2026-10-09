
import cn from "@/utils/cn";

const Badge = ({ children, color = "green", className = "" }) => {
    const colors = {
        green: "text-green-700 bg-green-200",
        red: "text-red-700 bg-red-200",
        yellow: "text-yellow-700 bg-yellow-200",
    };

    return (
        <span
            className={cn(
                "rounded-full px-3 py-1 w-fit text-sm",
                colors[color], className
            )}>
            {children}
        </span>
    );
};

export default Badge;