import closeButton from "../images/Close-Icon.png";

export default function ImagePopup({ card, onClose }) {
  return (
    <section className={`pop-up popup-image ${card ? "pop-up_opened" : ""}`}>
      <div className="pop-up__image-container">
        <button className="pop-up__close-button" onClick={onClose}>
          <img src={closeButton} alt="Pop up close icon" />
        </button>
        <img
          className="pop-up__image-zoom"
          src={card?.link}
          alt={`imagen de ${card?.name}`}
        />
        <p className="pop-up__image-title">{card?.name}</p>
      </div>
    </section>
  );
}
