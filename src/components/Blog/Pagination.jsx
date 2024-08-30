/* eslint-disable react/prop-types */
import "./styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  // Determinar si los botones de "Anterior" y "Siguiente" deben mostrarse
  const showPreviousButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;

  // Calcular las páginas a mostrar
  const getPages = () => {
    let pages = [];
    if (totalPages <= 3) {
      // Mostrar todas las páginas si son 3 o menos
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Mostrar las primeras 3 páginas y la última en la primera página
      // Mostrar las últimas 3 páginas y la primera en la última página
      if (currentPage === 1) {
        pages = [1, 2, 3, totalPages];
      } else if (currentPage === totalPages) {
        pages = [1, totalPages - 2, totalPages - 1, totalPages];
      } else {
        // Mostrar las páginas alrededor de la página actual
        pages = [1, currentPage - 1, currentPage, currentPage + 1, totalPages];

        // Ajustar para evitar duplicados
        if (currentPage === 2) {
          pages = [1, 2, 3, totalPages];
        } else if (currentPage === totalPages - 1) {
          pages = [1, totalPages - 2, totalPages - 1, totalPages];
        }
      }
    }
    return pages;
  };

  return (
    <div className="pagination">
      {showPreviousButton && (
        <span onClick={() => paginate(currentPage - 1)} className="page-link">
          Anterior
        </span>
      )}
      {getPages().map((page, index) => (
        <span
          key={index}
          onClick={() => paginate(page)}
          className={`page-link ${currentPage === page ? "active" : ""}`}
        >
          {page}
        </span>
      ))}
      {showNextButton && (
        <span onClick={() => paginate(currentPage + 1)} className="page-link">
          Siguiente
        </span>
      )}
    </div>
  );
};

export default Pagination;
