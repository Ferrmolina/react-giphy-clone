function SearchService({keyword, explicitContent}) {
    const apiKey = 'api_key=VomfU0e5q7McM4hkwopXsexwPflkihSp';
    const query = `&q=${keyword}`
    const rating = {explicitContent} ? 'r' : 'g'
    const apiURL = `https://api.giphy.com/v1/gifs/search?${apiKey}${query}&limit=25&offset=0&rating=${rating}&lang=en`

    return fetch(apiURL);
}

export default SearchService;