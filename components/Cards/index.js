// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function getCards(articles) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imageContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imageContainer.classList.add('img-container')
    image.src = articles.authorPhoto;

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imageContainer)
    imageContainer.appendChild(image)
    author.appendChild(authorName)

    headline.textContent = articles.headline;
    authorName.textContent = `By ${articles.authorName}`;


    return card;
    
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const articleData = response.data.articles;
    const javaScript = articleData.javascript;
    const bootStrap = articleData.bootstrap;
    const technology = articleData.technology;
    const jquery = articleData.jquery;
    const node = articleData.node;

    javaScript.forEach(item => {
        cardsContainer.appendChild(getCards(item));
    })

    bootStrap.forEach(item => {
        cardsContainer.appendChild(getCards(item));
    })

    technology.forEach(item => {
        cardsContainer.appendChild(getCards(item));
    })

    jquery.forEach(item => {
        cardsContainer.appendChild(getCards(item));
    })

    node.forEach(item => {
        cardsContainer.appendChild(getCards(item));
    })

    console.log(javaScript)

})
