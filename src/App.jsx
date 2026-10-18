import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard/DashboardPage";

import LeaveRequestPage from "./pages/leaverequest/LeaveRequestPage";
import Layout from "./layouts/main";
import OvertimeHistoryPage from "./pages/overtimehistory/OvertimeHistoryPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/leave-request" element={<LeaveRequestPage />} />
            <Route path="/overtime" element={<OvertimeHistoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
