export default function Main() {

  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__list">
          <div className="profile__avatar">
            <div className="profile__avatar-edit" onClick={handleEditAvatarClick}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" onClick={handleEditProfileClick} type="button" aria-label="Открыть окно редактирования профиля"></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" onClick={handleAddPlaceClick} type="button" aria-label="Добавить фотографию"></button>
        </div>
      </section>
      <section className="place">
        <ul className="place__list">
        </ul>
      </section>
    </main>
  )
}
