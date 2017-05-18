const appState = {
  beginning: [], // user input 1
  middle: [], // user input 2
  end: [], // user input 3
  id: [], // https://giphy.com/3o6Zt00pN0VEYTjeow
};

/////STATE MODS/////
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

let giphyURL='http://api.giphy.com/v1/gifs/search';
// Giphy API Functions
function getDataFromApi(searchTerm) {
  var query = {
    part: 'slug',
    limit: 1,
    sort: 'relevant',
    q: searchTerm,
    api_key: 'dc6zaTOxFJmzC'
  };
  $.getJSON(giphyURL, query, function(data) {

    fillURL(appState, data.data[0].id);
        console.log(data.data[0].id)
  });
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
  state.id.push(urlElement);
};

// function tempLogInfo (data) {
//   console.log(data);
// }

getDataFromApi('I got up this morning.');
console.log(appState);
// getDataFromApi('I got up this morning.', displayGiphySearchData);
  //the first gif to come back from this is a 404 error and doesn't exist on the site.

  // get casey when this happens!!!
  // 404
  // embed gif into html
  // ...

////////RENDERING FUNCTIONS/////////////


function render(state) {
  console.log(state);
  (`<img src="https://media.${objhere}/${state.id}/giphy.gifs/>`);
  //  ${data.data[0].bitly_gif_url}">"Link"</a>
}


//////////////EVENT LISTENERS////////////////
