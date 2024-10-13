import React from "react";
import editButton from "../images/Edit-Button.png";
import addButton from "../images/Add-Button.png";
import api from "../utils/api.js";
import Card from "./Card.jsx";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext); //Obtener el Valor de contexto de CurrentUserContext

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar_update"
          onClick={onEditAvatarClick}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Profile Photo of the Explorer"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfileClick}
          >
            <img
              src={editButton}
              alt="Edit Profile Button"
              className="profile__edit-button-image"
            />
          </button>
          <p className="profile__info-paragraph">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlaceClick}
        >
          <img
            src={addButton}
            alt="Add Profile Button"
            className="profile__add-button-image"
          />
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            cardData={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={() => onCardDelete(card)} // Abrimos el popup de confirmación
          />
        ))}
      </section>
    </main>
  );
}
