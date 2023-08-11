import CityCard from "../components/CityCard"
import cities from '../../public/cities.json';

//import { Link } from 'react-router-dom'
export const Cities = () => {

    return (
        <section>
            <div className="text-center bg-indigo-600/30 my-4 h-full w-full">
                <h2 className="text-3xl my-4">Cities</h2>
                <div className="flex flex-wrap justify-around items-center">

                    {cities.citiesData.map(city => (
                        <CityCard
                            key={city.name}
                            name={city.name}
                            country={city.country}
                            url={city.url}
                            description={city.description}
                        />
                    ))}

                    {/* <img className="w-8 h-8 sm:h-10 sm:w-10 p-px animate-beat" src="./../LogoF.png" alt="Logo" /> */}
                </div>
            </div>
        </section>
    )
}