import { dummyUsers, ROLES } from "@/data/dataDummy_users"
import {createContext, useContext, useState } from "react"

const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(dummyUsers[ROLES.KARYAWAN])
    const switchRole = (role) => {
        setUser(dummyUsers[role])
    }

    const value = {user, role: user.role, switchRole}
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
//eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if(!ctx) throw new Error("useAuth harus dipakai di dalam AuthProvider")
        return ctx
}