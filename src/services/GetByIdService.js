function GetByIdService({keyword}) {
    const apiKey = 'VomfU0e5q7McM4hkwopXsexwPflkihSp';
    const apiURL = `https://api.giphy.com/v1/gifs/${keyword}?api_key=${apiKey}`

    return fetch(apiURL);
}

export default GetByIdService;