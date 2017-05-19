const appState = {
    // userInput: [],
  beginning: {
    allIds: [],
    current: 0,
  },

   middle: {
    allIds: [],
    current: 0,
  },

  end: {
    allIds: [],
    current: 0,
  }
};

/////STATE MODS/////
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

let giphyURL='http://api.giphy.com/v1/gifs/search';
// Giphy API Functions
function getDataFromApi(searchTerm, storyType, callback) {
  var query = {
    part: 'slug',
    limit: 25,
    sort: 'relevant',
    q: searchTerm,
    api_key: 'dc6zaTOxFJmzC'
  };
  $.getJSON(giphyURL, query, function(response) {
      const imageIds = response.data.map(item => item.id);
      setStoryIds(appState, storyType, imageIds);
      callback();
  });

}

function setStoryIds(state, storyType, imageIds) {
  state[storyType].allIds = imageIds;
}

function incStoryCurrentImage(state, storyType) {
  if(state[storyType].current === state[storyType].allIds.length - 1) {
    state[storyType].current = 0;
  }
  state[storyType].current++;
}

// // Beginning Story
// function fillinBeginning (state, userElement1, userElement2, userElement3) {
//   if (userElement === null) {
//       state.beginning.userQuery.push('no text entered');
//   } else {
//       state.beginning.push(userElement);
//   }
// };
// // // Middle Story
// function fillinMiddle (state, userElement) {
//   if (userElement === null) {
//       state.middle.push('');
//   } else {
//       state.middle.push(userElement);
//   }
// };
// // // End Story
// function fillinEnd (state, userElement) {
//   if (userElement === null) {
//       state.end.push('');
//   } else {
//       state.end.push(userElement);
//   }
// };



// Fill the URL with my element
function fillURL (state, urlElement) {
  state.id.push(urlElement);
};

// function tempLogInfo (data) {
//   console.log(data);
// }



console.log(appState);

// getDataFromApi('I got up this morning.', displayGiphySearchData);
  //the first gif to come back from this is a 404 error and doesn't exist on the site.

  // get casey when this happens!!!
  // 404
  // embed gif into html
  // ...

function shouldRender(state, storyTypes) {
  return storyTypes.map(storyType => state[storyType].allIds.length).filter(lengths => lengths < 1) < 1;
}
////////RENDERING FUNCTIONS/////////////

function render(state) {
  // console.log(state);
  let storyTypes = ['beginning', 'middle', 'end'];
  if (shouldRender(state, storyTypes)) {
      console.log('should render??', state);
      storyTypes.forEach(storyType => {
        const allIds = state[storyType].allIds;
        const current = state[storyType].current;
        // const { allIds, current } = state[storyType];
        const itemID = allIds[current];
        $('.results').append(`<div class="result-story"><img src="https://media.giphy.com/media/${itemID}/giphy.gif", class ='resize'/><button id="${storyType}">Cycle</button></div>`);
      })
  }
}

//////////////EVENT LISTENERS////////////////

function listenForText() {
  $('form').submit(function(event) {
    event.preventDefault();

    getDataFromApi($('.Beginning').val(), 'beginning', function(){
      getDataFromApi($('.Middle').val(), 'middle', function() {
        getDataFromApi($('.End').val(), 'end', function() {
          render(appState);
        });
      });
    });
  });
}

function cycleGifsBeginning() {
  $('.results').on('click', '#beginning', function(event) {
    incStoryCurrentImage(appState, 'beginning');
    render(appState);
  })
}

function cycleGifsBeginning() {
  $('.results').on('click', '#middle', function(event) {

  })
}

function cycleGifsBeginning() {
  $('.results').on('click', '#end', function(event) {

  })
}

// function listenMiddle() {
//     $('.submit').click(function(event) {
//     event.preventDefault();
//     getDataFromApi($('.Middle').val());
//   });
// }

// function listenEnd() {
//     $('.submit').click(function(event) {
//     event.preventDefault();
//     getDataFromApi($('.End').val());
//   });
// }

$(function(){
  listenForText();
  cycleGifsBeginning();
  // listenMiddle();
  // listenEnd();
});