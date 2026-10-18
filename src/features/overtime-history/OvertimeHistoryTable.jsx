import Badge from "@/components/Badge";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import Table from "@/components/Table";
import { CalendarDays } from "lucide-react";

const OvertimeHistoryTable = ({ listHistory, onDelete = () => {} }) => {
  const statusColors = {
    disetujui: "green",
    ditolak: "red",
    pending: "yellow",
  };

  const columns = [
    {
      header: "Alasan lembur",
      key: "alasanLembur",
      cell: (value) => value,
    },
    {
      header: "Jam Mulai",
      key: "startTime",
      cell: (value) => value,
    },
    {
      header: "Jam Selesai",
      key: "endTime",
      cell: (value) => value,
    },
    {
      header: "Status",
      key: "status",
      cell: (value) => <Badge color={statusColors[value]}>{value}</Badge>,
    },
    {
      key: "aksi",
      header: "Aksi",
      cell: (_, item) => (
        <div className="flex gap-2">
          <Button onClick={() => onDelete(item)} variant="secondary">
            Hapus
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={listHistory}
      emptyState={
        <EmptyState
          col={columns.length}
          icon={CalendarDays}
          title="Belum ada pengajuan lembur"
          desc="Riwayat lembur kamu akan muncul disini"
        />
      }
    />
  );
};

export default OvertimeHistoryTable;
