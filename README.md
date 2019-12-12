# Quidax Front-end Engineer Skill Assessment 

The task was to mplement a dashboard view for the fictional Quidax Book Club web application, exactly as detailed in the UI mockups provided using HTML, CSS/SCSS, vanilla Javascript, and ​only​ the suggested libraries/plugins for certain UI elements.

`Live URL: `

## Instructions  
To run the project;
1. open your terminal and navigate to `/quidax-challenge"`
2. run `npm install` in your terminal to download dependencies
3. run `npm run build` in your terminal to transpile and bundle scss and javascript files respectively
4. run `npm start` in your terminal to start up live server
5. open your browser and navigate to `http://127.0.0.1:8080`


## Assumptions
- For the search autocomplete, I assumed that the search results were to be filtered from the first letter of the book title instead of anywhere the search term appears in the title.
- Based on the UI design, I assumed that matched search terms in the search results is highlighted as the user types.
- When the search terms have no match,a message is displayed to show the user that there are no results.

## Challnge
    I implemented the click on overlay to close `hover` state in a slide item. However, I had a bug where everytime I clicked the overlay to close, the button didn't update as well. I'd have worked on a fix, but I'm already out of time.

## Constructive feedback
It was challenging and fun. I liked the little `gotchas` that was waiting at every turn. An example is the initials behind the profile picture. My favourite part was spotting little details like the placeholder text of the search bar that changed across screen sizes.