import Card from "@/components/Card";
import OvertimeHistoryHeader from "./OvertimeHistoryHeader";
import OvertimeHistoryTable from "./OvertimeHistoryTable";
import Badge from "@/components/Badge";
import { overtimeHistory } from "@/data/dataDummy_overtime";
import { useState } from "react";
import OvertimeHistoryDelete from "./modal/OvertimeHistoryDelete";

const OvertimeHistory = () => {
  const [openedDeleteModal, setOpenedDeleteModal] = useState(false);
  const [history, setHistory] = useState(overtimeHistory);
  const [selectedHistory, setSelectedHistory] = useState(null);

  const openDeleteModal = (item) => {
    setOpenedDeleteModal(true);
    setSelectedHistory(item);
  };

  const closeDeleteModal = () => {
    setOpenedDeleteModal(false);
    setSelectedHistory(null);
  };

  const handleDelete = () => {
    setHistory((prev) => prev.filter((item) => item !== selectedHistory));
    closeDeleteModal();
  };

  return (
    <div className="min-h-screen rounded-3xl bg-slate-50 p-4 sm:p-6 lg:p-8 ">
      <div className="flex flex-col gap-4">
        <OvertimeHistoryHeader />
        <Card>
          <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-800">Riwayat Lembur</h2>
              <p className="text-sm text-slate-500">
                Daftar lembur yang telah dicatat.
              </p>
            </div>
            <Badge color="blue">
              <span>{history.length} Pengajuan</span>
            </Badge>
          </div>
          <OvertimeHistoryTable
            onDelete={openDeleteModal}
            listHistory={history}
          />

          {openedDeleteModal && (
            <OvertimeHistoryDelete
              onCloce={closeDeleteModal}
              onDelete={handleDelete}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default OvertimeHistory;
