import { useState } from "react";
import  Modal from 'react-bootstrap/Modal';


import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles2/Accordion.css";
import img from "../../assets/HowToContribute/FirstAccordion/Luz-led.png";
import headerImg from "../../assets/HowToContribute/HeaderImg/header-contribuir.jpeg"
import img2 from "../../assets/HowToContribute/SeconSection/aire-acondicionado.jpg";
import img3 from "../../assets/HowToContribute/ThirdSection/botellas-vidrio.jpg";
import img4 from "../../assets/HowToContribute/Companies1/empresas-1.jpeg";
import img5 from "../../assets/HowToContribute/CompanieNatura/natura.png";
import img6 from "../../assets/HowToContribute/CompanieCasaIdeas/casa-ideas.png";
import img7 from "../../assets/HowToContribute/CompanieChileExpress/chile-express.png";
import img8 from "../../assets/HowToContribute/CompanieLipigas/lipigas.png";
import img9 from "../../assets/HowToContribute/CompanieValdivieso/validivieso.png";
import img10 from "../../assets/HowToContribute/CompaniePolpaico/polpaico.png";
import img11 from "../../assets/HowToContribute/ClubImage/Plan-Local-de-Lectura.jpg";
import img12 from "../../assets/HowToContribute/EducationRedDragon/El_Dragon_Rojo.jpg";
import img13 from "../../assets/HowToContribute/EducationThewonderfulIdea/La_Idea_Mas_Maravillosa-600x606.jpg";
import img14 from "../../assets/HowToContribute/EducationMario/Mario_y_el_Agujero_en_el_Cielo-600x763.jpg";
import img15 from "../../assets/HowToContribute/Modal1/WhatsApp Image 2024-08-22 at 7.13.41 PM.jpeg";
import img16 from "../../assets/HowToContribute/Modal1/infografia-aire-acondicionado.jpeg";
import img17 from "../../assets/HowToContribute/Modal1/infografia-reciclaje.jpeg";



