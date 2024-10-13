import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";
import ConfirmDeletePopup from "./ConfirmDeletePopup.jsx";
import api from "../utils/api.js";
import { useState, useEffect, useRef } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState({}); // Usamos {} para evitar errores si algún componente intenta acceder a las propiedades del usuario antes de que los datos se hayan cargado.

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api
      .updateUserProfile(name, about)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al actualizar el perfil: ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .updateAvatar(avatar)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al actualizar el avatar: ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }

  function handleAddPlaceSubmit({ link, name }) {
    api
      .createCard(link, name)
      .then((newCard) => {
        setCards([newCard, ...cards]); // Actualizamos el estado con la nueva tarjeta
        closeAllPopups();
      })
      .catch((err) => {
        console.error(`Error al añadir nueva tarjeta ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }

  function handleDeletePopupClick(card) {
    setCardToDelete(card); // Guarda la tarjeta que se quiere eliminar
    setisDeletePopupOpen(true); // Abre el popup
  }

  // Obtiene las tarjetas iniciales
  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(`Error al dar/retirar like: ${err}`));
  }

  function handleCardDelete(card) {
    if (!cardToDelete) {
      return;
    }

    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        // Actualiza el estado de las tarjetas
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        console.log("Tarjeta eliminada correctamente");
        closeAllPopups(); // Cierra el popup solo después de eliminar la tarjeta
      })
      .catch((err) => console.error(`Error al eliminar la tarjeta: ${err}`));
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setisDeletePopupOpen(false);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData); // Guardamos los datos del usuario actual
      })
      .catch((err) => {
        console.error(`Error obteniendo los datos del usuario: ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        ></AddPlacePopup>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <ConfirmDeletePopup
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleCardDelete} // Se elimina card cuando el usuario confirma
        ></ConfirmDeletePopup>

        <Header />
        <Main
          cards={cards}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeletePopupClick} // Abrimos el popup de confirmación
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
