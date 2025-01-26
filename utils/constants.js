const settings = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };
  
const pictures = document.querySelector(".pictures");
const editButton = document.querySelector(".profile__editbutton");
const popup = document.querySelector("#profile-popup")
const formProfile = document.querySelector("#profile-form");
const addButton = document.querySelector(".profile__new-picture");
const formCard = document.querySelector("#card-form");
const inputTitle = document.querySelector("#popup__title");
const inputUrl = document.querySelector("#popup__url");
const popupCard = document.querySelector("#card-popup");

const initialCards = [
    {
      title: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
        title: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
        title: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      title: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      title: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      title: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

export {settings, 
    pictures, 
    editButton, 
    popup,  
    formProfile, 
    addButton,
    formCard,
    inputTitle,
    inputUrl,
    initialCards,
    popupCard}