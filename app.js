'use strict';

const appState = {
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


function shouldRender(state, storyTypes) {
  return storyTypes.map(storyType => state[storyType].allIds.length).filter(lengths => lengths < 1) < 1;
}
////////RENDERING FUNCTIONS/////////////

function render(state) {
  $('.results').empty();
  let storyTypes = ['beginning', 'middle', 'end'];
  if (shouldRender(state, storyTypes)) {
    storyTypes.forEach(storyType => {
      const allIds = state[storyType].allIds;
      const current = state[storyType].current;
        // const { allIds, current } = state[storyType];
      const itemID = allIds[current];
      $('.results').append(`<div class="result-story"><img src="https://media.giphy.com/media/${itemID}/giphy.gif", class ='resize'/><button id="${storyType}">Cycle</button></div>`);
    });
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


function cycleGifs(buttonID, storyType) {
  $('.results').on('click', buttonID, function() {
    incStoryCurrentImage(appState, storyType);
    render(appState);
  });
}

//////////////////////////DOCUMENT READY CALLS////////////////////////

$(function(){
  listenForText();
  cycleGifs('#beginning', 'beginning');
  cycleGifs('#middle', 'middle');
  cycleGifs('#end', 'end'); 
});

