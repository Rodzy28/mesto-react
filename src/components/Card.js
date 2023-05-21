import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`place__like-button ${isLiked && 'place__like-button_active'}`);

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <li className="place__item">
      <img className="place__picture" onClick={handleCardClick} src={props.card.link} alt={props.card.name} />
      {isOwn && <button className="place__trash-button" type="button" aria-label="Удалить карточку" />}
      <div className="place__content">
        <h2 className="place__text">{props.card.name}</h2>
        <div className="place__like">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} aria-label="Лайкнуть карточку" />
          <span className="place__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
