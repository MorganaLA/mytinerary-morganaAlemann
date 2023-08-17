import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityCard from '../components/CityCard';


const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cities')
      .then(response => {
        setCities(response.data.cities);
      })
      .catch(error => console.error('Error fetching city data:', error));
  }, []);

  const handleInputChange = async (cities) => {
    const inputValue = cities.target.value;
    try {
      const response = await axios.get(`http://localhost:8000/api/cities?name=${inputValue}`);
      setCities(response.data.cities);
    } catch (error) {
      setCities([])
      console.log(error);
    }
  };

  return (
    <section className='text-center bg-indigo-600/30 my-4 h-full w-full'>

      <h2 className="text-3xl pt-6 mb-4">Cities</h2>

      <input
        onChange={handleInputChange}
        className='border-2 w-[60%] lg:ml-[74%] xl:ml-[78%] mb-4 border-indigo-950 focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-500 hover:ring-indigo-300 hover:border-indigo-500 rounded py-1 px-2 h-fit mdt:w-fit mt:ml-[55%]'
        type="text"
        placeholder='Search'
      />

      <div>
        <div className="flex flex-wrap justify-around items-center">
          {cities?.length > 0 ?
            cities?.map(city => (
              <CityCard
                key={city._id}
                name={city.name}
                country={city.country}
                image={city.image}
                description={city.description}
                id={city._id}
              />
            ))
            : <p className='h-screen text-3xl pt-8 animate-pulse text-indigo-950'>City not found</p>}
        </div>
      </div>
    </section>
  );
}

export default Cities;
