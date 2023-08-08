import '../styles/Footer.css'
import Menu from './Menu'
import SocialMedia from './SocialMedia'
function Footer() {
  return (
    <footer className="bg-gray-500/40 absolute w-full start-0 inset-x-0 bottom-auto">
      <div className="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 flex flex-row justify-between flex-wrap items-center">
        <div className="absolute end-4 bottom-24 lg:bottom-[5rem] xl:bottom-[6rem]">
          <a
            className="inline-block rounded-full bg-indigo-500/80 p-2 text-white shadow transition hover:bg-indigo-600/90"
            href="#"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="flex justify-start items-center">
          <img className="w-10 h-10 pb-1 pl-1" src="./../LogoF.png" alt="Logo" />
          <p className="footer-text 4xl pb-1 pl-1 font-semibold">My Tinerary</p>
        </div>
        <div className="flex text-center justify-center font-medium mr-[-0.6rem]">
          <Menu />
        </div>
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer