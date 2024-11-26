export class FormValidator {
  constructor(formConfig, formElement) {
    this._formConfig = formConfig;
    this._formElement = formElement;
    this._inputElements = Array.from(
      formElement.querySelectorAll(formConfig.inputElement)
    );
    this._submitButton = formElement.querySelector(formConfig.submitButton);
  }

  // Método privado para mostrar el error
  _showInputError(inputElement, validationMessage) {
    const errorNode = this._formElement.querySelector(
      `${this._formConfig.errorNode}${inputElement.name}`
    );
    inputElement.classList.add(this._formConfig.errorClass);
    errorNode.textContent = validationMessage;
  }

  // Método privado para esconder el error
  _hideInputError(inputElement) {
    const errorNode = this._formElement.querySelector(
      `${this._formConfig.errorNode}${inputElement.name}`
    );
    inputElement.classList.remove(this._formConfig.errorClass);
    errorNode.textContent = "";
  }

  // Método privado para validar las entradas del usuario
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Método privado para verificar si hay entradas inválidas
  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  // Método privado para habilitar/deshabilitar el botón de envío
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputElements)) {
      this._submitButton.disabled = true;
    } else {
      this._submitButton.disabled = false;
    }
  }

  // Método privado para agregar event listeners a las entradas del formulario
  _setEventListeners() {
    this._toggleButtonState();

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (event) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Método público para activar la validación del formulario
  enableValidation() {
    this._setEventListeners();
  }
}
