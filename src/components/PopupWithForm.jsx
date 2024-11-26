import React from "react";
import closeButton from "../images/Close-Icon.png";
import { FormValidator } from "./FormValidator";

export default function PopupWithForm(props) {
  const formConfig = {
    formElement: ".pop-up__form",
    inputElement: ".pop-up__form-item",
    submitButton: ".pop-up__save-button",
    errorNode: ".pop-up__form-error_",
    errorClass: "pop-up__form-item_error",
  };

  const formRef = React.useRef();

  React.useEffect(() => {
    const formValidator = new FormValidator(formConfig, formRef.current);
    formValidator.enableValidation();
  }, []);

  const handleClickOut = (evt) => {
    //console.log("handleClickOut", evt.target);
    evt.target.classList.contains("pop-up") && props.onClose();
  };

  return (
    <section
      onClick={handleClickOut}
      className={`pop-up popup_type_${props.name} ${
        props.isOpen ? "pop-up_opened" : ""
      }`}
    >
      <div className="pop-up__container">
        <button className="pop-up__close-button" onClick={props.onClose}>
          <img src={closeButton} alt="Pop up close icon" />
        </button>
        <form
          className="pop-up__form"
          ref={formRef}
          name={props.name}
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(e);
          }}
        >
          <h3 className="pop-up__title">{props.title}</h3>
          {props.children}
          <button className="pop-up__save-button" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
