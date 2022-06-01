import './App.css';
import { useEffect } from 'react';
import { fetchTopStories } from '../../apiCalls.js';


function App() {
  useEffect(() => {
    fetchTopStories('home').then((data) => {
      console.log(data)
    })
  })
  return (
    <div className="App">
      <h1>The Daily Scoop</h1>
    </div>
  );
}

export default App;
