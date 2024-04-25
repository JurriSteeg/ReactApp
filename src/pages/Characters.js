import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Characters() {
  const [data, setData] = useState({ results: []});
  
  const APIdata = async () => {
    const result = await axios(
      'https://rickandmortyapi.com/api/character/',
    );

    setData(result.data);
  }

  useEffect(() => {
    APIdata();
  }, []);

  return (
    <div class="results">
        {data.results.map(item => (
          <div key={item.id} class="characters">
            <img alt={item.name} src={item.image} />
            <br/><br/><b>{item.name}</b>
          </div>
        ))}
    </div>
  );
}

export default Characters;