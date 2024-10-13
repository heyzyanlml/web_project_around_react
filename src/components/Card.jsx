import React, { useContext } from "react";
import trashButton from "../images/Trash.png";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Card({
  cardData,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext); //Obtener el Valor de contexto de CurrentUserContext

  // Verificando si el usuario actual es el propietario de la tarjeta actual
  const isOwn = cardData.owner._id === currentUser._id;

  // Creando una variable que después establecerás en `className` para el botón eliminar
  const cardDeleteButtonClassName = `${
    isOwn ? "element__button-trash" : "element__button-trash_hidden"
  }`;

  // Verifica si el usuario actual le dio "like" a la tarjeta
  const isLiked = cardData.likes.some((i) => i._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like
  const cardLikeButtonClassName = `element__button-heart ${
    isLiked ? "element__button-heart_active" : ""
  }`;

  function handleClick() {
    onCardClick(cardData);
  }

  function handleLikeClick() {
    onCardLike(cardData);
  }

  function handleCardDelete() {
    onCardDelete(cardData);
  }

  return (
    <div key={cardData._id} className="element">
      <img
        className="element__photo"
        alt={`imagen de ${cardData.name}`}
        src={cardData.link}
        onClick={handleClick} // Llamar a onCardClick al hacer clic en la imagen
      />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleCardDelete}
      >
        <img
          src={trashButton}
          alt="Botón de Eliminar"
          className="element__button-trash-img"
        />
      </button>
      <div className="element__info">
        <p className="element__text">{cardData.name}</p>
        <div className="element__likes">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__counter">{cardData.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
