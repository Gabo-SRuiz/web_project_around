class Card {
    constructor(data, cardSelector) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
       const card = document.querySelector(this._cardSelector)
       .content.querySelector(".pictures__item").cloneNode(true);

       return card;
    }

    _handleDeleteButton() {
        this._element.remove();
    }

    _handleLikeButton() {
        this._likeButton.classList.toggle("pictures__button-active");
    }

    _showPopup() {
        this._images = document.querySelector(".images");
        this._imageTitle = this._images.querySelector(".images__paragraph");
        this._imagePopup = this._images.querySelector(".images__content");

        this._images.classList.add("images__visible");
        
        this._imagePopup.src = this._link;
        this._imageTitle.textContent = this._name;
    }
    
    _hidePopup() {
    this._images = document.querySelector(".images");
        this._images.classList.remove("images__visible");
    }

    _setEventListeners() {
        this._deleteButton = this._element.querySelector(".pictures__delete-button");
          this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
        
        this._likeButton = this._element.querySelector(".pictures__button");
          this._likeButton.addEventListener("click", () => this._handleLikeButton())
        
        this._element.querySelector(".pictures__image").addEventListener("click", () => this._showPopup());
    
        this._deletePopupButton = document.querySelector(".images__close-button");
          this._deletePopupButton.addEventListener("click", () => this._hidePopup());

        }

    getCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._cardTitle = this._element.querySelector(".pictures__title");
        this._cardImage = this._element.querySelector(".pictures__image");

        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;

        return this._element
    }
}

export {Card}