import "./styles/Quotes.css";
import quotes from "./utils/Quotes";

const Quotes = () => {
  return (
    <div className="quotes-container">
      <h2>Algunas frases que nos inspiran...</h2>
      <h3>De referentes en la industria</h3>
      <div className="quotes-grid">
        {quotes.map((quoteObj, index) => (
          <div key={index} className="quote-card">
            <p>{quoteObj.quote}</p>
            <div className="author">
              <img src={quoteObj.img} alt={quoteObj.name} />
              <div className="author-text">
                <span>- {quoteObj.name}</span>
                <span>{quoteObj.job}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
