import Card from "@/components/Card";

const CardHistory = ({ title = "", children = null }) => {
  return (
    <Card className="flex flex-col gap-6">
      <h3 className="text-xl mt-8 ml-10 font-bold">{title}</h3>
      {children}
    </Card>
  );
};

export default CardHistory;
