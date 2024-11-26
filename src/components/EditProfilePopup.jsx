import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setbuttonText] = useState("Guardar");

  // Manejadores de cambio de entrada
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // Suscripción al contexto
  const currentUser = useContext(CurrentUserContext);

  // Después de cargar el usuario actual desde la API
  // sus datos serán usados en componentes gestionados.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    const defaultSubmitText = buttonText;
    setbuttonText("Guardando...");

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      name,
      about: description,
    }).finally(() => {
      setbuttonText(defaultSubmitText);
    });
  }

  return (
    <PopupWithForm
      title="Edit profile"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <fieldset className="pop-up__input-container">
        <input
          className="pop-up__form-item pop-up__form-item-name"
          type="text"
          placeholder="Nombre"
          name="name"
          id="name"
          required
          minLength="2"
          maxLength="40"
          defaultValue={name}
          onChange={handleChangeName}
        />
        <span className="pop-up__form-error pop-up__form-error_name"></span>
        <input
          className="pop-up__form-item pop-up__form-item-about"
          type="text"
          placeholder="Acerca de mí"
          name="about"
          id="about"
          required
          minLength="2"
          maxLength="200"
          defaultValue={description}
          onChange={handleChangeDescription}
        />
        <span className="pop-up__form-error pop-up__form-error_about"></span>
      </fieldset>
    </PopupWithForm>
  );
}
