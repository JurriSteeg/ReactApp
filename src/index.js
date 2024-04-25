import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import './App.css';

function Menu() {
  return (
    <div id='menu'>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div> 
    );
}

function Bar() {
  return (
  <div id='bar'></div>
  );
}

function Main() {
  return (
  <div id='main'></div>
  );
}

function Container() {
  return (
    <div id='container'>
      <Bar />
      <Menu />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);
