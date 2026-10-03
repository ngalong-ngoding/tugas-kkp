
const IconInfo = ({ icon: Icon }) => {
  return (
    <div className="bg-white p-2.5 rounded-xl flex items-center justify-center aspect-square cursor-pointer hover:bg-gray-50 transition-colors">
      <Icon className="w-5 h-5 text-gray-700" />
    </div>
  );
};

export default IconInfo