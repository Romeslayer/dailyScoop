import './Article.css';
import React from 'react'

function Article({ details, }) {
  
   if(details.section && details.title && details.abstract) {
    return (
      <article className="article-section">
        <div className="article-content">
          {details.section && details.title && details.abstract && <h4 className="article-section-name">{details.section}</h4>}
          {details.title && details.section && details.abstract && <h3 className="article-title">{details.title}</h3>}
          {details.abstract && <p className="article-abstract">{details.abstract}</p>}
          {details.byline && <p className='article-byline'>{details.byline}</p>}
        </div>
        {details.image && <img className="article-image" src={details.image[0].url} alt={details.image[0].alt} />}
      </article>
    )
   }
  
}

export default Article