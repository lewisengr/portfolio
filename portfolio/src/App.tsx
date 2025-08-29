import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { aboutMeData } from "./components/AboutMeTxtDesc";
import { InfoSectionDesc } from "./pages/InfoSectionDesc";
import { InfoSectionFull } from "./pages/InfoSectionFull";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (sectionId: string) => {
    let ref;
    switch (sectionId) {
      case "about-me":
        ref = aboutRef;
        break;
      case "skills":
        ref = skillsRef;
        break;
      case "portfolio":
        ref = portfolioRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        return;
    }
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <LandingPage onLinkClick={handleScroll} />
      <InfoSectionDesc ref={aboutRef} {...aboutMeData} />
      <InfoSectionFull ref={skillsRef} />
      {/* <SkillsSection ref={skillsRef} /> */}
      {/* <PortfolioSection ref={portfolioRef} /> */}
      {/* <ContactSection ref={contactRef} /> */}
    </BrowserRouter>
  );
}

export default App;
