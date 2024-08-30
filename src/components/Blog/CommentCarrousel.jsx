/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/CommentCarrousel.css";

const CommentCarousel = ({ comments }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    let newIndex;
    if (currentIndex === 0) {
      newIndex = comments.length - 3;
    } else {
      newIndex = currentIndex - 1;
    }
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    let newIndex;
    if (currentIndex === comments.length - 3) {
      newIndex = 0;
    } else {
      newIndex = currentIndex + 1;
    }
    setCurrentIndex(newIndex);
  };

  const currentComments = comments.slice(currentIndex, currentIndex + 3);

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} className="carousel-button">
        ‹
      </button>
      <div className="carousel-content">
        {currentComments.map((comment, index) => (
          <div key={comment.id || index} className="carousel-card">
            <div className="carousel-title-img">
              <img src={comment.avatar} alt="avatar" className="avatar" />
              <h4>{comment.author}</h4>
            </div>
            <div className="carousel-comment">
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button">
        ›
      </button>
    </div>
  );
};

export default CommentCarousel;
