import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open({name, link}) {
        super.open();
        this._popup.querySelector(".popup__content").src = link;
        this._popup.querySelector(".popup__paragraph").textContent = name;
    }

    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners()
        
    }
}