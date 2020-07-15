/*********************************/
/* Mobile nav bar open and close */
/*********************************/

let isOpen = false;

function navOpen() {
	if (!isOpen) {
		document.querySelector('.nav-items-wrapper').classList.add('nav-open');
		isOpen = true;
	} else {
		document.querySelector('.nav-items-wrapper').classList.remove('nav-open');
		isOpen = false;
	}
}

if (window.innerWidth < 640) {
	document.querySelector('.js-nav-1').addEventListener("click", navClose);
	document.querySelector('.js-nav-2').addEventListener("click", navClose);
	document.querySelector('.js-nav-3').addEventListener("click", navClose);
	document.querySelector('.js-nav-4').addEventListener("click", navClose);
	document.querySelector('.js-nav-5').addEventListener("click", navClose);
}

function navClose() {
		document.querySelector('.nav-items-wrapper').classList.remove('nav-open');
		isOpen = false;
}

/*****************/
/* Team carousel */
/*****************/

let nextTeamCardIndex = 1;
let previousTeamCardIndex = nextTeamCardIndex - 1;
let teamCards = document.getElementsByClassName('team-person-wrapper');
let teamDots = document.getElementsByClassName('team-dot');
let teamCardsChanger; 

function cardsIndexReseter() {
	if (nextTeamCardIndex > teamCards.length - 1) {
		nextTeamCardIndex = 0;
	}
	if (previousTeamCardIndex < 0) {
		previousTeamCardIndex = teamCards.length - 1;
	} else if (previousTeamCardIndex > teamCards.length - 1) {
		previousTeamCardIndex = 0;
	}
}

function showTeamCards() {	
	cardsIndexReseter();
	teamCards[previousTeamCardIndex].classList.add('team-card-out');
	teamDots[previousTeamCardIndex].classList.remove('team-dot-active');
	teamCards[nextTeamCardIndex].classList.remove('hide', 'team-card-out');
	teamDots[nextTeamCardIndex].classList.add('team-dot-active');
	nextTeamCardIndex ++;
	previousTeamCardIndex ++;
}

function manualSwitchCards(index) {
	let currentCardIndex = index;
	
	clearInterval(teamCardsChanger);
	nextTeamCardIndex = index + 1;
	cardsIndexReseter();
	teamCards[previousTeamCardIndex].classList.add('team-card-out');
	teamDots[previousTeamCardIndex].classList.remove('team-dot-active');
	previousTeamCardIndex = index;
	teamCards[currentCardIndex].classList.remove('hide', 'team-card-out');
	teamDots[currentCardIndex].classList.add('team-dot-active');
	teamCardsChanger = setInterval(showTeamCards, 1000 * 20);	
}

	teamCardsChanger = setInterval(showTeamCards, 1000 * 20);

/********************/
/* Service carousel */
/********************/

let nextServiceCardIndex = 1;
let previousServiceCardIndex = nextServiceCardIndex - 1;
const serviceCards = document.getElementsByClassName('services-card');
const serviceDots = document.getElementsByClassName('service-dot');
let serviceCardsChanger; 

function serviceCardsIndexReseter() {
	if (nextServiceCardIndex > serviceCards.length - 1) {
		nextServiceCardIndex = 0;
	}
	if (previousServiceCardIndex < 0) {
		previousServiceCardIndex = serviceCards.length - 1;
	} else if (previousServiceCardIndex > serviceCards.length - 1) {
		previousServiceCardIndex = 0;
	}
}

function showServiceCards() {	
	serviceCardsIndexReseter();
	serviceCards[previousServiceCardIndex].classList.add('hide');
	serviceDots[previousServiceCardIndex].classList.remove('service-dot-active');
	serviceCards[nextServiceCardIndex].classList.remove('hide');
	serviceDots[nextServiceCardIndex].classList.add('service-dot-active');
	nextServiceCardIndex ++;
	previousServiceCardIndex ++;
}

function manualSwitchServiceCards(index) {
	let currentServiceCardIndex = index;
	
	clearInterval(serviceCardsChanger);
	nextServiceCardIndex = index + 1;
	serviceCardsIndexReseter();
	serviceCards[previousServiceCardIndex].classList.add('hide');
	serviceDots[previousServiceCardIndex].classList.remove('service-dot-active');
	previousServiceCardIndex = index;
	serviceCards[currentServiceCardIndex].classList.remove('hide');
	serviceDots[currentServiceCardIndex].classList.add('service-dot-active');
	serviceCardsChanger = setInterval(showServiceCards, 1000 * 20);	
}

	serviceCardsChanger = setInterval(showServiceCards, 1000 * 20);

/*******************/
/* Service Ratings */
/*******************/

const starsWrapper = document.getElementsByClassName('star-wrapper');
let stars;

