/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/AddCommentForm.css";

const AddCommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    onAddComment(comment);
    setComment("");
  };

  const handleClear = () => {
    setComment("");
  };

  return (
    <div className="comment-form-container">
      <form className="comment-form-wrapper" onSubmit={handleSubmit}>
        <textarea
          className="comment-textarea"
          placeholder="Escribe aquí tu comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="comment-buttons">
          <button type="submit" className="comment-button">
            Enviar
          </button>
          <button
            type="button"
            className="comment-button clear"
            onClick={handleClear}
          >
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCommentForm;
