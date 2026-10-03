import historyLeave from "@/data/dataDummyLeave";
import Table from "@/components/Table";
import Badge from "@/components/Badge";

const cutiColor = {
  disetujui: "green",
  ditolak: "red",
  pending: "yellow",
};

const CutiTable = () => {
  const columnsCuti = [
    { key: "jenis", header: "Jenis Cuti", cell: (value) => value },
    { key: "tanggal", header: "Tanggal", cell: (value) => value },
    {
      key: "status",
      header: "Status",
      cell: (value) => (
        <Badge color={cutiColor[value]} className="capitalize">
          {value}
        </Badge>
      ),
    },
  ];

  return <Table columns={columnsCuti} data={historyLeave} />;
};

export default CutiTable;
