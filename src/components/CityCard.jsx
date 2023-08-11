import React from 'react'

function CityCard({ name, country, url, description }) {
    return (
        <div className="city-card group relative block m-4 h-64 w-[60%] hover:w-[90%] transition-transform transition-all md:w-1/5 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-l-2 border-t-2 border-black"></span>

            <div
                className="relative flex flex-wrap h-full transform bg-cover bg-center items-end border-2 border-black transition-transform transition-all group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-white/40 group-hover:shadow-cbx"
                style={{ backgroundImage: `url(${url})` }}
            >
                <img className="w-6 h-6 sm:h-8 sm:w-8 p-px mt-[.29rem] ml-[.29rem] justify-self-start self-start animate-beat bg-white/70 rounded-r group-hover:hidden" src="./../LogoF.png" alt="Logo" />
                <div
                    className="p-0 !pt-0 py-2 flex flex-row flex-wrap items-center content-center justify-evenly bg-gray-500/50 w-full transition-opacity group-hover:absolute group-hover:opacity-0"
                >
                    <h2 className="text-base text-gray-100 font-medium group-hover:hidden sm:text-xl">{name} , {country}</h2>
                </div>

                <div
                    className="absolute text-black p-4 hidden opacity-0 transition-opacity duration-0 group-hover:flex group-hover:flex-col group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
                >
                    {/* <img src={url} alt={`${name}, ${country}`} /> */}

                    <h3 className="mt-2 px-2 bg-white/40 rounded-t text-base mx-auto w-fit font-medium sm:text-2xl">{name}</h3>
                    <h3 className="bg-white/40 px-2 rounded text-base mx-auto w-fit font-medium sm:text-2xl">{country}</h3>
                    <p className="mt-2 p-2 bg-white/40 rounded font-medium text-sm sm:text-base">
                        {description}
                    </p>
                    <a className="mt-4 font-bold bg-gray-400/70 w-fit p-2 rounded mx-auto" href="">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default CityCard