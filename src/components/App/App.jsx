import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { cardsArr } from '../../utils/utils';
import './App.css';

function shuffleCards(array) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  const length = array.length;
  for (let i = length; i > 0; i--) {
     const randomIndex = Math.floor(Math.random() * i);
     const currentIndex = i - 1;
     swap(array, currentIndex, randomIndex)
  }
  return array;
};

function App() {
  const [cards, setCards] = useState(() => shuffleCards(cardsArr.concat(cardsArr)));
  const [openCards, setOpenCards] = useState([]);
  const [removeCards, setRemoveCards] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const begin = () => setIsActive(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setSeconds(seconds => seconds + 1), 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const checkMatch = () => {
    const [first, second] = openCards;
    if (cards[first].name === cards[second].name) {
      setRemoveCards((prev) => ({ ...prev, [cards[first].name]: true }));
      setOpenCards([]);
    }
    setOpenCards([]);
  };

  const handleCardClick = (index) => 
    openCards.length === 1
    ? setOpenCards((prev) => [...prev, index])
    : setOpenCards([index]);

  const checkIsFlipped = (index) => openCards.includes(index);
  const checkIsInactive = (card) => Boolean(removeCards[card.name]);

  useEffect(() => {
    if (openCards.length === 2) setTimeout(checkMatch, 500);
  }, [openCards]);

  console.log(openCards)

  const checkFinish = () => {
    if (Object.keys(removeCards).length === cardsArr.length) {
      setIsActive(false);
    };
  };

  useEffect(() => checkFinish(), [removeCards]);

  return (
    <main className="app">
      <p className="app__timer">{seconds > 0 ? `Прошло ${seconds} сек` : 'Нажмите Старт'}</p>
      <div className="app__container">
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              index={index}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
              key={index}
            />
          );
        })}
      </div>
      {
        (!isActive && seconds === 0) && (
          <div className="app__button-block">
            <button type='button' onClick={begin} className="app__button">Start</button>
          </div>          
        )  
      }
    </main>
  );
}

export default App;
