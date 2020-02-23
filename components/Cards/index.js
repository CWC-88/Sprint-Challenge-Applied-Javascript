// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div> */
//
// Create a card for each of the articles and add the card to the DOM.







const cardcontainer = document.querySelector('.cards-container');
const dogArray =['https://lambda-times-backend.herokuapp.com/articles']

function createCarddata(dog){

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response)=>{
        const data = response.data;
        const newCard = dogCardCreator(data);
        cardcontainer.appendChild(newCard)
    })

    .catch((err)=>{
        console.log(err)
    })
}

dogArray.forEach((dog) => {
    createCarddata(dog)
  })




function dogCardCreator(obj){
    const card = document.createElement('div')
   
   
    const hl = document.createElement('div')
    const author = document.createElement('div')
    const imagecontainer = document.createElement('div')
    const imageiteself = document.createElement('img')
    const authorname = document.createElement('span')

card.appendChild(hl)
card.appendChild(author)
author.appendChild(imagecontainer)
imagecontainer.appendChild(imageiteself)
author.appendChild(authorname)

card.classList.add('card')
hl.classList.add('headline')
hl.textContent ="ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects"
author.classList.add('author')
imagecontainer.classList.add('img-container')
imageiteself.src = './assets/sir.jpg'
authorname.textContent = 'SIR RUFF N STUFF'

return card
}



