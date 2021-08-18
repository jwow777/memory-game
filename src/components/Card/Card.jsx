import './Card.css';
import backFace from '../../images/back-face.png';

function Card({ onClick, card, index, isInactive, isFlipped }) {
  const handleFlipCard = () => !isFlipped && onClick(index);
  return (
    <div
      className={`card${isFlipped ? ' card_flip' : ''}${isInactive ? ' card_inactive' : ''}`}
      onClick={handleFlipCard}
    >
      <img className="card__image card__image_front" src={card.image} alt="" />
      <img className="card__image card__image_back" src={backFace} alt="" />
    </div>
  );
}

export default Card;
