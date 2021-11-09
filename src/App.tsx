import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import lodable from "@loadable/component";

const Home = lodable(
  () => import(/*webpapackChunkName: "Home"*/ "./pages/home/home")
);
const About = lodable(
  () => import(/*webpapackChunkName: "About"*/ "./pages/about/about")
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
