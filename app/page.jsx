import Hero from "./components/hero";
import Services from "./components/services";
import WhyMe from "./components/why-me";
import Projects from "./components/projects";
import ContactMe from "./components/contact-me";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
