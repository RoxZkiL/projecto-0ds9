import Section from "./Section";
import sectionContent from "./utils/ThirdSection";

const ThirdSection = () => {
  return (
    <Section
      title={sectionContent.title}
      text={sectionContent.text}
      imgSrc={sectionContent.imgSrc}
      imgAlt={sectionContent.imgAlt}
      reverse={sectionContent.reverse}
    />
  );
};

export default ThirdSection;
