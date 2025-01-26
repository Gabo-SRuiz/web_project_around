import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleForm){
        super(popupSelector)
        this._handleForm = handleForm;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll(".popup__input");
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;

    }

    _handleForm() {
        this._handleForm();
    }

    setEventListeners() {
        super.setEventListeners()
        this._popup.querySelector(".popup__container").addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleForm(this._getInputValues());
            this.close();
        });
    }
    close() {
        super.close()
        this._popup.querySelectorAll(".popup__input").forEach((input)=> input.value = "");
    }
}