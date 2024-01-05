import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//-------------------Routes
import Home from "./pages/home/Home";

import About from "./pages/About/About";
import Animals from "./pages/animals/Animals";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/animals" element={<Animals />} />
      </Routes>
    </div>
  );
}

export default App;
