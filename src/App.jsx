import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import FAQ from './Pages/Faq';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css'

function App() {


  return (
    <>
     <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Faq" element={<FAQ />} />
        </Routes>
      
      
    </>
  )
}

export default App
