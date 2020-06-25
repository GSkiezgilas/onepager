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