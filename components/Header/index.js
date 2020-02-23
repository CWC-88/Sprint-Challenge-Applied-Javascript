// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerContainer = document.createElement('div');
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')
    
    headerContainer.classList.add('header')
    date.classList.add('date')
    title.classList.add('title')
    temp.classList.add('temp')
    
    date.textContent = 'Feb 21 2020';
    title.textContent = 'Lambda Times';
    temp.textContent ='98'
    
    headerContainer.appendChild(date);
    headerContainer.appendChild(title);
    headerContainer.appendChild(temp);
    
    return headerContainer
    
    
    
    }
    
    
    
    const parentHeader = document.querySelector('.header-container');
    parentHeader.appendChild(Header());
    