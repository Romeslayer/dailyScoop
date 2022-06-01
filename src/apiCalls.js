export const fetchTopStories = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      return response.json()
    })
}