export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}>
      <figure className="popup__image-figure">
        <img className="popup__image-viewing" src={props.card.link} alt={props.card.name} />
        <button type="button" className="popup__close-button" onClick={props.onClose} aria-label="Закрыть окно просмотра фото"></button>
        <figcaption className="popup__image-title">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}
