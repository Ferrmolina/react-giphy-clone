function SearchService({keyword}) {
    const apiKey = 'VomfU0e5q7McM4hkwopXsexwPflkihSp';
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=27&offset=0&rating=r&lang=en`

    return fetch(apiURL);
}

export default SearchService;