import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmDeletePopup({
  isOpen,
  onClose,
  onConfirmDelete,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDelete(); // Llama a la función para eliminar
  }

  return (
    <PopupWithForm
      name="popUp-Delete"
      title="¿Estás seguro/a?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="pop-up__container">
        <form className="pop-up__form">
          <h3 className="pop-up__title pop-up__delete-title">
            ¿Estás seguro/a?
          </h3>
          <button
            className="pop-up__save-button"
            type="submit"
            onClick={handleSubmit}
          >
            Sí
          </button>
        </form>
      </div>
    </PopupWithForm>
  );
}
