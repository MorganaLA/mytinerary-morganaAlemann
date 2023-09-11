import React from 'react';
import citiesData from '../cities.json';

function Log() {
  return (
    <main>
      {citiesData.map((city, index) => (
        <div
          key={index}
          className=""
          style={{ backgroundImage: `url(${city.image})` }}
        >
         
        </div>
      ))}
    </main>
  );
}

export default Log;
