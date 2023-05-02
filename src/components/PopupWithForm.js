export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__header">{`${props.title}`}</h2>
        <button type="button" className="popup__close-button" aria-label="Закрыть окно редактирования профиля"></button>
        <form className="popup__form-profile popup__form" name="profile" method="post" noValidate>
          <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name"
            placeholder="Введите имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input id="job-input" className="popup__input popup__input_type_job" type="text" name="job"
            placeholder="Введите профессию" minLength="2" maxLength="200" required />
          <span className="popup__input-error job-input-error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>
    </div>
  )
}
