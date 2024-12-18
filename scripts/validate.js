export const settings ={
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

  
  function hideInputError(formElement, inputElement, classObjects) {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      
      inputElement.classList.remove(classObjects.inputErrorClass);
      errorElement.textContent = "";
      errorElement.classList.remove(classObjects.errorClass);
    }
    
    function showInputError(formElement, inputElement, classObjects) {
        const errorMessage = inputElement.validationMessage;
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        
        inputElement.classList.add(classObjects.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(classObjects.errorClass);
    }
    
    function checkInputValidity(formElement, inputElement, classObjects) {
        if(!inputElement.validity.valid) {
            showInputError(formElement, inputElement, classObjects)
        }else {
            hideInputError(formElement, inputElement, classObjects)
        }
    }
    
    function hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
      })
  
   }

    function toggleButtonState(inputList, buttonElement, classObjects) {
        if(hasInvalidInput(inputList)) {
        buttonElement.classList.add(classObjects.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(classObjects.inactiveButtonClass);
        buttonElement.disabled = false;
    }
  }

  function setEventListeners(formElement, classObjects) {
    const inputList = Array.from(formElement.querySelectorAll(classObjects.inputSelector));
    const buttonElement = formElement.querySelector(classObjects.submitButtonSelector);

    toggleButtonState(inputList, buttonElement, classObjects)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, classObjects)
            toggleButtonState(inputList, buttonElement, classObjects)
        })
    })
  }

  function enableValidation(classObjects){
    const forms = Array.from(document.querySelectorAll(classObjects.formSelector));

    forms.forEach((formElement) =>{
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });  
            setEventListeners(formElement, classObjects)
    });


  }

 export function resetforms(classObjects) {
  const forms = Array.from(document.querySelectorAll(classObjects.formSelector));
    
    forms.forEach((formElement) =>{

        const inputList = Array.from(formElement.querySelectorAll(classObjects.inputSelector));
        inputList.forEach((inputElement)=> {
            hideInputError(formElement, inputElement, classObjects);
            
        })
    });
  }

  enableValidation(settings);