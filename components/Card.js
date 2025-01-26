class Card {
    constructor({title, link}, cardSelector, handleCardClick) {
        this._name = title
        this._link = link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
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
    
    _handleCardClick() {
        this._handleCardClick();
    }

    _setEventListeners() {
        this._deleteButton = this._element.querySelector(".pictures__delete-button");
          this._deleteButton.addEventListener("click", () => this._handleDeleteButton());
        
        this._likeButton = this._element.querySelector(".pictures__button");
          this._likeButton.addEventListener("click", () => this._handleLikeButton())
        
        this._element.querySelector(".pictures__image").addEventListener("click", () => this._handleCardClick());
    
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