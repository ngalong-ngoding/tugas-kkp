import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from "./pages/dashboard/DashboardPage"

import LeaveRequestPage from "./pages/leaverequest/LeaveRequestPage"
import Layout from "./layouts/main"
import OvertimeHistoryPage from "./pages/overtimehistory/OvertimeHistoryPage"
import DashboardPage from "./pages/dashboard/DashboardPage"
import ReportMatrialPage from "./pages/reportmatrial/ReportMatrialPage"


const App = () => {
  return (
    <BrowserRouter>

        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/leave-request" element={<LeaveRequestPage/>} />
          <Route path="/overtime" element={<OvertimeHistoryPage/>}/>
          <Route path="/report-matrial" element={<ReportMatrialPage/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App