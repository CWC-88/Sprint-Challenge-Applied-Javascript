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
const headertop = document.createElement('div');
const date = document.createElement('span');
const hone = document.createElement('h1');
const temp = document.createElement('span');

headertop.appendChild(date)
headertop.appendChild(hone)
headertop.appendChild(temp)



headertop.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

date.textContent = 'MARCH 28, 2019';
hone.textContent = 'Lambda Times';
temp.textContent = '98°';



return headertop;


}

const headercontainer = document.querySelector('.header-container');
headercontainer.appendChild(Header());