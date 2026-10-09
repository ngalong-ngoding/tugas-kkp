import { jamLembur, maxLembur, presentaseLembur } from "@/utils/lembur"
import Calendar from "@/components/Calendar"
import Badge from "@/components/Badge"

const OvertimeRateCard = () => {
    const radius = 42
    const circumference = 2 * Math.PI * radius
    const cappedPercentage = Math.min(Math.max(presentaseLembur, 0), 100)
    const strokeDashoffset = circumference - (cappedPercentage / 100) * circumference

    const sisaLembur = jamLembur >= maxLembur
    const statusLembur = sisaLembur ? "Jam lembur sudah habis" : "Aman"
    const badgeColor = sisaLembur ? "red" : "green"
    const hasilLembur = maxLembur - jamLembur

    return (
        <div className="flex flex-col justify-between h-full p-2">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">Presentase Lembur Bulanan</h3>
                    <p className="text-xs text-gray-400">Dihitung dari batas maksimal {maxLembur} jam / bulan</p>
                </div>
                <Calendar />
            </div>

            {/* Content Body - DIBUAT PAS DI TENGAH (CENTER) */}
            <div className="flex-1 flex items-center justify-center my-auto py-6">
                <div className="">
                    {/* Lingkaran Progress */}
                    <div className="">
                        <div className="flex  gap-6 ">
                            <div className="relative w-70 h-70 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        className="text-gray-100"
                                        strokeWidth="10"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        className={`${sisaLembur ? "text-red-500" : "text-blue-600"} transition-all duration-700 ease-out`}
                                        strokeWidth="10"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-2xl font-extrabold text-gray-900 leading-none">
                                        {presentaseLembur}%
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium mt-1">Terpakai</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center justify-center gap-4 w-full">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-400 font-medium">Total Jam Terpakai</span>
                                    <span className="text-xl font-bold text-gray-900 mt-0.5">{jamLembur} / {maxLembur} Jam</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-400 font-medium mb-1">Sisa Kuota Lembur</span>
                                    <Badge color={badgeColor}>
                                        <span>
                                            {hasilLembur > 0 ? `${hasilLembur} Jam tersisa` : "0 Jam tersisa"}
                                        </span>
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Ringkasan Jam */}
                    </div>
                </div>
            </div>

            {/* Footer Status */}
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs text-gray-400">
                <span>Status Kuota</span>
                <Badge color={badgeColor}><span className={`statusLembur ${sisaLembur}`}>
                    {statusLembur}
                </span></Badge>
            </div>
        </div>
    )
}

export default OvertimeRateCard