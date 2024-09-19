import React from "react";
import closeButton from "../images/Close-Icon.png";

export default function PopupWithForm(props) {
  return (
    <section
      className={`pop-up popup_type_${props.name} ${
        props.isOpen ? "pop-up_opened" : ""
      }`}
    >
      <div className="pop-up__container">
        <button className="pop-up__close-button" onClick={props.onClose}>
          <img src={closeButton} alt="Pop up close icon" />
        </button>
        <form className="pop-up__form" name={props.name}>
          <h3 className="pop-up__title">{props.title}</h3>
          {props.children}
          <button className="pop-up__save-button" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}
