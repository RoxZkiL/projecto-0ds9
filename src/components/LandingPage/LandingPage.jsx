import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { FAQ } from "./FAQ";
import Goals from "./Goals";
import Main from "./Main";
import Quotes from "./Quotes";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Main />
      <FAQ />
      <Goals />
      <Quotes />
      <Footer />
    </>
  );
};

export default LandingPage;
