import "./styles/Goals.css";
import goalsData from "./utils/Goals";

const Goals = () => {
  return (
    <div className="goals">
      <h2>Metas</h2>
      <p>¿Qué metas específicas busca el desarrollo sostenible?</p>
      <div className="goal-cards">
        {goalsData.map((goal, index) => (
          <div key={index} className="goal-card">
            <img src={goal.img} alt={goal.title} />
            <h3>{goal.title}</h3>
            <p>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
