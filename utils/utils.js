import {
  editButton, 
  popup, 
  addButton,
  popupCard} from  "./constants.js"

function toggleForm(evt) {
  if(evt.target === editButton) {
    popup.classList.toggle("popup__visible");
  }else{
    popupCard.classList.toggle("popup__visible");
  }
} 
editButton.addEventListener('click', toggleForm);
addButton.addEventListener("click", toggleForm)

const closeModalViews = document.addEventListener("click", (evt) =>{
  if(evt.target.classList.contains("popup")){
    evt.target.classList.remove("popup__visible")
  }
});
  export {toggleForm, closeModalViews}