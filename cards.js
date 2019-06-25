//cards array holds all card
let card = document.getElementsByClassName("card");
let cards = [... card];

// loop to add event listeners to each card
for (var i=  0;i <cards.length; i++){
    cards[i].addEventListener("click", displayCard);
};
//!!!! Wat is display card?,??????

//toggles open and show class to display cards
var displayCard = () => {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}