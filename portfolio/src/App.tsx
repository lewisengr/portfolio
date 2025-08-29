import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { aboutMeData } from "./components/AboutMeTxtDesc";
import { InfoSectionDesc } from "./pages/InfoSectionDesc";
import { InfoSectionFull } from "./pages/InfoSectionFull";
import { SkillsSection } from "./pages/SkillsSection";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactPage } from "./pages/ContactPage";
import { Footer } from "./components/Footer";

function App() {
  const aboutRefDesc = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (sectionId: string) => {
    let ref;
    switch (sectionId) {
      case "about-me-desc":
        ref = aboutRefDesc;
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
      <InfoSectionDesc ref={aboutRefDesc} {...aboutMeData} />
      <InfoSectionFull />
      <SkillsSection ref={skillsRef} />
      <PortfolioPage ref={portfolioRef} />
      <ContactPage ref={contactRef} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;