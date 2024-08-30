import { useState } from "react";
import AddCommentForm from "./AddCommentForm";
import CommentCarousel from "./CommentCarrousel";
import tips from "./utils/BlogSection";
import { useParams } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "./styles/TipDetail.css";
import carouselData from "./utils/TipDetail";

const TipDetail = () => {
  const { id } = useParams();

  const tip = tips.find((tip) => tip.id === parseInt(id));

  const [comments, setComments] = useState(carouselData);

  const handleAddComment = (text) => {
    const newComment = {
      id: comments.length + 1,
      author: "Usuario Anónimo",
      text: text,
      avatar: "https://picsum.photos/50/50",
    };
    setComments([newComment, ...comments]); // Añade el nuevo comentario al inicio de la lista
  };

  if (!tip) return <p>No se encontró ese recurso</p>;

  return (
    <>
      <Header />
      <div className="tipDetail-main-container">
        <div className="img-title-info-wrapper">
          <img src={tip.imgDetail} alt="img not found" />
          <div className="tipDetail-text">
            <h2>{tip.title}</h2>
            <p>{tip.text}</p>
          </div>
        </div>
        <div className="comments-title">
          <h3>Comentarios</h3>
        </div>
        <CommentCarousel comments={comments} />
        <AddCommentForm onAddComment={handleAddComment} />
      </div>
      <Footer />
    </>
  );
};

export default TipDetail;
