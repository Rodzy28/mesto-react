export default function Main(props) {

  return (
    <main>
      <section className="profile">
        <div className="profile__list">
          <div className="profile__avatar">
            <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Открыть окно редактирования профиля"></button>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографию"></button>
        </div>
      </section>
      <section className="place">
        <ul className="place__list">
        </ul>
      </section>
    </main>
  )
}
