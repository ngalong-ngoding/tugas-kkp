import { useState } from "react";
import LeaveRequestForm from "./modal/LeaveRequestForm";
import LeaveRequestDelete from "./modal/LeaveRequestDelete";
import LeaveApplication from "./LeaveApplication";
import Card from "@/components/Card";
import LeaveRequestTable from "./LeaveRequestTable";
import Badge from "@/components/Badge";

const LeaveRequest = () => {
  const [leaveList, setLeaveList] = useState([]);
  const [openedDeleteModal, setOpenedDeleteModal] = useState(false);
  const [openedFormModal, setOpenedFormModal] = useState(false);
  const [selectedLeaveId, setSelectedLeaveId] = useState(null);

  const editingLeave = leaveList.find((leave) => leave.id === selectedLeaveId);

  const openFormModal = () => {
    setOpenedFormModal(true);
  };

  const closeFormModal = () => {
    setSelectedLeaveId(null);
    setOpenedFormModal(false);
  };

  const openDeleteModal = () => {
    setOpenedDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setOpenedDeleteModal(false);
    setSelectedLeaveId(null);
  };

  const onClickEdit = (id) => {
    setSelectedLeaveId(id);
    setOpenedFormModal(true);
  };

  const onClickDelete = (id) => {
    setSelectedLeaveId(id);
    openDeleteModal();
  };

  const deleteLeave = () => {
    setLeaveList((prev) => prev.filter((item) => item.id !== selectedLeaveId));
    closeDeleteModal();
  };

  const addLeave = (cuti) => {
    setLeaveList((prev) => [...prev, cuti]);
  };

  const editLeave = (editingLeave) => {
    setLeaveList((prev) => {
      const result = prev.map((leave) => {
        if (leave.id === selectedLeaveId) {
          return editingLeave;
        } else {
          return leave;
        }
      });
      return result;
    });
  };

  const statusColors = {
    onApplication: "blue",
  };

  return (
    <div className="min-h-screen rounded-3xl bg-slate-50 p-4 sm:p-6 lg:p-8 ">
      {/* Form Pengajuan */}
      <div className="flex flex-col gap-4">
        <LeaveApplication onApplication={openFormModal} />
        {/* Tabel Riwayat Cuti */}
        <Card>
          {/* Judul Tabel */}
          <div className="flex flex-col gap-1 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-slate-800">
                Riwayat Pengajuan
              </h2>
              <p className="text-sm text-slate-500">
                Daftar pengajuan cuti yang telah dicatat.
              </p>
            </div>
            <Badge color={statusColors["onApplication"]}>
              <span>{leaveList.length} Pengajuan</span>
            </Badge>
          </div>
          {/* Table */}
          <LeaveRequestTable
            leaveList={leaveList}
            onEdit={onClickEdit}
            onDelete={onClickDelete}
          />

          {/* Footer */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
            <p className="text-xs text-slate-500">
              Menampilkan {leaveList.length} data pengajuan cuti
            </p>
          </div>
        </Card>

        {openedDeleteModal && (
          <LeaveRequestDelete
            onCloce={closeDeleteModal}
            onDelete={deleteLeave}
          />
        )}
        {openedFormModal && (
          <LeaveRequestForm
            onAdd={addLeave}
            onClose={closeFormModal}
            defaultValue={editingLeave}
            onEdit={editLeave}
          />
        )}
      </div>
    </div>
  );
};

export default LeaveRequest;
