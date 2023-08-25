import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Link from '../components/Link';
import Itinerary from '../components/Itinerary';

function Details() {
  const { id } = useParams();
  const [city, setCity] = useState();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/cities/${id}`)
      .then(response => {
        console.log(response)
        setCity(response.data.city);
      })
      .catch(error => console.error('Error fetching city data:', error));
  }, [id]);

  return (
  <main>
    <section className='details h-full flex flex-col'>
      <Link to={'/cities'} title={'⬅ Back to Cities'} className="mb-2 mr-auto text-sm font-bold text-gray-100 bg-black/70 w-fit p-2 rounded" />
      <div className="flex flex-col my-2 h-full w-full mt:flex-row">
        <div className='h-2/4 mt:h-auto mt:flex mt:flex-col mt:items-center mt:justify-center mt:w-1/2 mt:px-24 px-6 py-8 bg-indigo-600/20'>
        <h3 className="text-2xl font-medium text-gray-900">
          {city?.name}, {city?.country}
        </h3>
        <p className=' text-gray-900 text-base'>{city?.description}</p>
        </div>
        <img src={city?.image} alt={city?.name} className='h-[26rem] w-full mt:w-1/2 object-cover bg-center' />
      </div>
      

    </section>
    <Itinerary />
    
      </main>
  );
}

export default Details;