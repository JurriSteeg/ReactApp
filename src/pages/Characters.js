import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Characters() {
  const [data, setData] = useState({ results: []});

  useEffect(async () => {
    const result = await axios(
      'https://rickandmortyapi.com/api/character/',
      );

    setData(result.data);
  }, []);

  return (
    <div class="results">
      {data.results.map(item => (
        <li>{item.name}</li>
        ))}
    </div>
  );
}

export default Characters;