import React from 'react';
import './styles/LoadMoreButton.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="load-more-container">
      <button className="load-more-button" onClick={onClick}>
        Cargar más noticias
      </button>
    </div>
  );
};

export default LoadMoreButton;