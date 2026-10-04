import Badge from "@/components/Badge"
import cn from "@/utils/cn"

const ListKaryawan = ({ data = []}) => {

    const historyHeader = [ "Nama", "Departemen", "Status", "Nomor Induk"]




    const statusColor =
    {
        hadir: "green",
        lembur: "red",
        cuti: "yellow"
    }

    return (
        <div>
            <div className="rounded-lg">
                <table className="w-full border-collapse" >
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
                        {data.map(({ nama, departemen, status, nomorInduk }, index) => (
                            <tr key={index} className="border-b border-gray-200 ">
                                <td className="pl-10 py-4 ">{nama}</td>
                                <td className="px-2 py-4 ">{departemen}</td>
                                 <td className="px-2 py-4 capitalize ">
                                    <Badge color={statusColor[status]}>{status}</Badge>
                                </td>
                                <td className="px-2 py-4 ">{nomorInduk}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default ListKaryawan

