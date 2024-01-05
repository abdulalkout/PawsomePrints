import "./App.css";
import { Route, Routes } from "react-router-dom";

//-------------------Routes
import Home from "./pages/home/Home";
import About from './pages/About/About'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/animals" element={<Teasan />} /> */}
        <Route path="/about" element={<About />} />
         {/* <Route path="/animals" element={<Deandre />} /> */}
      </Routes>
    </div>
  );
}

export default App;
