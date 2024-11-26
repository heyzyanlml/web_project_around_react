import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onConfirmDelete,
}) {
  const [buttonText, setbuttonText] = useState("Eliminar");

  async function handleSubmit(e) {
    e.preventDefault();

    const defaultSubmitText = buttonText;
    setbuttonText("Eliminando...");

    Promise.resolve(onConfirmDelete()).finally(() => {
      // Restablece el texto a "Eliminar" después de completar
      setbuttonText(defaultSubmitText);
    });
  }

  return (
    <PopupWithForm
      name="popUp-Delete"
      title="¿Estás seguro/a?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={buttonText}
    ></PopupWithForm>
  );
}
