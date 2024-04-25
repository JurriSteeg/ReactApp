import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import './style.css';


function Main() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="Locations" element={<Locations />} />
          <Route path="Episodes" element={<Episodes />} />
        </Route>
      </Routes>
    </BrowserRouter> 
    );
}

function Header() {
  return (
  <div id='header'>
    <h1>Rick and Morty</h1>
    <h2>Catalogus</h2>
  </div>
  );
}

function Container() {
  return (
    <div id='container'>
      <Header />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);