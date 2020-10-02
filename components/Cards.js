// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';

function cardMaker(object) {
    // instantiate the variables
    const cardDiv = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainerDiv = document.createElement('Div');
            const authorImg = document.createElement('img');
        const authorNameSpan = document.createElement('span');

    // add classes
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');

    // add content
    headlineDiv.textContent = object.headline;
    authorImg.src = object.authorPhoto;
    authorNameSpan.textContent = `By: ${object.authorName}`;

    // add listener
    cardDiv.addEventListener('click', () =>{
        console.log(object.headline)
    })

    // create hiearchy
    cardDiv.append(headlineDiv, authorDiv);
    authorDiv.append(imgContainerDiv, authorNameSpan)
    imgContainerDiv.append(authorImg);

    return cardDiv;
}

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
        .then(res => {
            const mainObject = res.data.articles; //object
            // console.log(mainObject)
            // console.log(typeof(mainObject))
            // console.log(mainObject.bootstrap)
            // console.log(Object.keys(mainObject))
            // console.log(Object.values(mainObject))

            const objectValues = Object.values(mainObject);

            // console.log(objectValues[1][1])
            
            objectValues.forEach(element => {
                // console.log(element)
                
                for (let i = 0; i < element.length; i++) {
                    
                    document.querySelector('.cards-container').append(cardMaker(element[i]));

                }
            })

             
        })