import { Calendar, CalendarClock, RotateCcwClock, RotateCwSquare } from "lucide-react";
import { jamLembur } from "@/utils/lembur";

const dataDummy_card = [
    {
        title:"Sisa Cuti Tahunan",
        remaining: 12,
        total:"/ 12 hari",
        icon:Calendar
    },
    {
        title:"Sisa Cuti Besar",
        remaining: 20,
        total:"/ 20 hari",
        icon:Calendar
    },
    {
        title:"Total Jam Lembur",
        remaining: jamLembur,
        total:"Jam",
        icon:CalendarClock
    },
    {
        title:"Cuti Pending",
        remaining: 0,
        icon:RotateCwSquare
    },
    {
        title:"Lembur Menunggu Approval",
        remaining: 0,
        icon:RotateCcwClock
    },




]

export default dataDummy_card