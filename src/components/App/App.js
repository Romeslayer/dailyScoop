import './App.css';
import { useEffect, useState } from 'react';
import { fetchTopStories } from '../../apiCalls.js';
import { cleanResponse } from '../../utilities.js';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';



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

  const [articles, setArticles] = useState({});
  let { selectedSection } = useParams();
  let { id } = useParams();
  

  useEffect(() => {
    if(selectedSection) {
      fetchTopStories(selectedSection).then((data) => {
        let cleanData = cleanResponse(data);
        setArticles({ data: cleanData.articles, name: cleanData.section})
      })
    } else {
      fetchTopStories('home').then((data) => {
        let cleanData = cleanResponse(data);
        setArticles({data: cleanData.articles, name: undefined})
      })
    }
  }, [selectedSection])



  return (
    <div className="App">
      <Header sections={sections}></Header>
      {<Main articles={articles.data} section={articles.name} id={id} ></Main>}
    </div>
  );
}

export default App;
