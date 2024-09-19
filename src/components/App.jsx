import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import closeButton from "../images/Close-Icon.png";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeletePopupClick() {
    setisDeletePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <PopupWithForm
        title="Editar Perfil"
        name="popUp-Profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="pop-up__form-error pop-up__form-error_about"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Nuevo Lugar"
        name="popUp-Card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="pop-up__form-error pop-up__form-error_title"></span>
          <input
            className="pop-up__form-item pop-up__form-item-about"
            type="url"
            placeholder="URL de la imagen"
            id="link"
            name="link"
            required
          />
          <span className="pop-up__form-error pop-up__form-error_link"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Cambiar foto de perfil"
        name="popUp-Avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="pop-up__input-container">
          <input
            className="pop-up__form-item pop-up__form-item-about"
            type="url"
            placeholder="URL de la imagen"
            id="link"
            name="link"
            required
          />
          <span className="pop-up__form-error pop-up__form-error_link"></span>
        </fieldset>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name="popUp-Delete"
        isOpen={isDeletePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="pop-up__container">
          <button className="pop-up__close-button">
            <img src={closeButton} alt="Pop up close icon" />
          </button>
          <form className="pop-up__form">
            <h3 className="pop-up__title pop-up__delete-title">
              ¿Estás seguro/a?
            </h3>
            <button className="pop-up__save-button" type="submit">
              Sí
            </button>
          </form>
        </div>
      </PopupWithForm>

      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
