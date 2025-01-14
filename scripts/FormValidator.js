export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = document.querySelector(formElement);
  }
    _hideInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.remove(this._config.inputErrorClass);
        this._errorElement.textContent = "";
        this._errorElement.classList.remove(this._config.errorClass);
      }
    
      _showInputError(inputElement) {
        this._errorMessage = inputElement.validationMessage;
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.textContent = this._errorMessage;
        this._errorElement.classList.add(this._config.errorClass);
      }
    
      _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
      }
    
      _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }
    
      _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._config.inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._config.inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      }
    
      _setEventListeners() {
        this._inputList = Array.from(
          this._formElement.querySelectorAll(this._config.inputSelector)
        );
        this._buttonElement = this._formElement.querySelector(
          this._config.submitButtonSelector
        );
    
        this._toggleButtonState();
    
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
          });
        });
        this._closeButton = Array.from(document.querySelectorAll("#close-button"));
        this._closeButton.forEach((button) => {
          button.addEventListener("click", () => this.resetforms());
          
        })
      }
    
      enableValidation() {
          this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners();
      }
    
      resetforms() {
        this._inputArray = this._formElement.querySelectorAll(this._config.inputSelector);
        this._inputArray.forEach((inputElement) => {
            this._hideInputError(inputElement);
          });
        }
      }

export const settings = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
