
import { Popup } from "./Popup.js";

class PopupWithConfirmation extends Popup{
    constructor(popupSelector, handleForm) {
        super(popupSelector)
        this._handleForm = handleForm
        this._submitButton = this._popup.querySelector(".popup__button");
        this._card;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.querySelector(".popup__container").addEventListener("submit", (evt) => {
            evt.preventDefault()
            this._submitButton.textContent = "Guardando..."
            this._handleForm(this._card)
            .then(() => {
                this._submitButton.textContent = "Guardar"
                this.close();
            })
            .catch((err) => {
                console.log(`ERROR: ${err}`)
                 this._submitButton.textContent = "Guardar"
            })

        })
    }

    open(card) {
        super.open()
        this._card = card
    }

    close() {
        super.close()
    }

}

export {PopupWithConfirmation}