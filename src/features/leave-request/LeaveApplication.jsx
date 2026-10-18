import Button from "@/components/Button";
import Card from "@/components/Card";

const LeaveApplication = ({ onApplication = () => {} }) => {
  return (
    <Card className="p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Pengajuan Cuti
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Kelola dan pantau riwayat pengajuan cuti kamu.
          </p>
        </div>
        <Button onClick={onApplication}>Ajukan Cuti</Button>
      </div>
    </Card>
  );
};

export default LeaveApplication;
