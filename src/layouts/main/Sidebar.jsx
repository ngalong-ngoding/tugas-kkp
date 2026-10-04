import { GalleryVertical, LayoutDashboard, LogOut, NotebookPen, RotateCcwClock, Settings } from "lucide-react"
import Menu from "../../components/Menu"

const SideBar = () => {
  return (
    <div className="flex gap-3 items-start">
      <div className="rounded-4xl bg-gray-100 flex flex-col gap-12 h-full p-8">
        <div className="flex gap-4 items-center">
          <div><img className="rounded-xl" src="/logo-ykk.webp" width={40} height={40} /></div>
          <h1>PT.YKK AP INDONESIA</h1>
        </div>

        <div className="flex flex-col gap-4">
          <p className="mb-2 text-2xl">Menu</p>
        
          <Menu title="Dashboard" icon={<LayoutDashboard />} to="/dashboard" />
          <Menu title="Leave Request" icon={<NotebookPen />} to="/leave-request" />
          <Menu title="Overtime History" icon={<RotateCcwClock />} to="/overtime" />
          <Menu title="Report Matrial" icon={<GalleryVertical/>} to="/report-matrial"/>
        </div>

        <div className="flex flex-col gap-4">
          <p className="mb-2 text-2xl">Generals</p>
          <Menu title="Setting" icon={<Settings />} to="/settings" />
          <Menu title="Logout" icon={<LogOut />} to="/logout" />
        </div>
      </div>
    </div>
  )
}

export default SideBar