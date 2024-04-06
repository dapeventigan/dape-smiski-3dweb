import LandingPage from "./landingpage/landingpage";
import usePreventZoom from "./components/zoom";
import "./App.css";

function App() {
  usePreventZoom();
  
  return <LandingPage />;
}

export default App;
