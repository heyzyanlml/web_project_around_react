import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value, // Obtiene el valor del input a través de ref
    });
  }

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="popUp-Avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
