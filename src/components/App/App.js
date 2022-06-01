import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopStories } from '../../apiCalls.js';
import { cleanResponse } from '../../utilities.js';
import Header from '../Header/Header.js';
import { useParams } from 'react-router-dom'


function App() {
  const [sections, setSections] = useState([
    "arts",
    "automobiles",
    "books",
    "business",
    "fashion",
    "food",
    "health",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "realestate",
    "science",
    "sports",
    "sundayreview",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "world"
  ])

  let { selectedSection } = useParams();
  
  

  useEffect(() => {
    if(selectedSection) {
      fetchTopStories(selectedSection).then((data) => {
        let cleanData = cleanResponse(data);
        console.log(cleanData)
      })
    } else {
      fetchTopStories('home').then((data) => {
        let cleanData = cleanResponse(data);
      })
    }
  })



  return (
    <div className="App">
      <Header sections={sections}></Header>
    </div>
  );
}

export default App;
