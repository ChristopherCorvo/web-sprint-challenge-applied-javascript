// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

//instantiate variables
const headerDiv = document.createElement('div');
const dateSpan =  document.createElement('span');
const titleH1 = document.createElement('h1');
const tempSpan = document.createElement('span');

// add class's
headerDiv.classList.add('header');
dateSpan.classList.add('date');
tempSpan.classList.add('temp');

// add content
dateSpan.textContent = 'MARCH 28, 2020';
titleH1.textContent = 'Lambda Times';
tempSpan.textContent = '98°';

//create hiearchy
headerDiv.append(dateSpan, titleH1, tempSpan)

return headerDiv

}

const mainHeader = document.querySelector('.header-container').append(Header())


