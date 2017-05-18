const appState = {
  beginning: [], // user input 1
  middle: [], // user input 2
  end: [], // user input 3
  //embed_url: [stick guys here], // https://giphy.com/embed/U7Lvtcuqh4WZy
};

/////STATE MODS/////
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

let giphyURL='http://api.giphy.com/v1/gifs/search';
// Giphy API Functions
function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'slug',
    limit: 9,
    sort: 'relevant',
    q: searchTerm,
    api_key: 'dc6zaTOxFJmzC'
  };
  $.getJSON(giphyURL, query, callback);
}
// Beginning Story
function fillinBeginning (state, userElement) {
  if (userElement === null) {
      state.beginning.push('');
  } else {
      state.beginning.push(userElement);
  }
};
// Middle Story
function fillinMiddle (state, userElement) {
  if (userElement === null) {
      state.middle.push('');
  } else {
      state.middle.push(userElement);
  }
};
// End Story
function fillinEnd (state, userElement) {
  if (userElement === null) {
      state.end.push('');
  } else {
      state.end.push(userElement);
  }
};
// Fill the URL with my element
function fillURL (state, urlElement) {
  state.embed_url.push(urlElement);
};



getDataFromApi('sleep', displayGiphySearchData);
// getDataFromApi('I got up this morning.', displayGiphySearchData);
  //the first gif to come back from this is a 404 error and doesn't exist on the site.

////////RENDERING FUNCTIONS/////////////


function displayGiphySearchData(data) {
  console.log(data);
//   document.write(`<a href="${data.data[0].bitly_gif_url}">"Link"</a>`);
}


//////////////EVENT LISTENERS////////////////
