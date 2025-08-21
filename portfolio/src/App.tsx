import { Navbar } from "./components/Navbar";
import { AboutMeTxtDesc } from "./pages/AboutMeTxtDesc";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AboutMeTxtDesc />
    </BrowserRouter>
  );
}

export default App;
