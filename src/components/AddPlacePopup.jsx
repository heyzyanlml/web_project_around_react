import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { useEffect } from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [buttonText, setbuttonText] = useState("Guardar");

  // Manejadores de cambio de entrada
  function handleChangeTitle(e) {
    setTitle(e.target.value); // Actualiza el estado del título
  }

  function handleChangeLink(e) {
    setLink(e.target.value); // Actualiza el estado del link de la imagen
  }

  async function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    const defaultSubmitText = buttonText;
    setbuttonText("Guardando...");

    // Pasa los valores de los componentes gestionados al controlador externo
    // Llamamos a la función externa onAddPlaceSubmit y le pasamos los datos de la nueva tarjeta
    await onAddPlaceSubmit({
      name: title,
      link,
    });

    setbuttonText(defaultSubmitText);
  }

  useEffect(() => {
    setTitle("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Nuevo Lugar"
      name="popUp-Card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <fieldset className="pop-up__input-container">
        <input
          className="pop-up__form-item pop-up__form-item-name"
          type="text"
          placeholder="Título"
          id="title"
          name="title"
          required
          minLength="2"
          maxLength="30"
          value={title}
          onChange={handleChangeTitle}
        />
        <span className="pop-up__form-error pop-up__form-error_title"></span>
        <input
          className="pop-up__form-item pop-up__form-item-about"
          type="url"
          placeholder="URL de la imagen"
          id="link"
          name="link"
          required
          value={link}
          onChange={handleChangeLink}
        />
        <span className="pop-up__form-error pop-up__form-error_link"></span>
      </fieldset>
    </PopupWithForm>
  );
}
