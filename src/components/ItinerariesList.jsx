import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_itineraries } from '../store/actions/itineraryActions';
import Itinerary from '../components/Itinerary';

function ItinerariesList({ cityId }) {
    const itineraries = useSelector((store) => store.itineraryReducer.itineraries);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_itineraries());
    }, [dispatch]);

    const filteredItineraries = itineraries.filter(itinerary => itinerary.city === cityId);
    console.log(filteredItineraries)

    return (
        <div>
            {filteredItineraries.length > 0 ? (
                filteredItineraries?.map(itinerary => (
                    <Itinerary
                        key={itinerary._id}
                        title={itinerary.title}
                        first_name={itinerary.user.first_name}
                        photo={itinerary.user.photo}
                        duration={itinerary.duration}
                        likes={itinerary.likes}
                        price={itinerary.price}
                        hashtags={itinerary.hashtags}
                    />
                ))
            ) : (
                <p className='h-screen flex flex-wrap justify-center items-center content-start gap-2 text-3xl pt-8 animate-pulse text-indigo-950'>
                    No itineraries available for this city yet <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                </p>
            )}
        </div>
    );
}

export default ItinerariesList;
