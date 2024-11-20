let editButton = document.querySelector(".profile__editbutton");
let popup = document.querySelector(".popup")
let closeButton = document.querySelector(".popup__close-button");
let form = document.querySelector(".popup__container");
let inputName = document.querySelector(".popup__input-name");
let inputDescription = document.querySelector(".popup__input-description");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let saveButton = document.querySelector(".popup__button")

function toggleForm() {
    popup.classList.toggle("popup__visible");
}

editButton.addEventListener('click', toggleForm);
closeButton.addEventListener("click", toggleForm);
saveButton.addEventListener("click", toggleForm);

function handleFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;

}

form.addEventListener("submit", handleFormSubmit);


function abledButton() {
    let validName = inputName.value.trim() !=="";
    let validDescription = inputDescription.value.trim() !=="";

    if (validName || validDescription) {
        saveButton.removeAttribute("disabled");
        saveButton.classList.add("popup__save-button");
    } else {
        saveButton.setAttribute("disabled", true);
        saveButton.classList.remove("popup__save-button");
    }
}

inputName.addEventListener("input", abledButton);
inputDescription.addEventListener("input", abledButton);

