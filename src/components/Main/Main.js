import './Main.css'
import React from 'react'

function Main({ articles, section }) {
  const buildArticles = () => {
    if(articles) {
     return articles.map((article) => <p key={article.title + article.abstract}>{article.title}</p>)
    }
  }

  const buildTitle = () => {
    if(!section) return <h2>Today's Top Stories:</h2>
    return (
      <h2>Today's {section} Stories:</h2>
    )
  }

  return (
    <main>
      {buildTitle()}
      {buildArticles()}
    </main>
  )
}

export default Main