import cn from "@/utils/cn";

const Card = ({ children, className = "" }) => {
  return (
    <div className={cn("w-full rounded-lg bg-white shadow-sm", className)}>
      {children}
    </div>
  );
};

export default Card;
