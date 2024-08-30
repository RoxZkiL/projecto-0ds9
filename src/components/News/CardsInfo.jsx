import React from 'react';
import Card from './Card';

const CardsInfo = ({ cardsData }) => {
  
  const handleClick = (id) => {
    window.open(`/noticias/${id}`, "_blank");
  };

  return (
    <div className="cards-info">
      {cardsData.map((card, index) => (
        <Card
          id={index}
          image={card.image}
          title={card.title}
          info={card.info}
          onClick={() => handleClick(card.id)} // Hacer la tarjeta clickeable
        />
      ))}
    </div>
  );
};

export default CardsInfo;