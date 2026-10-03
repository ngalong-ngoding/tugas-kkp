import cn from "@/utils/cn";

const Card = ({ children, className = "" }) => {
  return (
    <div className={cn("rounded-lg bg-white shadow-xl", className)}>
      {children}
    </div>
  );
};

export default Card;
