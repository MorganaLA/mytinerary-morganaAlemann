import Button from '../components/Button'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <section className='main'>
      <div className='bg-indigo-600/30 w-full h-full py-[.4rem] sm:py-[3.5rem] md:py-[5.5rem] lg:py-0'>
        <div
          className="mx-auto max-w-screen-xl max-h-screen-xl px-4 pt-0 pb-3 md:pb-10 md:px-16 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div
              className="relative h-full overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
              <img
                alt="Logo"
                src="../Logo2bgr.png"
                className="flex inset-0 h-48 w-48 mt-[-1rem] sm:h-64 sm:w-64 md:h-80 md:w-80 lg:my-16 object-contain mx-auto"
              />
            </div>

            <div className="lg:py-24 lg:px-14 mt-[-1.5rem] sm:mt-[-5.5rem] md:mt-[-2.6rem] lg:mt-6">
              <p className="my-4 sm:mt-4 sm:mb-8 sm:text-xl lg:text-[1.5rem] text-base text-gray-700 italic">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
              <div className="mt-3">
                <Button
                  text='View More'
                  to='./cities'
                  className="button h-10 group relative inline-block focus:outline-none focus:ring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </section>

  )
}

export default Home