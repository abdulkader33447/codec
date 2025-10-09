import About from "./Sections/About/About";
import Blogs from "./Sections/Blogs/Blogs";
import Contact from "./Sections/Contact/Contact";
import Feedback from "./Sections/Feedback/Feedback";
import Hero from "./Sections/Hero/Hero";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Resume from "./Sections/Resume/Resume";
import Services from "./Sections/Services/Services";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="feedback">
        <Feedback />
      </section>

      <section id="blog">
        <Blogs />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
