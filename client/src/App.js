import "./App.css";
import { Route, Routes } from "react-router-dom";
import './components/introduction/Introduction.css'
//-------------------Routes
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/animals" element={<Teasan />} /> */}
      </Routes>
    </div>
  );
}

export default App;
