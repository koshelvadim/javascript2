import React, { useState } from 'react'

const App = () => {

  const url = "https://api.chucknorris.io/jokes/random";
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  

  

  return (
    <div>
      <h1>
        Jokes from Chuck Norris
      </h1>
      <button onClick={fetchJoke} disabled={loading}>{loading === true ? 'loading...': 'Get new joke'}</button>
      <p>{joke}</p>
    </div>
  )
}

export default App