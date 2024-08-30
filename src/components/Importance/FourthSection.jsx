import Section from "./Section";
import sectionContent from "./utils/FourthSection";

const FourthSection = () => {
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

export default FourthSection;
