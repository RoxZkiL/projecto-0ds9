import React from 'react';
import './styles/Card.css';

const Card = ({ image, title, info, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-message">{info}</p>
      </div>
    </div>
  );
};

export default Card;