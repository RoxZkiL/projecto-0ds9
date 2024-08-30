import img1 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0009.jpg";
import img2 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0010.jpg";
import img3 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0011.jpg";
import img4 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0012.jpg";
import img5 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0013.jpg";
import img6 from "../../../assets/Blog/BlogSection/IMG-20240808-WA0014.jpg";
import imgDetail1 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0023.jpg";
import imgDetail2 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0024.jpg";
import imgDetail3 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0025.jpg";
import imgDetail4 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0026.jpg";
import imgDetail5 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0027.jpg";
import imgDetail6 from "../../../assets/Blog/TipDetail/IMG-20240812-WA0028.jpg";

const tips = [
  {
    id: 1,
    title: "Mejora la eficiencia energética en la industria",
    imgSrc: img1,
    text: "Implementa tecnologías más eficientes para reducir el consumo de energía en los procesos industriales. Esto no solo disminuye el impacto ambiental, sino que también puede generar ahorros significativos en costos operativos. Al adoptar sistemas avanzados de automatización y control, es posible optimizar el uso de recursos, mejorando la competitividad y sostenibilidad del sector industrial a largo plazo.",
    imgDetail: imgDetail1,
  },
  {
    id: 2,
    title: "Fomenta la innovación en tu negocio",
    imgSrc: img2,
    text: "Invierte en investigación y desarrollo para encontrar nuevas soluciones que impulsen el crecimiento sostenible. La innovación es clave para mantenerse relevante en un mercado competitivo y para resolver desafíos globales como el cambio climático. A través de la innovación, las empresas pueden descubrir nuevas oportunidades de negocio, mejorar la eficiencia de sus operaciones y reducir su impacto ambiental, asegurando un futuro próspero y resiliente.",
    imgDetail: imgDetail2,
  },
  {
    id: 3,
    title: "Desarrolla infraestructura sostenible",
    imgSrc: img3,
    text: "Promueve la construcción de infraestructura que minimice el impacto ambiental y mejore la calidad de vida. Esto incluye el uso de materiales sostenibles, la implementación de tecnologías de energía renovable y el diseño de edificios eficientes en términos de energía. Al priorizar la sostenibilidad en la infraestructura, se pueden crear espacios que no solo beneficien a las personas hoy, sino que también preserven los recursos naturales para las generaciones futuras.",
    imgDetail: imgDetail3,
  },
  {
    id: 4,
    title: "Apoya a las pymes tecnológicas",
    imgSrc: img4,
    text: "Fomenta el crecimiento de pequeñas y medianas empresas que desarrollen tecnología innovadora y sostenible. Estas pymes son fundamentales para la economía, ya que generan empleo, impulsan la innovación y pueden adaptarse rápidamente a las necesidades cambiantes del mercado. Al brindarles apoyo, ya sea a través de financiamiento, capacitación o acceso a mercados, se fortalece la economía local y se promueve un desarrollo más inclusivo y sostenible.",
    imgDetail: imgDetail4,
  },
  {
    id: 5,
    title: "Adopta energías renovables en la industria",
    imgSrc: img5,
    text: "Integra fuentes de energía renovable en los procesos de producción para reducir la huella de carbono. Al utilizar energías como la solar, eólica o biomasa, las industrias pueden disminuir su dependencia de los combustibles fósiles, reducir las emisiones de gases de efecto invernadero y contribuir al combate del cambio climático. Además, la inversión en energías renovables puede ofrecer beneficios económicos a largo plazo, al estabilizar los costos energéticos y mejorar la imagen corporativa.",
    imgDetail: imgDetail5,
  },
  {
    id: 6,
    title: "Utiliza transporte de carga más eficiente",
    imgSrc: img6,
    text: "Optimiza las rutas y utiliza vehículos más eficientes para reducir las emisiones en el transporte de mercancías. El transporte es una de las principales fuentes de emisiones de gases de efecto invernadero. Al adoptar tecnologías avanzadas, como vehículos eléctricos o híbridos, y al mejorar la planificación logística, es posible minimizar el impacto ambiental, reducir los costos operativos y cumplir con las regulaciones ambientales cada vez más estrictas a nivel global.",
    imgDetail: imgDetail6,
  },
  {
    id: 7,
    title: "Promueve la economía circular",
    imgSrc: img1,
    text: "Implementa prácticas de reciclaje y reutilización en la producción para reducir el desperdicio y maximizar los recursos. La economía circular busca cerrar el ciclo de vida de los productos mediante la recuperación y regeneración de materiales. Esto no solo ayuda a preservar los recursos naturales, sino que también puede generar nuevas oportunidades de negocio y reducir los costos asociados con la gestión de residuos, contribuyendo a un modelo de negocio más sostenible.",
    imgDetail: imgDetail1,
  },
  {
    id: 8,
    title: "Innova en la gestión del agua en la industria",
    imgSrc: img2,
    text: "Desarrolla sistemas de reciclaje de agua y optimización del uso del agua en los procesos industriales. El agua es un recurso vital para la industria, y su gestión eficiente es esencial para la sostenibilidad. Al implementar tecnologías que reduzcan el consumo de agua y permitan su reutilización, las industrias pueden minimizar su impacto ambiental, reducir los costos de operación y asegurar la disponibilidad de agua para futuras generaciones en un contexto de cambio climático.",
    imgDetail: imgDetail1,
  },
  {
    id: 9,
    title: "Apoya la infraestructura digital",
    imgSrc: img3,
    text: "Promueve el acceso a internet de alta velocidad y las tecnologías digitales en áreas rurales y urbanas. La infraestructura digital es crucial para el desarrollo económico y social en la era moderna. Al garantizar el acceso a tecnologías avanzadas, se pueden crear nuevas oportunidades de negocio, mejorar la educación, facilitar el acceso a servicios de salud y reducir la brecha digital. Invertir en infraestructura digital es invertir en el futuro de la sociedad y la economía global.",
    imgDetail: imgDetail1,
  },
  {
    id: 10,
    title: "Impulsa el desarrollo de ciudades inteligentes",
    imgSrc: img4,
    text: "Fomenta la integración de tecnologías avanzadas para mejorar la gestión de recursos y servicios urbanos. Las ciudades inteligentes utilizan datos y tecnología para optimizar la infraestructura, mejorar la calidad de vida de los ciudadanos y reducir el impacto ambiental. Al promover el desarrollo de ciudades inteligentes, se puede mejorar la eficiencia energética, reducir el tráfico, mejorar la gestión de residuos y hacer un uso más sostenible de los recursos naturales.",
    imgDetail: imgDetail1,
  },
  {
    id: 11,
    title: "Desarrolla productos sostenibles",
    imgSrc: img5,
    text: "Crea productos que utilicen materiales sostenibles y procesos de fabricación que minimicen el impacto ambiental. La sostenibilidad debe ser considerada en cada etapa del ciclo de vida del producto, desde el diseño hasta la disposición final. Al desarrollar productos sostenibles, las empresas no solo cumplen con las expectativas de los consumidores conscientes del medio ambiente, sino que también pueden reducir costos, mejorar la eficiencia y crear valor a largo plazo.",
    imgDetail: imgDetail1,
  },
  {
    id: 12,
    title: "Promueve la formación técnica en sostenibilidad",
    imgSrc: img6,
    text: "Fomenta la educación y formación en tecnologías y prácticas sostenibles para trabajadores de la industria. La transición hacia una economía más sostenible requiere de trabajadores capacitados en nuevas tecnologías y métodos de producción. Al invertir en la formación técnica en sostenibilidad, las empresas pueden asegurar que sus empleados cuenten con las habilidades necesarias para adaptarse a los cambios, mejorar la eficiencia y contribuir al logro de los objetivos de desarrollo sostenible.",
    imgDetail: imgDetail1,
  },
  {
    id: 13,
    title: "Incentiva la inversión en infraestructura verde",
    imgSrc: img1,
    text: "Promueve la construcción de infraestructura que proteja el medio ambiente y apoye la economía local. La infraestructura verde, como parques, sistemas de drenaje sostenibles y edificios ecológicos, puede mejorar la calidad de vida, reducir las emisiones de carbono y crear empleo en la comunidad local. Al incentivar la inversión en infraestructura verde, se contribuye a la construcción de comunidades resilientes que están mejor preparadas para enfrentar los desafíos del cambio climático.",
    imgDetail: imgDetail1,
  },
  {
    id: 14,
    title: "Optimiza la cadena de suministro",
    imgSrc: img2,
    text: "Implementa soluciones tecnológicas para mejorar la eficiencia y sostenibilidad en la cadena de suministro. La optimización de la cadena de suministro es esencial para reducir costos, mejorar el servicio al cliente y minimizar el impacto ambiental. Al utilizar tecnologías como el Internet de las Cosas (IoT), la inteligencia artificial y la analítica avanzada, las empresas pueden tomar decisiones más informadas, reducir el desperdicio y crear cadenas de suministro más sostenibles y resilientes.",
    imgDetail: imgDetail1,
  },
  {
    id: 15,
    title: "Fomenta la innovación en energía limpia",
    imgSrc: img3,
    text: "Apoya el desarrollo de nuevas tecnologías para la producción y almacenamiento de energía limpia y sostenible. La innovación en energía limpia es fundamental para reducir la dependencia de los combustibles fósiles y mitigar el cambio climático. Al invertir en investigación y desarrollo de tecnologías como la energía solar, eólica, almacenamiento de energía y redes inteligentes, se pueden crear nuevas oportunidades de negocio, reducir los costos energéticos y contribuir a un futuro más sostenible.",
    imgDetail: imgDetail1,
  },
  {
    id: 16,
    title: "Reduce la contaminación industrial",
    imgSrc: img4,
    text: "Implementa tecnologías para capturar y reducir las emisiones de contaminantes en los procesos industriales. La contaminación industrial es una de las principales causas de problemas ambientales y de salud pública. Al adoptar tecnologías avanzadas, como filtros de aire, sistemas de captura de carbono y tratamiento de aguas residuales, las industrias pueden reducir significativamente su impacto ambiental, cumplir con las regulaciones ambientales y mejorar la calidad de vida de las comunidades cercanas.",
    imgDetail: imgDetail1,
  },
  {
    id: 17,
    title: "Desarrolla infraestructura resiliente",
    imgSrc: img5,
    text: "Construye infraestructuras que puedan resistir y adaptarse a los efectos del cambio climático. La resiliencia es clave para asegurar que la infraestructura crítica, como carreteras, puentes, redes eléctricas y sistemas de agua, pueda continuar funcionando incluso en condiciones adversas. Al incorporar el cambio climático en la planificación y el diseño de la infraestructura, se pueden minimizar los daños, reducir los costos de reparación y garantizar la seguridad y el bienestar de las comunidades.",
    imgDetail: imgDetail1,
  },
  {
    id: 18,
    title: "Incorpora prácticas de sostenibilidad en la fabricación",
    imgSrc: img6,
    text: "Integra métodos de producción sostenibles que reduzcan el consumo de recursos y minimicen los residuos. La fabricación sostenible implica el uso eficiente de materiales, energía y agua, así como la reducción de emisiones y la gestión adecuada de los desechos. Al adoptar prácticas sostenibles en la fabricación, las empresas pueden mejorar su eficiencia operativa, cumplir con las normativas ambientales, reducir costos y fortalecer su reputación como líderes en sostenibilidad.",
    imgDetail: imgDetail1,
  },
];

export default tips;
