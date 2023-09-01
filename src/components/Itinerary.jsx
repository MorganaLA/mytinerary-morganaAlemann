import { Disclosure } from '@headlessui/react'

function Itinerary({ title, name, photo, duration, likes, price, hashtags, comments }) {

    const svgMarkup = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-teal-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const svgArray = [];
    if (price >= 1 && price <= 5) {
        for (let i = 0; i < price; i++) {
            svgArray.push(
                <span key={i}>
                    {svgMarkup}
                </span>
            );
        }
    }

    return (
        <section className='itinerary w-full h-full'>
            <div className='bg-indigo-600/20 pb-6 my-4'>

                <h3 className='text-2xl font-medium text-gray-900 py-4 text-center bg-indigo-600/20'>{title}</h3>
                <div className='flex flex-col-reverse justify-around items-center smd:flex-row my-6'>
                    <div className='flex flex-col place-items-center my-4 w-1/4'>
                        <p className='flex flex-row gap-1'>Price: <span className='flex flex-row gap-1'>{svgArray}</span></p>
                        <p>Duration: <span>{duration}</span> Hours</p>
                    </div>
                    <div className='flex flex-col place-items-center my-4 w-1/4'>
                        <img className='rounded-full w-40 h-40 mx-auto object-cover object-center' src={photo} alt={name} />
                        <h4 className='text-xl text-center mt-4 font-medium'>{name}</h4>
                    </div>
                    <div className='flex flex-col place-items-center my-4 w-1/4'>
                        <span className='flex flex-row gap-1 align-middle font-semibold'>{likes} <img className="w-6 h-6 animate-beat" src="./../LogoF.png" alt="Logo" /></span>

                        <div className='flex flex-wrap gap-x-3 text-justify'>
                            {hashtags.map((hashtag, index) => (
                                <p key={index} className="hashtag">
                                    #{hashtag}
                                </p>))}
                        </div>
                    </div>
                </div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Panel>
                                <div className='activities rounded-none' id='activities'>
                                    <h3 className='text-2xl font-medium text-gray-900 py-4 text-center bg-indigo-600/20'>Activities</h3>
                                    <div className='flex flex-col justify-around items-center smd:flex-row my-6'>
                                        <div className='flex flex-row items-center mt-2'>
                                            <p className="my-4 italic text-base text-black">
                                                Under construction...
                                            </p>
                                            <img className="w-6 h-6 mx-2 animate-beat" src="./../LogoF.png" alt="Logo" />
                                        </div>
                                    </div>
                                    {/* <div className='flex flex-col justify-around items-center smd:flex-row my-6'>
                                        <div className='my-4'><img className='w-48 h-48 object-cover rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_50Z441beaDSEpxOilJ4Ezd5IZDQ43JJICA&usqp=CAU" alt="" /><p className='bg-indigo-600/20'>Visit the jungle</p></div>
                                        <div className='my-4'><img className='w-48 h-48 object-cover rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwzYLbkXVdwQH-tdMLC1650-eLKvj_0HsIA&usqp=CAU" alt="" /><p className='bg-indigo-600/20'>Visit more jungle</p></div>
                                        <div className='my-4'><img className='w-48 h-48 object-cover rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWmfEMj3f2Zsr6J6j1jzhby3CQkOTQ__0RZA&usqp=CAU" alt="" /><p className='bg-indigo-600/20'>Visit Jorge</p></div>
                                    </div> */}
                                </div>
                                <div className='comments rounded-none'>
                                    <h3 className='text-2xl font-medium text-gray-900 py-4 text-center bg-indigo-600/20'>Comments</h3>
                                    <div className='flex flex-col justify-around items-center smd:flex-row my-6'>
                                        <div className='flex flex-row items-center mt-2'>
                                            <p className="my-4 italic text-base text-black">
                                                Under construction...
                                            </p>
                                            <img className="w-6 h-6 mx-2 animate-beat" src="./../LogoF.png" alt="Logo" />
                                        </div>
                                    </div>
                                </div>
                            </Disclosure.Panel>
                            <Disclosure.Button className="flex justify-center mt-4 mx-auto items-center rounded-lg bg-indigo-600/20 px-4 py-2 text-gray-900 text-center text-base font-medium  hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                                <span className='font-medium hover:transition-transform hover:scale-[1.05]'><a href="#activities">{
                                    open ? 'View less' : 'View more'
                                } </a> </span>
                            </Disclosure.Button>
                        </>
                    )}
                </Disclosure>

            </div>
        </section>
    )
}

export default Itinerary