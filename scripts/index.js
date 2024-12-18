import "./validate.js"
import { resetforms, settings } from "./validate.js";

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
const popupForm = document.querySelector(".form")
const cardForm = document.querySelector(".form__container");
const pictures = document.querySelector(".pictures");
const cardName = document.querySelector(".form__input-name");
const cardLink = document.querySelector(".form__input-link"); 
const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];
  
  function createCardElements(name, link) {
      const cardsTemplate = document.querySelector(".pictures__template").content;
      const cards = cardsTemplate.querySelector(".pictures__item").cloneNode(true);
      const cardTitle = cards.querySelector(".pictures__title");
      const cardImage = cards.querySelector(".pictures__image");
      const likeButton = cards.querySelector(".pictures__button");
      const deleteButton = cards.querySelector(".pictures__delete-button");
      
      likeButton.addEventListener("click", function(evt) {
        evt.target.classList.toggle("pictures__button-active")
      });

      deleteButton.addEventListener("click", function(){
        cards.remove();
      });

      cardImage.addEventListener("click", function() {
        const imagePopup = document.querySelector(".images__content");
        const imageTitle = document.querySelector(".images__paragraph");
        const closeImageButton = document.querySelector(".images__close-button");
        const images = document.querySelector(".images");

        images.classList.toggle("images__visible");
        
        imagePopup.src = cardImage.src;
        imageTitle.textContent = cardTitle.textContent;

        closeImageButton.addEventListener("click", function() {
            images.classList.remove("images__visible");
        });
      });

    cardTitle.textContent = name;
    cardImage.src = link;

    return cards;

  }

  initialCards.forEach(function (item) {
    const cardElement = createCardElements(item.name, item.link);
    pictures.append(cardElement);

});

function createCard(evt) {
    evt.preventDefault();
    const cardElement = createCardElements(cardName.value, cardLink.value);
    pictures.prepend(cardElement);
}

    cardForm.addEventListener("submit", createCard);

function toggleForm() {
    popup.classList.toggle("popup__visible");
    resetforms(settings);
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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
});

document.addEventListener("click", (evt) =>{
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

  document.addEventListener("keydown", (evt) =>{
  if(evt.key === "Escape"){
    popup.classList.remove("popup__visible");
    popupForm.classList.remove("form__visible");
    
    const images = document.querySelector(".images");
    images.classList.remove("images__visible");
  };
  });