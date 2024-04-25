import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Episodes() {
  const [data, setData] = useState({ results: []});
  
  const APIdata = async () => {
    const result = await axios(
      'https://rickandmortyapi.com/api/episode/',
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
            {item.episode}
            {item.name}
            {item.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;