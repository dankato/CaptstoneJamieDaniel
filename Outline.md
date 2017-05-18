CAPSTONE PROJECT ONE JAMIE & DANIEL

API
giphy API
https://github.com/Giphy/GiphyAPI/blob/master/README.md

General purpose:
Use it for storytelling with gifs.

What problem does it solve?
Recreational app

Audience?

User submit text string(we put character limit on the submission box);
App returns the story but with gifs

User concerns:
  Limitations: only having three text boxes (beginning, middle and end)
  Number of gifs: only three showing the story (basically one gif per story section)
  Can user save story? Share story?
  Can user cycle through gif choices?

Admin concerns:
  Which gif will the app return when there are many with the relevant tag for a word?
  Do we dictate what is shown? Or do we just auto select the top one? 
  Want it to return gifs in the order of the words that are relative to each gif?

Wireframe:
https://wireframe.cc/Ogb7iO



User Flow

First page, user sees:
 //Title
 //Instructions
 //Three Boxes for Beginning Middle and End
 //Submit button
User can input text in any one of the three boxes
  //clicking submit will render a gif for that best fix the text they have entered
Second page, user sees:
  //Title
  //Instructions (different text)
  //Three boxes for Beginning, Middle and End
  //Results box with three gifs total
  //Cycle buttons under the Beginning Middle and End to go through gifs that are most relevant to their story 
  //New Story button to start over
  //Save button at bottom of results that allows them to save
