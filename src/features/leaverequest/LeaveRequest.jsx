

import TableCell from "@/components/TableCell";
import { useState } from "react";
import TableRowHeader from "@/components/TableRowHeader";
import LeaveRequestForm from "./modal/LeaveRequestForm";

const LeaveRequest = () => {

  const [logLeave, setLogLeave] = useState([]);
  console.log(logLeave)

  const addOnCuti = (cuti) => {
    setLogLeave((prev) => {
      return [...prev, cuti];
    });


  };

  const headerCuti = ["Jenis Cuti", "Alasan Cuti", "Tanggal Cuti","Tanggal Selesai", "Status"]



  return (
    <div className="min-h-screen bg-gray-100 rounded-4xl flex flex-col p-6">
      {/* Header */}
      
      <LeaveRequestForm onAdd={addOnCuti} />
      <div className="bg-white mt-4 p-2 rounded-lg">
        <TableRowHeader>
          {headerCuti.map((label) =>
            <TableCell className="text-white" key={label}>{label}</TableCell>
          )}
        </TableRowHeader>
        <div className="flex flex-col gap-4">
          {logLeave.map((item, index) => {
          const tanggalMulai = item.tanggalMulai.toString();
          const tanggalSelesai = item.tanggalSelesai.toString();
            return (
            <div key={index} className="flex justify-between border mt-4 p-2 rounded-4xl">
              <TableCell>{item.jenisCuti}</TableCell>
              <TableCell>{item.alasanCuti}</TableCell>
              <TableCell>{tanggalMulai}</TableCell>
              <TableCell>{tanggalSelesai}</TableCell>
              <TableCell>{item.status}</TableCell>
            </div>)
          }
          )}
        </div>
      </div>

    </div>
  )
}

export default LeaveRequest