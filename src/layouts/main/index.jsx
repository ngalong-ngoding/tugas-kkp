import { Outlet } from "react-router-dom"
import SideBar from "./Sidebar"


const Layout = () => {
return (
    <div className="flex gap-4 p-4 h-screen w-full overflow-y-auto ">
      <SideBar/>
      
      <div className="flex-1 w-full overflow-y-auto">
        <Outlet/>
      </div> 
      </div>
)

}

export default Layout