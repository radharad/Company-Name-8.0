import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Business from './components/Business/Business';
import Legal from './components/Legal/Legal';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Contact from './components/Contact/Contact';
import  PageNotFound  from './components/pageNotFound';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div>
       <ScrollToTop smooth top="20" style={{backgroundColor:"orange",paddingLeft:"5px"}} color='white'/> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nav" element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/legal" element={<Legal/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
