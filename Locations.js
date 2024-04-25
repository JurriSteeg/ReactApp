import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Locations() {
  const [data, setData] = useState({ results: []});
  
  const APIdata = async () => {
    const result = await axios(
      'https://rickandmortyapi.com/api/location/',
    );

    setData(result.data);
  }

  useEffect(() => {
    APIdata();
  }, []);

  return (
    <div class="results">
        {data.results.map(item => (
          <div key={item.id} class="locations">
            <p><b>Name:</b> {item.name}</p>
            <p><b>Type:</b> {item.type}</p>
            <p><b>Dimension:</b> {item.dimension}</p>
          </div>
        ))}
    </div>
  );
}

export default Locations;