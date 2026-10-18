// import Card from "@/components/Card";
import Card from "@/components/Card";
import Table from "@/components/Table";
import productionOktober from "@/data/datadummy_produksi";
const columns = [
  {
    header: "Line",
    key: "line",
    cell: (value) => value,
  },
  {
    header: "Plan",
    key: "plan",
    cell: (value) => value.toLocaleString("id-ID"),
  },
  {
    header: "Daily",
    key: "daily",
    cell: (value) => value.toLocaleString("id-ID"),
  },
];

const ProductionCard = () => {
  const totalBulan = productionOktober.line.reduce(
    (total, l) => total + l.plan,
    0,
  );
  const totalHarian = productionOktober.line.reduce(
    (total, l) => total + l.daily,
    0,
  );

  return (
    <Card className="p-4 flex flex-col gap-3">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Produksi</h2>
            <p className="text-sm text-slate-500">
              Bulan {productionOktober.bulan}
            </p>
          </div>
          <span className="text-sm text-slate-500">
            Update: {productionOktober.updatedAt}
          </span>
        </div>
        <span className="text-sm text-slate-400">
          Hari kerja: {productionOktober.hariKerja} hari
        </span>
      </div>

      <div className="mb-5 flex gap-3">
        <div className="flex-1 border rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Target Bulan Ini</p>
          <p className="text-xl font-semibold text-gray-900">
            {Math.round(totalBulan).toLocaleString()}
          </p>
        </div>
        <div className="flex-1 border rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Target Harian Bulan Ini</p>
          <p className="text-xl font-semibold text-gray-900">
            {Math.round(totalHarian).toLocaleString()}
          </p>
        </div>
      </div>

      <Table columns={columns} data={productionOktober.line} />
    </Card>
  );
};

export default ProductionCard;
