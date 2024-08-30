/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./styles/BlogSection.css";
import tips from "./utils/BlogSection";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const BlogSection = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTips, setFilteredTips] = useState(tips);
  const navigate = useNavigate();
  const tipsPerPage = 6;

  //Filtrado de la searchbar
  useEffect(() => {
    const filterTips = tips.filter((tip) =>
      tip.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTips(filterTips);
  }, [search]);

  // Calcular el índice de los elementos a mostrar en la página actual
  const indexOfLastTip = currentPage * tipsPerPage;
  const indexOfFirstTip = indexOfLastTip - tipsPerPage;
  const currentTips = filteredTips.slice(indexOfFirstTip, indexOfLastTip);

  const totalPages = Math.ceil(filteredTips.length / tipsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <div className="blog-section-container">
        {currentTips.map((tip) => (
          <div
            key={tip.id}
            className="tip-card"
            onClick={() => handleClick(tip.id)}
          >
            <img src={tip.imgSrc} alt={tip.title} className="tip-image" />
            <p className="tip-title">{tip.title}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </div>
  );
};

export default BlogSection;
