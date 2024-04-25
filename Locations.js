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
      <ul>
        {data.results.map(item => (
          <li key={item.id}>
            {item.name}
            {item.type}
            {item.dimension}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Locations;