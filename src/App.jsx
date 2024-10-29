import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import { AboutPage } from "./components/about/About";




function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<AboutPage/>} /> */}
        {/* Catch-all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
