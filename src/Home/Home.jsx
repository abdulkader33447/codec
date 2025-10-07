import About from "./Sections/About/About";
import Feedback from "./Sections/Feedback/Feedback";
import Hero from "./Sections/Hero/Hero";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Resume from "./Sections/Resume/Resume";
import Services from "./Sections/Services/Services";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Feedback />
    </div>
  );
};

export default Home;
