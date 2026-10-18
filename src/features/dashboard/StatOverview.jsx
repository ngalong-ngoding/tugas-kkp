import { overtimeHours } from "@/utils/lembur";
import {
  Calendar,
  Calendar1,
  CalendarClock,
  RotateCcwClock,
  RotateCcwSquare,
} from "lucide-react";
import StatCard from "./StatCard";

const cardStatData = [
  {
    title: "Sisa Cuti Tahunan",
    value: "8 Hari",
    icon: Calendar,
  },
  {
    title: "Sisa Cuti Besar",
    value: "12 hari",
    icon: Calendar1,
  },
  {
    title: "Cuti Pending",
    value: 0,
    icon: RotateCcwClock,
  },
  {
    title: "Jam Lembur",
    value: `${overtimeHours} Jam`,
    icon: CalendarClock,
  },

  {
    title: "Lembur Pending",
    value: 0,
    icon: RotateCcwSquare,
  },
];
const StatOverview = () => {
  return (
    <div className="flex gap-4 justify-between mt-4 ">
      {cardStatData.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StatOverview;
