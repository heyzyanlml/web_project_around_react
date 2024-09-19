import editButton from "../images/Edit-Button.png";
import addButton from "../images/Add-Button.png";
import api from "../utils/api.js";
import Card from "./Card.js";
import { useState, useEffect } from "react";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setuserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setuserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.error(`Error obteniendo los datos del usuario: ${err}`); // Si hay un error, lo mostramos en la consola;
      });
  }, []);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar_update"
          onClick={props.onEditAvatarClick}
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Profile Photo of the Explorer"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfileClick}
          >
            <img
              src={editButton}
              alt="Edit Profile Button"
              className="profile__edit-button-image"
            />
          </button>
          <p className="profile__info-paragraph">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlaceClick}
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
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
