import { useEffect, useState } from 'react';
import api from '../utils/Api';
import React from 'react';
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards)
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__list">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
            <div className="profile__avatar-edit" onClick={props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Открыть окно редактирования профиля"></button>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Добавить фотографию"></button>
        </div>
      </section>

      <section className="place">
        <ul className="place__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  )
}