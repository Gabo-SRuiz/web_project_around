import { FormValidator} from "../components/FormValidator.js";
import {Card} from "../components/Card.js";
import { settings,
  pictures,
  initialCards } from "../utils/constants.js";
import  "../utils/utils.js"
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const profile = new UserInfo({name: ".profile__name", description: ".profile__description"})

const profileForm = new PopupWithForm("#profile-popup", (inputs) =>{
  profile.getUserInfo();
  profile.setUserInfo(inputs);
})
profileForm.setEventListeners();

const cardForm = new PopupWithForm("#card-popup", (inputs) => {
  const newCard = new Card(inputs, ".pictures__template", () => {
    popupWithImage.open(inputs);
  }).getCard();
  
  pictures.prepend(newCard);

});

cardForm.setEventListeners();

const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

const cardList = new Section({item: initialCards, renderer: (item) => {
  const card = new Card(item, ".pictures__template", () => {
    popupWithImage.open(item);
  }).getCard();
  cardList.addItem(card);
  }
}, pictures)

cardList.renderItems()

const profileValidator = new FormValidator(settings, "#profile-form");
profileValidator.enableValidation();

const cardValidator = new FormValidator(settings, "#card-form");
cardValidator.enableValidation();