export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__header">{props.title}</h2>
        <button type="button" className="popup__close-button" aria-label={props.ariaLabel}></button>
        <form className={`popup__form-${props.name} popup__form`} name={props.name} noValidate>
          {props.children}
          <button type="submit" className="popup__save-button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}
