import styles from "@/app/styles/home.module.scss";
import Header from "@/app/components/home/Header";
import Services from "./components/home/Services";
import Technologies from "./components/home/Technologies";
import Projects from "./components/home/Projects";
import Pricing from "./components/home/Pricing";
import Contacts from "./components/home/Contacts";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <Technologies />
      <Projects />
      <Pricing />
      <Contacts />
    </div>
  );
}
