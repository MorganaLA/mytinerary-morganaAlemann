import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Main() {
  return (
    <div className="max-h-screen">
    <Navbar/>
    <main className="min-h-screen">
    <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default Main