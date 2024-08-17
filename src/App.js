import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import RLogo from './rhynoLogo.png';
import NoMatch from './NoMatch';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Rentals from './Rentals';
import CompareAll from './CompareAll'
import Prebook from './Prebook';


const App = () => {
  return (
    <>
      <Router>
        
          <nav className="navbar navbar-expand-lg navbar-color lato-light">
            <div className="container-fluid">
              <Link className="navbar-brand">
                <img src={RLogo} alt="Logo" width="100" class="d-inline-block align-text-top" />
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </Link>
                    <ul className="dropdown-menu navbar-color">
                      <li><Link className="dropdown-item navbar-color lato-light" to="/product1">SE03Lite</Link></li>
                      <li><Link className="dropdown-item navbar-color lato-light" to="/product2"> SE03</Link></li>
                      <li><Link className="dropdown-item navbar-color lato-light" to="/product3"> SE03 Max</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item navbar-color lato-light" to="/compare">Compare all</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/prebook">Pre-book now</Link>
                  </li>
                </ul>
                <Link to="https://www.instagram.com/rhyno.in/" target='_blank'><i class="nav-icon bi bi-instagram"></i></Link>
                <Link to="https://www.linkedin.com/company/rhyno-wheels/" target='_blank'><i class="nav-icon bi bi-linkedin"></i></Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/prebook" element={<Prebook />} />
            <Route path="/*" element={<NoMatch />} />
            <Route path="/compare" element={<CompareAll />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;