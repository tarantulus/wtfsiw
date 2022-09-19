const APIKEY = "k_5zh0b0pw";
async function getPopularMovies() {
  const DEFAULTAPIURL =
    "https://imdb-api.com/en/API/MostPopularMovies/" + APIKEY;
  var data = await callApi(DEFAULTAPIURL);
  console.log(data.items);
  return data.items;
}
async function searchMovies(searchTerm) {
  console.log("searching");
  const SEARCHAPIURL = "https://imdb-api.com/en/API/SearchMovie/" + APIKEY;
  var data = await callApi(SEARCHAPIURL + "/" + searchTerm);
  if (data.results === null) {
    await getPopularMovies();
  }
  return data.results;
}

async function getMovie(id) {
  const DEFAULTAPIURL = "https://imdb-api.com/en/API/Title/" + APIKEY;
  var request = DEFAULTAPIURL + "/" + id;
  var data = await callApi(request);
  console.log(data);
  return data;
}

async function callApi(endpoint) {
  const resp = await fetch(endpoint);
  const data = await resp.json();
  return data;
}

export { getPopularMovies, searchMovies, getMovie };
