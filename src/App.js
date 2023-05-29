import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Statistic from "./images/pexels-pixabay-265087 1.png";

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="links">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
function Home() {
  return (
    <>
      <div className="landing-box">
        <h1>How To Start Your Own Bussiness ! Will You Ready ?</h1>
        <p>
          WE help individuals or Organizations to start their business or
          start-up by giving them indepth theory and practical sessions.
        </p>
        <button>Join Now</button>
        <img src={Statistic} />
      </div>
    </>
  );
}

export default App;
