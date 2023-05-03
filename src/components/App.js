import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          buttonText="Сохранить"
          ariaLabel="Закрыть окно редактирования профиля"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar"
            placeholder="Ссылка на аватар" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}
