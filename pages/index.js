import { FormValidator} from "../components/FormValidator.js";
import {Card} from "../components/Card.js";
import { 
  settings,
  pictures} from "../utils/constants.js";
import  "../utils/utils.js"
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";


const profile = new UserInfo({name: ".profile__name", about: ".profile__description", avatar: ".profile__image"})

api.getUserData()
.then((res) => profile.setUserInfo(res))
.catch((err) => {console.log(`ERROR: ${err}`)})

const confirmationPopup = new PopupWithConfirmation("#delete-popup", (card) => {
  return api.deleteCard(card)
  .then(() => {
    document.querySelector(`#card-${card}`).remove()
  })
  .catch((err) => {console.log(`ERROR: ${err}`)})
})
confirmationPopup.setEventListeners();

const avatarPopup = new PopupWithForm("#avatar-popup", (input) => {
  return api.updateAvatar(input)
  .then((res) => {
    profile.setUserInfo(res);
  })
  .catch((err) => {console.log(err)})
})
avatarPopup.setEventListeners();

const profileForm = new PopupWithForm("#profile-popup", (inputs) =>{
  return api.editProfile(inputs)
  .then((res) => {
    profile.setUserInfo(res);
  })
  .catch((err) => {console.log(`ERROR: ${err}`)})
})
profileForm.setEventListeners();

const cardForm = new PopupWithForm("#card-popup", (inputs) => {
  return api.addCard(inputs)
  .then((res) => {
    const newCard = new Card(res, ".pictures__template",
       () => {
      popupWithImage.open(res)
      },
      () => {
        api.IsLiked(res._id)
      },
      () => {
        api.deleteIsLiked(res._id)
      },
      () => {
        confirmationPopup.open(res._id)
       })
       .getCard();
      pictures.prepend(newCard);
  })
  .catch((err) => console.log(`ERROR: ${err}`));
});
cardForm.setEventListeners();


const popupWithImage = new PopupWithImage("#image-popup");
popupWithImage.setEventListeners();

api.getInitialCards()
.then((response) => {
  const cardList = new Section({
    item: response, renderer: (item) => {
  const card = new Card(
    item, 
    ".pictures__template", 
    () => {
    popupWithImage.open(item);
    },
    () => {
     api.IsLiked(item._id)
    },
    () => {
      api.deleteIsLiked(item._id)
    },
    () => {
      confirmationPopup.open(item._id)
    })
    .getCard();
  cardList.addItem(card);
  }
}, pictures)
  cardList.renderItems();
})
.catch((err) => {console.log(`ERROR: ${err}`)})


const profileValidator = new FormValidator(settings, "#profile-form");
profileValidator.enableValidation();

const cardValidator = new FormValidator(settings, "#card-form");
cardValidator.enableValidation();

const avatarvalidator = new FormValidator(settings, "#avatar-form");
avatarvalidator.enableValidation();