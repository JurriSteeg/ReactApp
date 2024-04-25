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
        {data.results.map(item => (
          <div key={item.id} class="episodes">
            <p><b>Episode: </b>{item.episode}</p>
            <p><b>Name: </b>{item.name}</p>
            <p><b>Air Date: </b>{item.air_date}</p>
          </div>
        ))}
    </div>
  );
}

export default Episodes;