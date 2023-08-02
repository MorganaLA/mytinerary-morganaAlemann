import Navbar from "../components/Navbar"

function Main({children}) {
  return (
    <>
    <Navbar/>
    {children} 
    </>
  )
}

export default Main