import React from 'react'
import Link from '../components/Link';

function CityCard({ name, country, image, description, id}) {
    return (
        <div className="city-card group relative block m-4 h-64 w-[60%] hover:w-[90%] transition-all md:w-1/3 md:hover:w-1/3 lg:w-1/5 lg:hover:w-1/5 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-l-2 border-t-2 border-black"></span>

            <div
            className="relative flex flex-wrap h-full transform bg-cover bg-center items-end border-2 border-black transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-white/40 group-hover:shadow-cbx group-hover:content-center"
            style={{ backgroundImage: `url(${image})` }}
        >
                <img className="w-6 h-6 sm:h-8 sm:w-8 p-px mt-[.29rem] ml-[.29rem] justify-self-start self-start animate-beat bg-white/70 rounded-r group-hover:hidden" src="./../LogoF.png" alt="Logo" />
                <div
                    className="p-0 !pt-0 py-2 flex flex-row flex-wrap items-center content-center justify-evenly bg-gray-600/50 w-full transition-opacity group-hover:absolute group-hover:opacity-0"
                >
                    <h2 className="text-base mt-2 text-gray-100 font-medium group-hover:hidden sm:text-xl">{name}, {country}</h2>
                </div>

                <div
                    className="absolute text-black p-4 h-full hidden opacity-0 overflow-hidden transition-opacity duration-0 group-hover:flex group-hover:flex-col group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-4"
                >

                    <h3 className="mt-2 px-1 bg-gray-100/60 rounded text-base mx-auto w-fit font-bold md:mt:1 sm:text-xl">{name},</h3>
                    <h3 className="bg-white/40 px-1 rounded text-base mx-auto w-fit font-bold md:mt:1 sm:text-xl">{country}</h3>
                    <p className="mt-2 p-2 bg-gray-100/60 text-black rounded whitespace-normal font-bold text-sm lg:text-base md:mt:1">
                        {description}
                    </p>
                    <Link to={`/cities/${id}`} title={"Read more"} className="mt-4 absolute  inset-x-0 bottom-6 text-sm font-bold text-gray-100 bg-black/70 w-fit p-2 rounded mx-auto" />
                    
                </div>
            </div>
        </div>
    )
}

export default CityCard