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
      <ul>
        {data.results.map(item => (
          <li key={item.id}>
            <img alt={item.name} src={item.image} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Characters;