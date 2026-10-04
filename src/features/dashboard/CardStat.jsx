
const CardStat = ({ label = "",
  value = "",
  unit = "",
  icon: Icon,
  className = "",

}) => {
  return (
    <div className={`bg-old-blue text-white p-6 rounded-2xl shadow-lg w-full ${className}`}>
      <div>
        
        <div className="flex gap-4">
          <Icon className="p-1 rounded-lg bg-old-blue-light w-10 h-10 " />
          <div>
          <span className="text-white text-lg font-medium">{label}</span>
          <div className=" flex items-center gap-2">
          <span className="text-5xl font-extrabold tracking-tight">{value}</span>
          <span className="text-xl font-medium text-blue-100 ">{unit}</span>
          </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>

  )
}

export default CardStat