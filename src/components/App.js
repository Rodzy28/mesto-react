import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />

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

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          ariaLabel="Закрыть окно редактирования профиля"
        >
          <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name"
            placeholder="Введите имя" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input id="job-input" className="popup__input popup__input_type_job" type="text" name="job"
            placeholder="Введите профессию" minLength="2" maxLength="200" required />
          <span className="popup__input-error job-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          title="Новое место"
          buttonText="Создать"
          ariaLabel="Закрыть окно редактирования карточки"
        >
          <input id="place-input" className="popup__input popup__input_type_place" type="text" name="place"
            placeholder="Название" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input id="src-input" className="popup__input popup__input_type_src" type="url" name="url"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error src-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          ariaLabel="Закрыть окно подтверждения удаления"
          buttonText="Да" />

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          ariaLabel="Закрыть окно редактирования аватарки"
          buttonText="Сохранить"
        >
          <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

        <ImagePopup />
      </div>
    </div>
  );
}
