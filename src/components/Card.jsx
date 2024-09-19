import React from "react";
import trashButton from "../images/Trash.png";

export default function Card({ cardData, onCardClick }) {
  function handleClick() {
    onCardClick(cardData);
  }

  return (
    <div key={cardData._id} className="element" onClick={handleClick}>
      <img
        className="element__photo"
        alt={`imagen de ${cardData.name}`}
        src={cardData.link}
      />
      <button type="button" className="element__button-trash">
        <img
          src={trashButton}
          alt="Botón de Eliminar"
          className="element__button-trash-img"
        />
      </button>
      <div className="element__info">
        <p className="element__text">{cardData.name}</p>
        <div className="element__likes">
          <button type="button" className="element__button-heart"></button>
          <p className="element__counter">{cardData.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
