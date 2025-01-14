export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = document.querySelector(formElement);
  }
    _hideInputError(formElement, inputElement) {
        this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.remove(this._config.inputErrorClass);
        this._errorElement.textContent = "";
        this._errorElement.classList.remove(this._config.errorClass);
      }
    
      _showInputError(formElement, inputElement) {
        this._errorMessage = inputElement.validationMessage;
        this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
        inputElement.classList.add(this._config.inputErrorClass);
        this._errorElement.textContent = this._errorMessage;
        this._errorElement.classList.add(this._config.errorClass);
      }
    
      _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(formElement, inputElement);
        } else {
          this._hideInputError(formElement, inputElement);
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
    
      _setEventListeners(formElement) {
        this._inputList = Array.from(
          formElement.querySelectorAll(this._config.inputSelector)
        );
        this._buttonElement = formElement.querySelector(
          this._config.submitButtonSelector
        );
    
        this._toggleButtonState();
    
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._checkInputValidity(formElement, inputElement);
            this._toggleButtonState();
          });
        });
      }
    
      enableValidation() {
          this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners(this._formElement);
      }
    
      resetforms() {
        this._forms = Array.from(
          document.querySelectorAll(this._config.formSelector)
        );
    
        this._forms.forEach((formElement) => {
          this._inputArray = Array.from(
            formElement.querySelectorAll(this._config.inputSelector)
          );
          this._inputArray.forEach((inputElement) => {
            this._hideInputError(formElement, inputElement);
          });
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
