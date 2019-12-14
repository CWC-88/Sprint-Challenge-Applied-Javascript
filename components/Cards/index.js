// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')


const doggocardFromIndex = document.querySelector('.cards-container');
const dawgArray = [];




  dawgArray.forEach((headline) => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles/')
    // axios.get(`https://lambda-times-backend.herokuapp.com/articles/javascript/${headline}`)
   
    .then(res => {
      const data = res.data;
      const  newCard = doggoCardz(data);
      doggocardFromIndex.appendChild(newCard)
    } )
  
    .catch(err => console.log(err))
  })

function doggoCardz(obj){
const card2 = document.createElement('div')
const headliner = document.createElement('div')
const auther = document.createElement('div')
const imgcontain = document.createElement('div')
const image = document.createElement('img')
const shpan = document.createElement('span')

card2.appendChild(headliner)
card2.appendChild(auther)
auther.appendChild(imgcontain)
auther.appendChild(shpan)
imgcontain.appendChild(image)

card2.classList.add('card')
headliner.classList.add('headline')
auther.classList.add('author')
imgcontain.classList.add('img-container')

headliner.textContent = obj.headline
image.src = obj.authorPhoto
shpan.textContent = `By ${obj.authorName}`

return doggoCardz;

}