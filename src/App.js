
import './App.css';
import Navbar from './Pages/Shared/Navbar.js';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Login from './Pages/Login/Login.js';
import Contact from './Pages/Contact/Contact.js';
import Footer from './Pages/Shared/Footer.js';

function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
