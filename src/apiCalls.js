export const fetchTopStories = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => {
      if(!response.ok) {
        if (response.status === 401) throw new Error('Unarthorized please check if API key has been set');
        if (response.status === 429) throw new Error(`SLOW DOWN, you have used up all the API calls for the minute!`)
      }
      return response.json()
    })
}