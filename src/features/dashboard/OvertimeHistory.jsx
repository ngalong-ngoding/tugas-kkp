import Badge from "@/components/Badge"
import cn from "@/utils/cn"

const OvertimeHistory = () => {

    const historyHeader = ["Jenis", "Tanggal", "Status"]

    const History = [
        {
            jenis: "Lembur", tanggal: "12 Sep 2026", status: "disetujui"
        },
        {
            jenis: "Lembur", tanggal: "16 Sep 2026", status: "pending"
        },
        {
            jenis: "Lembur", tanggal: "17 Sep 2026", status: "ditolak"
        },
        {
            jenis: "Lembur", tanggal: "29 Sep 2026", status: "disetujui"
        },
        {
            jenis: "Lembur", tanggal: "25 Okt 2026", status: "disetujui"
        },
    ]

    const statusColor = 
    {
        disetujui: "green", 
        ditolak: "red", 
        pending: "yellow"
    }

    return (
        <div>
            <div className="rounded-lg">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            {historyHeader.map((label, i) => (
                                <th
                                    key={label}
                                    className={cn("p-2 text-left font-semibold", i == 0 && "pl-10")}
                                >
                                    {label}
                                </th>
                            ))}
                        </tr> 
                    </thead>

                    <tbody>
                        {History.map(({ jenis, tanggal, status }, index) => (
                            <tr key={index} className="border-b">
                                <td className="pl-10 py-4 ">{jenis}</td>
                                <td className="px-2 py-4 ">{tanggal}</td>
                                <Badge color={statusColor[status]}><td className="px-2 py-4 capitalize ">{status}</td></Badge>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default OvertimeHistory