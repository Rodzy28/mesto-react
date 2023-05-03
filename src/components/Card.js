export default function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="place__item">
      <img className="place__picture" onClick={handleCardClick} src={props.card.link} alt={props.card.name} />
      <button className="place__trash-button" type="button" aria-label="Удалить карточку"></button>
      <div className="place__content">
        <h2 className="place__text">{props.card.name}</h2>
        <div className="place__like">
          <button className="place__like-button" type="button" aria-label="Лайкнуть карточку"></button>
          <span className="place__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
