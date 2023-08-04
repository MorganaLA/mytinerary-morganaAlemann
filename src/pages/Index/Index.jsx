import Button from '../../components/Button'

function Index() {
  return (
    <section className='main bg-indigo-600/30 w-full'>
    <div
      className="mx-auto max-w-screen-xl px-4 pt-0 pb-2.5 sm:px-6 lg:py-8 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
        <div
          className="relative h-full overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
        >
          <img
            alt="Logo"
            src="../Logo2bgr.png"
            className="flex inset-0 h-44 w-44 object-contain mx-auto"
          />
        </div>

        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Find the perfect destination</h2>

          <p className="mt-2 text-gray-600">
            Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
          </p>

        <div className="mt-4">
          <Button
           title='View More'
           to='/Cities'
          />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Index