import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    fetch('https://last-airbender-api.fly.dev/api/v1/characters')
      .then((resp) => resp.json())
      .then((respJson) => setMemes(respJson));
  }, []);
  console.log(memes);
  return (
    <div>
      <h1>Memes</h1>
      {memes.map((meme) => (
        <div>{meme.name}</div>
      ))}
    </div>
  );
}

export default App;
