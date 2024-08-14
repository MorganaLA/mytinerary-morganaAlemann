import CityCard from '../components/CityCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter_cities, get_cities } from '../store/actions/cityActions';

const Cities = () => {
  const cities = useSelector((store) => store.cityReducer.cities);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        await dispatch(get_cities());
      } catch (error) {
        setError('Failed to fetch cities');
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [dispatch]);

  const handleInputSearch = () => {
    dispatch(filter_cities({ name: searchTerm }));
  };

  const handleResetCities = () => {
    if (searchTerm === "") {
      dispatch(get_cities());
    }
  };

  return (
    <section className='text-center bg-indigo-600/30 my-4 h-full w-full'>
      <h2 className="text-3xl pt-6 mb-4">Cities</h2>

      <div className='flex flex-row group w-40 mdt:w-48 lg:w-56 m-0 ml-auto mr-auto lg:mr-8 justify-between border-2 bg-white border-indigo-950 hover:border-indigo-500 rounded'>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleResetCities(); // Reset cities if search term is empty
          }}
          value={searchTerm}
          name='input-search'
          className='w-[75%] h-fit m-0 py-1 px-1 mdt:px-2 outline-0'
          type="text"
          placeholder='Search'
        />
        <button
          onClick={handleInputSearch}
          className='w-[25%] border-l-2 h-fit py-1 px-2 mdt:px-3 lg:px-4 justify-self-center hover:bg-indigo-200 ease-in-out active:shadow-bbx active:transition-shadow'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:stroke-indigo-900 group-active:transition-transform group-active:scale-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>

      {loading ? (
        <p className='text-2xl pt-8'>Loading...</p>
      ) : error ? (
        <p className='text-2xl pt-8 text-red-600'>{error}</p>
      ) : (
        <div>
          <div className="flex flex-wrap justify-around items-center">
            {cities.length > 0 ?
              cities.map(city => (
                <CityCard
                  key={city._id}
                  name={city.name}
                  country={city.country}
                  image={city.image}
                  description={city.description}
                  id={city._id}
                />
              ))
              : <p className='h-screen flex flex-wrap justify-center items-center content-start gap-2 text-3xl pt-8 animate-pulse text-indigo-950'>
                  City not found
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cities;
