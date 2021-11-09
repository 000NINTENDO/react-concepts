import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import lodable from "@loadable/component";
import pMinDelay from "p-min-delay";

const Home = lodable(
  () =>
    pMinDelay(import(/*webpapackChunkName: "Home"*/ "./pages/home/home"), 1000),

  {
    fallback: <div>Loading...</div>,
  }
);
const About = lodable(
  () => import(/*webpapackChunkName: "About"*/ "./pages/about/about"),
  {
    fallback: <div>Loading...</div>,
  }
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
