import './App.css';
import { useEffect } from 'react';
import { fetchTopStories } from '../../apiCalls.js';
import { cleanResponse } from '../../utilities.js';



function App() {
  useEffect(() => {
    fetchTopStories('home').then((data) => {
      let cleanData = cleanResponse(data);
    })
  })
  return (
    <div className="App">
      <h1>The Daily Scoop</h1>
    </div>
  );
}

export default App;
