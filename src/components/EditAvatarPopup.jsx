import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();
  const [buttonText, setbuttonText] = useState("Guardar");

  async function handleSubmit(e) {
    e.preventDefault();

    const defaultSubmitText = buttonText;
    setbuttonText("Guardando...");

    await onUpdateAvatar({
      avatar: avatarRef.current.value, // Obtiene el valor del input a través de ref
    });
  }

  useEffect(() => {
    setbuttonText("Guardar");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="popUp-Avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    >
      <fieldset className="pop-up__input-container">
        <input
          className="pop-up__form-item pop-up__form-item-about"
          type="url"
          placeholder="URL de la imagen"
          id="link"
          name="link"
          ref={avatarRef}
          required
        />
        <span className="pop-up__form-error pop-up__form-error_link"></span>
      </fieldset>
    </PopupWithForm>
  );
}
