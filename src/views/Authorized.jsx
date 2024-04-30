import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"

export const Authorized = () => {
  if (localStorage.getItem("pawfect_token")) {
    return <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  }
  return <Navigate to='/login' replace />
}
