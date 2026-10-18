import { maxOvertime, overtimeHours, presentaseLembur } from "@/utils/lembur";
import Calendar from "@/components/Calendar";
import Badge from "@/components/Badge";
import Card from "@/components/Card";

const OvertimeRateCard = () => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const cappedPercentage = Math.min(Math.max(presentaseLembur, 0), 100);
  const strokeDashoffset =
    circumference - (cappedPercentage / 100) * circumference;

  const isOvertimeExceeded = overtimeHours >= maxOvertime;
  const overtimeStatus = isOvertimeExceeded ? "Jam lembur sudah habis" : "Aman";
  const badgeColor = isOvertimeExceeded ? "red" : "green";
  const remainingOvertime = maxOvertime - overtimeHours;

  return (
    <Card className="flex flex-col justify-between h-full px-10 py-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            Presentase Lembur Bulanan
          </h3>
          <p className="text-xs text-gray-400">
            Dihitung dari batas maksimal {maxOvertime} jam / bulan
          </p>
        </div>
        <Calendar />
      </div>

      <div className="flex-1 flex items-center justify-center my-auto py-6">
        {/* Lingkaran Progress */}
        <div className="flex gap-8">
          <div className="relative">
            <svg
              className="w-75 h-75 -rotate-90 transform"
              viewBox="0 0 100 100"
            >
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
                className={`${isOvertimeExceeded ? "text-red-500" : "text-blue-600"} transition-all duration-700 ease-out`}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="text-4xl font-extrabold text-gray-900 leading-none">
                {presentaseLembur}%
              </span>
              <span className="text-sm text-gray-400 font-medium mt-1">
                Terpakai
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center gap-4 w-full">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 font-medium">
                Total Jam Terpakai
              </span>
              <span className="text-2xl font-bold text-gray-900 mt-0.5">
                {overtimeHours} / {maxOvertime} Jam
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 font-medium mb-1">
                Sisa Kuota Lembur
              </span>
              <Badge color={badgeColor}>
                <span>
                  {remainingOvertime > 0
                    ? `${remainingOvertime} Jam tersisa`
                    : "0 Jam tersisa"}
                </span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Ringkasan Jam */}
      </div>

      {/* Footer Status */}
      <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs text-gray-400">
        <span>Status Kuota</span>
        <Badge color={badgeColor}>{overtimeStatus}</Badge>
      </div>
    </Card>
  );
};

export default OvertimeRateCard;
