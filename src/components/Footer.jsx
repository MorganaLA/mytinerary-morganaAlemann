import '../styles/Footer.css'
function Footer() {
  return (
    <div className="footer m-0 border-t-4 md:border-t-8 border-white z-10 absolute w-full right-0 gap-x-0 flex h-10 sm:h-[3rem] md:h-[6rem] lg:h-[4rem] bg-gray-500/40 bottom-0 sm:bottom-auto place-items-start">
        <img className="w-8 mt-auto pb-1 pl-1" src="./../LogoF.png" alt="Logo" />
        <p className="footer-text text-base mt-auto pb-1 pl-1 font-semibold">My Tinerary</p>
    </div>
  )
}

export default Footer