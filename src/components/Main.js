import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';


export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__list">
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
            <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Открыть окно редактирования профиля" />
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографию" />
        </div>
      </section>

      <section className="place">
        <ul className="place__list">
          {props.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  )
}