function addRating () {
	let currentRating = this.parentNode.parentNode.getElementsByClassName('rating-count')[0].innerHTML;
	let updatedRating = Number(currentRating) + 1;
	
	this.parentNode.parentNode.getElementsByClassName('rating-count')[0].innerHTML = updatedRating;
	this.classList.add('star-rated');
  this.parentNode.classList.add('rated');
		 
	for (let i = 0; i < this.parentNode.children.length; i++) {
		this.parentNode.children[i].removeEventListener('click', addRating);
		this.parentNode.children[i].classList.remove('star-hover');
	}
}

function starEventHandler (starsWrapper) {
  stars = starsWrapper.getElementsByClassName('fa-star');
	
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', addRating); 
  }
}

for (let i = 0; i < starsWrapper.length; i++) {
  if (starsWrapper[i].classList.contains('rated') !== true) {
    starEventHandler(starsWrapper[i]);
  }
}

/*********************/
/* Feedback carousel */
/*********************/

let nextFeedbackCardIndex = 1;
let previousFeedbackCardIndex = nextFeedbackCardIndex - 1;
const feedbackCards = document.getElementsByClassName('feedback-card');
const feedbackDots = document.getElementsByClassName('feedback-dot');
let feedbackCardsChanger; 

function feedbackCardsIndexReseter() {
	if (nextFeedbackCardIndex > feedbackCards.length - 1) {
		nextFeedbackCardIndex = 0;
	}
	if (previousFeedbackCardIndex < 0) {
		previousFeedbackCardIndex = feedbackCards.length - 1;
	} else if (previousFeedbackCardIndex > feedbackCards.length - 1) {
		previousFeedbackCardIndex = 0;
	}
}

function showFeedbackCards() {	
	feedbackCardsIndexReseter();
	feedbackCards[previousFeedbackCardIndex].classList.add('hide');
	feedbackDots[previousFeedbackCardIndex].classList.remove('feedback-dot-active');
	feedbackCards[nextFeedbackCardIndex].classList.remove('hide');
	feedbackDots[nextFeedbackCardIndex].classList.add('feedback-dot-active');
	nextFeedbackCardIndex ++;
	previousFeedbackCardIndex ++;
}

function manualSwitchFeedbackCards(index) {
	let currentFeedbackCardIndex = index;
	
	clearInterval(feedbackCardsChanger);
	nextFeedbackCardIndex = index + 1;
	feedbackCardsIndexReseter();
	feedbackCards[previousFeedbackCardIndex].classList.add('hide');
	feedbackDots[previousFeedbackCardIndex].classList.remove('feedback-dot-active');
	previousFeedbackCardIndex = index;
	feedbackCards[currentFeedbackCardIndex].classList.remove('hide');
	feedbackDots[currentFeedbackCardIndex].classList.add('feedback-dot-active');
	feedbackCardsChanger = setInterval(showFeedbackCards, 1000 * 20);	
}

	feedbackCardsChanger = setInterval(showFeedbackCards, 1000 * 20);

/************************/
/* Client logo carousel */
/************************/

let nextLogoCardIndex = 1;
let previousLogoCardIndex = nextLogoCardIndex - 1;
const logoCards = document.getElementsByClassName('client-logo-main-wrapper');
const logoDots = document.getElementsByClassName('client-logo-dot');
let logoCardsChanger; 

function logoCardsIndexReseter() {
	if (nextLogoCardIndex > logoCards.length - 1) {
		nextLogoCardIndex = 0;
	}
	if (previousLogoCardIndex < 0) {
		previousLogoCardIndex = logoCards.length - 1;
	} else if (previousLogoCardIndex > logoCards.length - 1) {
		previousLogoCardIndex = 0;
	}
}

function showLogoCards() {	
	logoCardsIndexReseter();
	logoCards[previousLogoCardIndex].classList.add('logo-card-out');
	logoDots[previousLogoCardIndex].classList.remove('client-logo-dot-active');
	logoCards[nextLogoCardIndex].classList.remove('hide', 'logo-card-out');
	logoDots[nextLogoCardIndex].classList.add('client-logo-dot-active');
	nextLogoCardIndex ++;
	previousLogoCardIndex ++;
}

function manualSwitchLogoCards(index) {
	let currentLogoCardIndex = index;
	
	clearInterval(logoCardsChanger);
	nextLogoCardIndex = index + 1;
	logoCardsIndexReseter();
	logoCards[previousLogoCardIndex].classList.add('logo-card-out');
	logoDots[previousLogoCardIndex].classList.remove('client-logo-dot-active');
	previousLogoCardIndex = index;
	logoCards[currentLogoCardIndex].classList.remove('hide', 'logo-card-out');
	logoDots[currentLogoCardIndex].classList.add('client-logo-dot-active');
	logoCardsChanger = setInterval(showLogoCards, 1000 * 7);	
}

	logoCardsChanger = setInterval(showLogoCards, 1000 * 7);
