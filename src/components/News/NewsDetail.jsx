import React from 'react';
import { useParams } from 'react-router-dom';
import detailedNewsData from '../News/utils/DetailedNewsData';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import './styles/NewsDetail.css'
import TitleNews from './TitleNews';

const NewsDetail = () => {
  const { id } = useParams();
  const news = detailedNewsData.find((item) => item.id === parseInt(id));

  if (!news) {
    return <p>Noticia no encontrada</p>;
  }

  return (
    <>
    <Header />
    <TitleNews />
    <div className="news-detail">
      <img src={news.image} alt={news.title} className="news-detail-image" />
      <h2 className="news-detail-title">{news.title}</h2>
      <div className="news-detail-mini-subtitle">
        <span className="news-detail-date">{news.date}</span> | <span className="news-detail-topic">{news.topic}</span>
      </div>
      <p className="news-detail-author">Autor: {news.author}</p>
      <p className="news-detail-subtitle">{news.subtitle}</p>
      <p className="news-detail-info">{news.newsinfo}</p>
    </div>
    <Footer />
    </>
  );
};

export default NewsDetail;