const appState = {
  
};


/////STATE MODS/////
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC   

let giphyURL='http://api.giphy.com/v1/gifs/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'slug',
    limit: 1,
    sort: 'relevant',
    q: searchTerm,
    api_key: 'dc6zaTOxFJmzC'
  };
  $.getJSON(giphyURL, query, callback);
}


function displayGiphySearchData(data) {
  console.log(data);
//   document.write(`<a href="${data.data[0].bitly_gif_url}">"Link"</a>`);
}

getDataFromApi('sleep', displayGiphySearchData);
// getDataFromApi('I got up this morning.', displayGiphySearchData);
  //the first gif to come back from this is a 404 error and doesn't exist on the site.

////////RENDERING FUNCTIONS/////////////




//////////////EVENT LISTENERS////////////////

