import Badge from "@/components/Badge"
import cn from "@/utils/cn"

const HistoryTable = ({ data = []}) => {

    const historyHeader = ["Jenis", "Tanggal", "Status"]




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
                        <tr className="border-b border-gray-200">
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
                        {data.map(({ jenis, tanggal, status }, index) => (
                            <tr key={index} className="border-b border-gray-200 ">
                                <td className="pl-10 py-4 ">{jenis}</td>
                                <td className="px-2 py-4 ">{tanggal}</td>
                                <td className="px-2 py-4 capitalize ">
                                    <Badge color={statusColor[status]}>{status}</Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default HistoryTable

