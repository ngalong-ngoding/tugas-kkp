import Card from "@/components/Card";

const ContentCard = ({ title, children = null }) => {
  return (
    <Card>
      <h1 className="text-xl text-red-500">{title}</h1>
      {children}
    </Card>
  );
};

export default ContentCard;
