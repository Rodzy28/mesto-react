export default function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__image-figure">
        <img className="popup__image-viewing" src="#" alt="" />
        <button type="button" className="popup__close-button" aria-label="Закрыть окно просмотра фото"></button>
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </div>
  )
}
