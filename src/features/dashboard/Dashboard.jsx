import IconInfo from "@/components/IconInfo";
import { Bell, MessageCircle, User } from "lucide-react";

import HistoryTable from "./HistoryTable";
import OvertimeHistory from "./OvertimeHistory";
import OvertimeRateCard from "./OvertimeRateCard";
import ProductionCard from "./ProductionCard";
import { useAuth } from "@/context/AuthContext";
import StatOverview from "./StatOverview";
import CardHistory from "./CardHistory";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Header User Profile */}
      <div className="bg-gray-100 rounded-3xl w-full flex justify-between items-center p-4 shadow-xs">
        <div className="flex gap-3 items-center">
          <IconInfo icon={User} />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{user.nama}</span>
            <a
              href="mailto:muhammadnurmajid160@gmail.com"
              className="text-xs text-gray-500 hover:text-blue-600 hover:underline transition-colors"
            >
              {user.email}
            </a>
          </div>
        </div>
        <div className="flex gap-2">
          <IconInfo icon={MessageCircle} />
          <IconInfo icon={Bell} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-100 rounded-3xl p-6 flex-1 flex flex-col gap-6">
        {/* Welcome Section */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Karyawan
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Akses cepat ke seluruh informasi dan kebutuhan kerja Anda dalam satu
            tempat.
          </p>
        </div>

        {/* Card Stats Component */}
        <StatOverview />

        {/* OvertimeRateCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <OvertimeRateCard />
          <ProductionCard />

          {/* History Section */}
          <CardHistory title="Riwayat Cuti Terbaru">
            <HistoryTable />
          </CardHistory>
          <CardHistory title="Riwayat Lembur Terbaru">
            <OvertimeHistory />
          </CardHistory>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
