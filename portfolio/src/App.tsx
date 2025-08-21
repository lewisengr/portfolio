import { LandingPage } from "./pages/LandingPage";
import { aboutMeData } from "./components/AboutMeTxtDesc";
import { InfoSectionDesc } from "./pages/InfoSectionDesc";
import { BrowserRouter } from "react-router-dom";
import { InfoSectionFull } from "./pages/InfoSectionFull";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
      <InfoSectionDesc {...aboutMeData} />
      <InfoSectionFull />
      {/* <Skills /> */}
      {/* <Portfolio /> */}
      {/* <ContactMe /> */}
    </BrowserRouter>
  );
}

export default App;
