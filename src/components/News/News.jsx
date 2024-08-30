import React, { useState } from 'react';
import TitleNews from './TitleNews';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CardsInfo from './CardsInfo';
import NewsCard from './NewsCard';
import LoadMoreButton from './LoadMoreButton';
import './styles/News.css';
import detailedNewsData from './utils/DetailedNewsData';
import CreateNewsForm from './CreateNewsForm';

const News = () => {
  const [visibleCards, setVisibleCards] = useState(4); // Mostrar 3 noticias inicialmente

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3); // Cargar 3 más cada vez
  };

  const mainNews = detailedNewsData[0];

  return (
    <>
      <Header />
      <TitleNews />
      <main className='container-news'>
        <div className='bottoncreate'><CreateNewsForm/></div>
        <h1 className='main-tittle'>Lo más reciente</h1>
        <div className="main-news">
          <NewsCard 
            id={mainNews.id}
            image={mainNews.image}
            title={mainNews.title}
            date={mainNews.date}
            topic={mainNews.topic}
            subtitle={mainNews.subtitle}
            info={mainNews.info}
          />
        </div>
        <h2 className='more-news'>Más Noticias</h2>
        <CardsInfo cardsData={detailedNewsData.slice(1, visibleCards)} />
        {visibleCards < detailedNewsData.length && (
          <LoadMoreButton onClick={loadMore} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default News;