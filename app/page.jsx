import Hero from "./components/hero";
import Services from "./components/services";
import WhyMe from "./components/why-me";
import Projects from "./components/projects";
import Contacts from "./components/contacts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyMe />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
