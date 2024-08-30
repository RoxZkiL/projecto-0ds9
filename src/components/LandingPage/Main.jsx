import "./styles/Main.css";
import { useEffect, useRef } from "react";
import transparentVideo from "../../assets/LandingPage/Main/video.mp4";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/importancia");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <main className="main">
      <div className="video-container">
        <video
          ref={videoRef}
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={transparentVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="intro">
        <h1>Desarrollo sostenible</h1>
        <p>Industria, innovación e infraestructura</p>
        <button onClick={handleClick}>Más información</button>
      </section>
    </main>
  );
};

export default Main;