function AllCollapseExample() {
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState (false);
 

  const handleCloseFirstModal = () => setShowFirstModal(false);
  const handleShowFirstModal = () => setShowFirstModal(true);

  const handleCloseSecondModal = () => setShowSecondModal(false); 
  const handleShowSecondModal = () => setShowSecondModal(true);

  const handleCloseThirdModal = () => setShowThirdModal(false);
  const handleShowThirdModal = () => setShowThirdModal(true);
  return (
    <div>
      <header className="accordion-header">
        <img src={headerImg} alt="Encabezado" className="header-image" />
        <div className="header-text">
          ¿Cómo contribuir?
          <h2 className="sub-accordion">Conoce las mejores alternativas para una vida sustentable</h2>

        </div>
      </header>

      <div className="accordion-container">
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Persona Natural</Accordion.Header>
            <Accordion.Body>
              <h2 className="accordion-title">Ideas que puedes implementar por cuenta propia</h2>
              <div className="content-wrapper">
                <div className="content-row">
                  <img src={img} alt="Image not found" className="accordion-image" />
                  <div className="accordion-text">
                    <h4 >
                      Utiliza iluminación LED en casa o empresa.</h4>
                    <h6>Si dispones de grandes ventanales también puedes aprovechar las horas de luz natural y consultar la posibilidad de instalar placas fotovoltaicas para convertir la luz del sol en energía.</h6>
                    <h6>
                    <button type="button" className="btn custom-btn" onClick={handleShowFirstModal}>
                      Infografía
                    </button>
                    </h6>
                  </div>
                </div>
                <div className="content-row">
                  <img src={img2} alt="Image not found" className="accordion-image" />
                  <div className="accordion-text">
                    <h4>Controla la temperatura de tu espacio.</h4>
                    <h6 >
                      A veces, un aire acondicionado muy fuerte hace que sintamos frío en verano dentro de un establecimiento. Y lo mismo sucede en los hogares. Si controlas programas la calefacción y el aire acondicionado a temperaturas intermedias, el ambiente será más agradable y ahorrarás energía.
                      </h6>
                      <h6>
                      <button type="button" className="btn custom-btn" onClick={handleShowSecondModal}>
                      Infografía
                    </button>
                      </h6>
                  </div>
                </div>
                <div className="content-row">
                  <img src={img3} alt="Image not found" className="accordion-image" />
                  <div className="accordion-text">
                    <h4>Evita utilizar materiales que no sean reciclables.</h4>
                    <h6>
                      Separa los residuos, fomenta el reciclaje, los envases retornables y el material reciclado, como el papel para oficina o el aprovechamiento de materiales para crear objetos artesanales tipo DIY (hazlo tú mismo), son algunas de las acciones que puedes comenzar a implementar. La Industria Mexicana de Coca-Cola es el mayor reciclador de PET grado alimenticio en América Latina.
                    </h6>
                    <h6>
                    <button type="button" className="btn custom-btn" onClick={handleShowThirdModal}>
                      Infografía
                    </button>
                    </h6>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Empresas</Accordion.Header>
            <Accordion.Body>
              <h2 className="accordion-title2">Participación medioambiental de las empresas</h2>
              <div className="content-row-large">
                <div className="accordion-text-large">
                  <h6>Según un estudio realizado por Evalueserve, el cual comparó a 30 empresas nacionales del índice S&P IPSA con 3.000 extranjeras, existe una tendencia positiva de las organizaciones chilenas por promover los criterios ESG, es decir, los factores ambientales, sociales y de gobierno corporativo.</h6>
                  <h6>El análisis descubrió que el 97% de las empresas divulgan sus riesgos asociados al clima y un 40% cuenta con una política que se empeña en proteger la biodiversidad. Si bien esta ultima cifra es baja, los porcentajes sobrepasan a los presentados por los negocios del resto de la Región.</h6>
                  <h6>Por su puesto, el camino hacia la sustentabilidad recién comienza. Es de esperar que el mercado chileno esté lleno de organizaciones que conozcan los beneficios de contar con una estrategia de protección de su entorno natural y que forme parte de su cultura organizacional.</h6>
                </div>
                <img src={img4} alt="Imagen de empresa" className="accordion-image-large" />
              </div>
              <h2 className="accordion-title2">Empresas que contribuyen en la sostenibilidad y medioambiente</h2>
              <div className="image-grid">
                <div className="image-item">
                  <img src={img5} alt="Empresa 1" className="accordion-image-grid" />
                  <h2 className="image-caption">Natura</h2>
                </div>
                <div className="image-item">
                  <img src={img6} alt="Empresa 2" className="accordion-image-grid" />
                  <h2 className="image-caption">CasaIdeas</h2>
                </div>
                <div className="image-item">
                  <img src={img7} alt="Empresa 3" className="accordion-image-grid" />
                  <h2 className="image-caption">Chile Express</h2>
                </div>
                <div className="image-item">
                  <img src={img8} alt="Empresa 4" className="accordion-image-grid" />
                  <h2 className="image-caption">Lipigas</h2>
                </div>
                <div className="image-item">
                  <img src={img9} alt="Empresa 5" className="accordion-image-grid" />
                  <h2 className="image-caption">Valdivieso</h2>
                </div>
                <div className="image-item">
                  <img src={img10} alt="Empresa 6" className="accordion-image-grid" />
                  <h2 className="image-caption">Polpaico</h2>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Educación</Accordion.Header>
            <Accordion.Body>
              <h2 className="accordion-title3">¿Por qué es importante el desarrollo sostenible?</h2>
              <div className='content-club-row'>
              <div className="accordion-text">
                <h6>El desarrollo sostenible implica cómo debemos vivir hoy si queremos un futuro mejor, ocupándose de las necesidades presentes sin comprometer las oportunidades de las generaciones futuras de cumplir con las suyas. La supervivencia de nuestras sociedades y de nuestro planeta común pasa por un mundo más sostenible.</h6>
                <h6>Es una especie de acto de malabarismo. Hay que mantener en el aire tres bolas diferentes a la vez: crecimiento económico, inclusión social y protección del medio ambiente. Si una o dos caen al suelo, se acabó la función. Una economía, por ejemplo, puede crecer con rapidez, pero solo durante un tiempo si la mayoría de la gente continúa siendo pobre y se agotan todos los recursos naturales.</h6>
                <h6>Cuando existe un desarrollo sostenible, todo el mundo tiene acceso a un trabajo digno, una atención sanitaria y una educación de calidad. La utilización de los recursos naturales evita la contaminación y las pérdidas permanentes para el medio ambiente. Las decisiones de políticas públicas garantizan que nadie se quede atrás debido a situaciones de inferioridad o discriminación.</h6>

                <div className='accordion-club'>    
                <img src={img11} alt="Club de lectura" className='club-image' />
                <div className='club-text'>
                   <h4 className='accordion-title3'>El club de lectura</h4>   
                  <h6>¿Podrías imaginar la vida sin Internet? Tres billones ochocientas personas no tienen acceso a Internet. De esta cifra, corresponde el ochenta por ciento de la población a los países menos adelantados. Además, el 18% de las personas no tiene acceso a redes de telefonía móvil.
                  ¿Y el futuro? Científicos e investigadores de todo el mundo están logrando nuevos avances que darán forma al mundo del mañana, no solo en lo que respecta a la manera de viajar o comunicarnos sino también a nuestro trabajo y nuestra vida social. También necesitaremos innovaciones para hacer frente a los grandes desafíos de hoy.
                  Nuestra nueva lista de lecturas abarcan muchos de estos temas. Esperamos que estas historias sirvan de inspiración para tomar medidas que permitan a todos los niños y niñas llegar a la escuela de manera segura y que tengan acceso a las infraestructuras en su lugar de residencia.
                  El Club de lectura de los ODS ofrece contenidos en los seis idiomas oficiales de las Naciones Unidas. Para más recomendaciones visita nuestras páginas en árabe, chino, español, francés, inglés y ruso.
                  </h6>
                  </div>
                </div>
                </div>
                <h2 className="accordion-title3">Lista de lectura</h2>
                <div className="content-wrapper3">
                  <div className="content-row3">
                    <img src={img12} alt="Image not found" className="accordion-image3" />
                    <div className="accordion-text3">
                      <h4>El dragón rojo</h4>
                      <h6>Cuento breve con un ritmo ágil de lectura y una historia sencilla y simpática. Valiéndose de los elementos de un cuento tradicional (un pueblo apacible y un dragón que quema sembradíos) la historia muestra una manera de aprovechar los recursos que se tienen para el beneficio de una comunidad.
                      Cuando el dragón quema los sembradíos se vuelve un problema, pero cuando descubren que su fuego puede ayudarlos a tener luz, se convierte en una solución, además de que le muestra al lector una manera de promover la convivencia entre seres diferentes.
                      </h6>
                    </div>
                  </div>
                  <div className="content-row3">
                    <img src={img13} alt="Image not found" className="accordion-image3" />
                    <div className="accordion-text3">
                      <h4>La idea maravillosa</h4>
                      <h6>La idea más maravillosa es un cuento infantil que trata sobre la creatividad y las fases del proceso creativo. Una historia que motivará a niños y niñas a no desanimarse, a cambiar su perspectiva y a intertar las cosas de nuevo.
                      Un día, una niña amanece con una magnífica idea en su cabeza. Con la ayuda de su perro y asistente decide dedicarse a construirla. Sabe cómo será. Sabe cómo funcionará. Y piensa que será muy fácil crearla.
                      Pero cuando se pone manos a la obra, se da cuenta de que es una tarea más difícil de lo que ella pensaba… Trabaja, trabaja y trabaja, ¡pero no consigue que funcione!
                      Pero entonces su ayudante logra convencerla de que se tome un descanso, para regresar a su proyecto más tarde con entusiasmo renovado, y volverlo a intentar. ¿Será suficiente para conseguir construir el invento más maravilloso jamás visto?.
                      </h6>
                    </div>
                  </div>
                  <div className="content-row3">
                    <img src={img14} alt="Image not found" className="accordion-image3" />
                    <div className="accordion-text3">
                      <h4>Mario y el agujero en el cielo: cómo un químico salvó nuestro planeta</h4>
                      <h6>Una historia real sobre un científico contemporáneo que salvó la capa de ozono y el planeta, evitando un desastre en el medio ambiente. Mario Molina es un científico mexicoamericano y un héroe de nuestros días que ayudó a resolver la crisis de la capa de ozono de la década de 1980.
                      Se crió en la Ciudad de México y desde niño sintió curiosidad por los mundos ocultos que estudiaba a través de un microscopio. De joven, ya viviendo en California, descubrió que el clorofluorocarbono, o CFC, que se usa en millones de refrigeradores y aerosoles, estaba haciendo un agujero en la capa de ozono que protege la Tierra.
                      Mario tuvo que alertar al mundo… ¡y rápido! Mario fue galardonado con el premio Nobel y con la Medalla Presidencial de la Libertad. Su inspiradora historia es una esperanza en la lucha contra el calentamiento global.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
        {/* Modal */}
      <Modal show={showFirstModal} onHide={handleCloseFirstModal} size="lg" fullscreen centered backdrop="static"  className="custom-modal-style-one">
        <Modal.Header className="modal-header">
          <Modal.Title>¿En que beneficia usar Luz Led?</Modal.Title>
          <button type="button" className="btn-close" onClick={handleCloseFirstModal}></button>
        </Modal.Header>
        <Modal.Body>
          <img src={img15} alt="modal-content-one" className="img-fluid" />
        </Modal.Body>
      </Modal>
      
      {/* Segundo Modal */}
      <Modal show={showSecondModal} onHide={handleCloseSecondModal} size="lg" fullscreen centered backdrop="static"  className="custom-modal-style-one">
        <Modal.Header className="modal-header">
          <Modal.Title>Usa de forma moderada el aire acondicionado</Modal.Title>
          <button type="button" className="btn-close" onClick={handleCloseSecondModal}></button>
        </Modal.Header>
        <Modal.Body>
          <img src={img16} alt="modal-content-one" className="img-fluid" />
        </Modal.Body>
      </Modal>
    
     {/* Tercer Modal */}
     <Modal show={showThirdModal} onHide={handleCloseThirdModal} size="lg" fullscreen centered backdrop="static"  className="custom-modal-style-one">
        <Modal.Header className="modal-header">
          <Modal.Title>Usa materiales reciclables </Modal.Title>
          <button type="button" className="btn-close" onClick={handleCloseThirdModal}></button>
        </Modal.Header>
        <Modal.Body>
          <img src={img17} alt="modal-content-one" className="img-fluid" />
        </Modal.Body>
      </Modal>
    
 </div>

  );
}

export default AllCollapseExample;