// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const tab = document.createElement('div')

// tab.classList.add('tab')

// axios.get('https://lambda-times-backend.herokuapp.com/articles')


// const doggocardFromIndex = document.querySelector('.cards-container');
// const dawgArray = [];



// function tabbbb() {
//   dawgArray.forEach((headline) => {
//     axios.get(`https://lambda-times-backend.herokuapp.com/articles/javascript/${headline}`)
   
//     .then(res => {
//       const data = res.data;
//       const  newCard = doggoCardz(data);
//       doggocardFromIndex.appendChild(newCard)
//     } )
  
//     .catch(err => console.log(err))
//   })}

//   const tabber = document.querySelector('.topics');
// tabber.appendChild(tabbbb());