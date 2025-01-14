import {Card} from "./Card.js"

export const pictures = document.querySelector(".pictures");
const editButton = document.querySelector(".profile__editbutton");
const popup = document.querySelector(".popup")
const closeButton = document.querySelector(".popup__close-button");
const form = document.querySelector(".popup__container");
const inputName = document.querySelector(".popup__input-name");
const inputDescription = document.querySelector(".popup__input-description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const saveButton = document.querySelector(".popup__button");
const addButton = document.querySelector(".profile__new-picture");
const cancelButton = document.querySelector(".form__xbutton");
const confirmButton = document.querySelector(".form__button");
const popupForm = document.querySelector(".form");
const formCard = document.querySelector("#Form__card");
const inputTitle = document.querySelector("#popup__title");
const inputUrl = document.querySelector("#popup__url");

function toggleForm() {
    popup.classList.toggle("popup__visible");
} 

editButton.addEventListener('click', toggleForm);
closeButton.addEventListener("click", toggleForm);
saveButton.addEventListener("click", toggleForm);

function showCardForm() {
    popupForm.classList.toggle("form__visible");
} 

addButton.addEventListener("click", showCardForm);
cancelButton.addEventListener("click", showCardForm);
confirmButton.addEventListener("click", showCardForm);


formCard.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newCard = new Card({link: inputUrl.value, name: inputTitle.value}, ".pictures__template").getCard();
    
    pictures.append(newCard);
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
});

const closeModalViews = document.addEventListener("click", (evt) =>{
  if(evt.target.classList.contains("popup")){
    evt.target.classList.remove("popup__visible")
  }; 
  if (evt.target.classList.contains("form")){
      evt.target.classList.remove("form__visible")
  };
  if(evt.target.classList.contains("images")){
    evt.target.classList.remove("images__visible")
  };
  });

 const escapeButton = document.addEventListener("keydown", (evt) =>{
  if(evt.key === "Escape"){
    popup.classList.remove("popup__visible");
    popupForm.classList.remove("form__visible");
    
    const images = document.querySelector(".images");
    images.classList.remove("images__visible");
  };
  });

  export {toggleForm, showCardForm, escapeButton, closeModalViews}