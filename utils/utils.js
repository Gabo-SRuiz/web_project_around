import {
  editButton, 
  popup, 
  addButton,
  popupCard,
  profileAvatar,
  profilePopup,
  pencilImage} from  "./constants.js"

function addForm(evt) {
  if(evt.target === editButton) {
    popup.classList.toggle("popup__visible");
  }else if (evt.target === addButton){
    popupCard.classList.toggle("popup__visible");
  } else if (evt.target === profileAvatar || evt.target === pencilImage) {
    profilePopup.classList.toggle("popup__visible");
  }
} 
editButton.addEventListener("click", addForm);
addButton.addEventListener("click", addForm);
profileAvatar.addEventListener("click", addForm);
pencilImage.addEventListener("click", addForm);

const closeModalViews = document.addEventListener("click", (evt) =>{
  if(evt.target.classList.contains("popup")){
    evt.target.classList.remove("popup__visible")
  }
});
  export {addForm, closeModalViews}