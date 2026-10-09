
const ProductionCard = ({ data }) => {
    const totalBulan = data.line.reduce(
        (total, l) => total + l.plan,
        0
    );

    const totalHarian = data.line.reduce(
        (total, l) => total + l.daily,
        0
    );

    return (
        <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-4">
                Target Produksi {data.bulan}
            </h3>

            {/* Ringkasan Target */}
            <div className="mb-5 flex gap-3">
                <div className="flex-1 rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">
                        Target Bulan Ini
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                        {Math.round(totalBulan).toLocaleString()}
                    </p>
                </div>

                <div className="flex-1 rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">
                        Target Harian Bulan Ini
                    </p>
                    <p className="text-xl font-semibold text-gray-900">
                        {Math.round(totalHarian).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Tabel Target Produksi */}
            <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                    <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="px-4 py-3 text-left font-semibold">
                                Line
                            </th>
                            <th className="px-4 py-3 text-right font-semibold">
                                Target / Bulan
                            </th>
                            <th className="px-4 py-3 text-right font-semibold">
                                Target / Hari
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {data?.line?.map((l) => (
                            <tr
                                key={l.line}
                                className="transition-colors hover:bg-slate-50"
                            >
                                <td className="px-4 py-3 font-medium text-gray-800">
                                    {l.line}
                                </td>

                                <td className="px-4 py-3 text-right text-gray-600 tabular-nums">
                                    {l.plan.toLocaleString("id-ID")}
                                </td>

                                <td className="px-4 py-3 text-right">
                                    <span className="inline-block rounded-md border border-sky-100 bg-sky-50 px-2 py-1 font-semibold text-sky-800 tabular-nums">
                                        {l.daily.toLocaleString("id-ID")}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                    {/* Total */}
                    <tfoot className="border-t-2 border-slate-200 bg-slate-50">
                        <tr>
                            <td className="px-4 py-3 font-bold text-gray-900">
                                Total
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-gray-900 tabular-nums">
                                {Math.round(totalBulan).toLocaleString("id-ID")}
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-sky-800 tabular-nums">
                                {Math.round(totalHarian).toLocaleString("id-ID")}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default ProductionCard
