import About from "./Sections/About/About";
import Hero from "./Sections/Hero/Hero";
import Resume from "./Sections/Resume/Resume";
import Services from "./Sections/Services/Services";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Services />
      <Resume />
    </div>
  );
};

export default Home;
