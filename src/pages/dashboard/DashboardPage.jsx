import { useAuth } from "@/context/AuthContext"
import Dashboard from "@/features/dashboard/Dashboard"
import DashboardLeader from "@/features/dashboardLeader/DashboardLeader"


const dashboardByRole = {
  karyawan: Dashboard,
  leader: DashboardLeader
}

const DashboardPage = () => {

  const { role } = useAuth()
  const Tampilan = dashboardByRole[role] ?? Dashboard

  return <Tampilan/>
   
}
export default DashboardPage