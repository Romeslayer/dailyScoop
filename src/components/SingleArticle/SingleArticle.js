import './SingleArticle.css'

import React from 'react'

function SingleArticle ({article}) {
  
  console.log(article)

  const publishedDate = new Date(article.published_date)

  return (
    <div className="single-article">
      <h4 className="article-section-name">{article.section}</h4>
      <h2 className="article-title">{article.title}</h2>
      <h3 className="article-byline">{article.byline}</h3>
      <button onClick={() => {
        window.open(article.url)
      }}> Read More</button>
      <img className="single-img" src={article.image[0].url} alt={article.image[0].caption} />
      <p className="article-abstract black">{article.abstract}</p>
      {article.subsection && <p>Subsection: {article.subsection}</p>}
      {article.published_date && <p>Published: {`${publishedDate.getMonth() + 1}/${publishedDate.getDate()}/${publishedDate.getFullYear()} `}</p>}
    </div>
  )
}

export default SingleArticle