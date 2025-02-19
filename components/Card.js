class Card {
    constructor(data, cardSelector, handleCardClick, handleCardLike, handleDeletelike, handleDeleteCard) {
        this._name = data.name
        this._link = data.link
        this._isLiked = data.isLiked
        this._id = data._id

        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
        this._handleCardLike = handleCardLike
        this._handleDeleteLike = handleDeletelike
        this._handleDeleteCard = handleDeleteCard
    }

    _getTemplate() {
       const card = document.querySelector(this._cardSelector)
       .content.querySelector(".pictures__item").cloneNode(true);

       return card;
    }

    _handleLikeButton() {
        if(this._isLiked) {
            this._handleDeleteLike();
        } else {
            this._handleCardLike();
        }
        this._likeButton.classList.toggle("pictures__button-active");
        this._isLiked = !this._isLiked;
    }
    
    _handleCardClick() {
        this._handleCardClick();
    }

    _setEventListeners() {
        this._deleteButton = this._element.querySelector(".pictures__delete-button");
          this._deleteButton.addEventListener("click", () => this._handleDeleteCard());
        
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
        this._element.id = `card-${this._id}`;

        if (this._isLiked) {
            this._likeButton.classList.add("pictures__button-active");
        }

        return this._element
    }
}

export {Card}