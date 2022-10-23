import './styles/App.scss';
import ThemeProvider from './contexts/ThemeProvider';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import SideNav from './components/SideNav';
import { useState } from 'react';

function App() {
  const [ sideNavVisibility, setSideNavVisibility ] = useState( false )
  return (
    <ThemeProvider>
      <BrowserRouter>
      <SideNav visibility = { sideNavVisibility } setVisibility = { setSideNavVisibility } />
      <div>
        <Header setVisibility = { setSideNavVisibility } />
        <Routes>
          <Route exact path="/" index element={<Home />}  />
          <Route exact path="about" element={<About />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
