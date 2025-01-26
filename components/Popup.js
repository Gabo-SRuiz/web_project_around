export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(evt) {
        if(evt.key === "Escape"){
            this.close();
          };
    }

    setEventListeners() {
        this._closeButton = this._popup.querySelector(".popup__close-button");
        this._closeButton.addEventListener("click", () => this.close());

        this._popup.addEventListener("keydown", (evt) => this._handleEscClose(evt));

        this._popup.addEventListener("click", (evt) => {
            if(evt.target === ".popup"){
                this.close();
            }
        });
    }

    open() {
        this._popup.classList.add("popup__visible");
    }
    close() {
        this._popup.classList.remove("popup__visible");
    }
}