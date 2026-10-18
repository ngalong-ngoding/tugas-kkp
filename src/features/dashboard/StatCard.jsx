import Card from "@/components/Card";

const statCard = ({ title = "", value = "", icon: Icon }) => {
  return (
    <Card className="p-6">
      <div>
        <div className="flex gap-4">
          <Icon className="p-1 rounded- w-10 h-10 " />
          <div className="flex flex-col gap-4">
            <span className=" text-lg font-medium">{title}</span>
            <div>
              <span className="text-3xl font-bold tracking-tight">{value}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default statCard;
