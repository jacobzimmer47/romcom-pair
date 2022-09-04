var coverImg = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var firstDescriptor = document.querySelector('.tagline-1');
var secondDescriptor = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeCoverButton = document.querySelector('.make-new-button');
var makeCoverForm = document.querySelector('.form-view');
var mainPage = document.querySelector('.home-view');
var savedCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedCoversPage = document.querySelector('.saved-covers-section');
var createNewBookButton = document.querySelector('.create-new-book-button');
var coverInput = document.querySelector('.user-cover');
var titleInput = document.querySelector('.user-title');
var userDesc1Input = document.querySelector('.user-desc1');
var userDesc2Input = document.querySelector('.user-desc2');
var mainCover = document.querySelector('.main-cover');
var saveButton = document.querySelector('.save-cover-button');
var savedView = document.querySelector('.saved-view');

var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg', 'Sunsets and Sorrows', 'sunsets', 'sorrows')
];
var currentCover;

window.addEventListener('load', loadRandomCover);
randomCoverButton.addEventListener('click', loadRandomCover);
makeCoverButton.addEventListener('click', displayMakeCoverForm);
viewSavedButton.addEventListener('click', displaySavedCoverPage);
homeButton.addEventListener('click', displayHomePage);
createNewBookButton.addEventListener('click', createCustomBook);
saveButton.addEventListener('click', saveUserInput);

function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

function randomCover() {
  currentCover = new Cover (
  getRandomIndex(covers),
  getRandomIndex(titles),
  getRandomIndex(descriptors),
  getRandomIndex(descriptors),
  )
}

function loadNewCover() {
  coverImg.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  firstDescriptor.innerText = currentCover.tagline1;
  secondDescriptor.innerText = currentCover.tagline2;
  }

function loadRandomCover() {
  randomCover()
  loadNewCover()
}

function hide(element) {
 element.classList.add('hidden')
}

function show(element) {
element.classList.remove('hidden')
}

function displayMakeCoverForm() {
  hide(mainPage)
  hide(savedCoverButton)
  hide(randomCoverButton)
  show(makeCoverForm)
  show(homeButton)
 }

 function displaySavedCoverPage() {
  hide(mainPage)
  hide(makeCoverForm)
  hide(savedCoverButton)
  hide(randomCoverButton)
  hide(mainCover)
  show(savedView)
  show(homeButton)
  show(savedCoversPage)
  savedCoversPage.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    if (!savedCovers.includes(savedCovers)) {
    savedCoversPage.innerHTML += 
    `<section class='mini-cover' id='${savedCovers[i].id}'> 
    <img class='mini-cover cover-img'src='${savedCovers[i].cover}'> 
    <h2 class=' cover-title'>${savedCovers[i].title}</h2> 
    <h3 class= 'tagline'>A tale of <span class='tag-line1'> ${savedCovers[i].tagline1}</span> and <span class='tag-line2'> ${savedCovers[i].tagline2}</span></h3>
    </section>`;
    }
    findMiniCover()
    }
 }

 function displayHomePage() {
  hide(makeCoverForm)
  hide(homeButton)
  hide(savedCoversPage)
  show(savedCoverButton)
  show(randomCoverButton)
  show(mainPage)
  show(mainCover)
 }

function createCustomBook(event) {
  event.preventDefault()
  currentCover = new Cover(
    coverInput.value,
    titleInput.value,
    userDesc1Input.value,
    userDesc2Input.value
  )

  loadNewCover()
  displayHomePage()
}

function saveUserInput() {
  if (!savedCovers.includes(currentCover))
  savedCovers.push(currentCover)
} 

function findMiniCover() {
  var miniCover = document.querySelectorAll('.mini-cover')
  for (var i = 0; i < miniCover.length; i++) {
    miniCover[i].addEventListener('dblclick', deleteMiniCover)
  }
}

function deleteMiniCover(event) {
  event.preventDefault()
  for (var i = 0; i < savedCovers.length; i++) {
    if (event.currentTarget.id == savedCovers[i].id) {
      savedCovers.splice(i, 1)
    }
  }

  displaySavedCoverPage()
}
