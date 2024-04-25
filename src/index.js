import React, {useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactSwitch from 'react-switch';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import './style.css';


function Header() {
  return (
  <div class='header'>
    <h1>Rick and Morty</h1>
    <h2>Catalogus</h2>
  </div>
  );
}

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

export const ThemeContext = createContext(null);

function Container() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark': 'light'))
  }

  return (
      <div class='container' id={theme}>
        <Header />
        <div class="switch">
          <h3>Toggle Darkmode</h3>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <Main />
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);