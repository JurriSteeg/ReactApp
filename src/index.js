import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import './style.css';


function Menu() {
  return (
    <div id='menu'>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div> 
    );
}

function Bar() {
  return (
  <div id='bar'>
  </div>
  );
}

function Container() {
  return (
    <div id='container'>
      <Bar />
      <Menu />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);