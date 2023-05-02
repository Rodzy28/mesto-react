import './index.css';

export default function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <a className="header__logo" href="#" target="_blank" title="Ссылка"></a>
        </header>
        <main>
          <section className="profile">
            <div className="profile__list">
              <div className="profile__avatar">
                <div className="profile__avatar-edit"></div>
              </div>
              <div className="profile__info">
                <h1 className="profile__name"></h1>
                <button className="profile__edit-button" type="button" aria-label="Открыть окно редактирования профиля"></button>
                <p className="profile__job"></p>
              </div>
              <button className="profile__add-button" type="button" aria-label="Добавить фотографию"></button>
            </div>
          </section>
          <section className="place">
            <ul className="place__list">
            </ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__text">&copy; 2023 Mesto Russia</p>
        </footer>
        <template className="place__card">
          <li className="place__item">
            <img className="place__picture" src="#" alt="" />
            <button className="place__trash-button" type="button" aria-label="Удалить карточку"></button>
            <div className="place__content">
              <h2 className="place__text"></h2>
              <div className="place__like">
                <button className="place__like-button" type="button" aria-label="Лайкнуть карточку"></button>
                <span className="place__like-counter"></span>
              </div>
            </div>
          </li>
        </template>
        <div className="popup popup_type_profile">
          <div className="popup__container">
            <h2 className="popup__header">Редактировать профиль</h2>
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

        <div className="popup popup_type_card">
          <div className="popup__container">
            <h2 className="popup__header">Новое место</h2>
            <button type="button" className="popup__close-button" aria-label="Закрыть окно редактирования карточки"></button>
            <form className="popup__form-card popup__form" name="card" method="post" noValidate>
              <input id="place-input" className="popup__input popup__input_type_place" type="text" name="place"
                placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
              <input id="src-input" className="popup__input popup__input_type_src" type="url" name="url"
                placeholder="Ссылка на картинку" required />
              <span className="popup__input-error src-input-error"></span>
              <button type="submit" className="popup__save-button">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_image">
          <figure className="popup__image-figure">
            <img className="popup__image-viewing" src="#" alt="" />
            <button type="button" className="popup__close-button" aria-label="Закрыть окно просмотра фото"></button>
            <figcaption className="popup__image-title"></figcaption>
          </figure>
        </div>

        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <h2 className="popup__header">Вы уверены?</h2>
            <form className="popup__form" name="confirm">
              <button type="submit" className="popup__save-button popup__save-button_margin-top">Да</button>
            </form>
            <button type="button" className="popup__close-button" aria-label="Закрыть окно подтверждения удаления"></button>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <h2 className="popup__header">Обновить аватар</h2>
            <button type="button" className="popup__close-button" aria-label="Закрыть окно редактирования аватарки"></button>
            <form className="popup__form" name="avatar" method="post" noValidate>
              <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
                placeholder="Ссылка на аватар" required />
              <span className="popup__input-error avatar-input-error"></span>
              <button type="submit" className="popup__save-button">Сохранить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
