import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Main({children}) {
  return (
    <>
    <Navbar/>
    {children} 
    <Footer />
    </>
  )
}

export default Main