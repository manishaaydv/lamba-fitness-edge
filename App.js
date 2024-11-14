import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import JoinUs from './components/JoinUs';
import Timetable from './components/Timetable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import logo from './assets/logo-removebg-preview.png';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="logo-content d-flex align-items-center">
                            <img src={logo} alt="Logo" className="nav-icon" />
                            <span className="gym-name ms-2">Lamba Fitness Edge</span> 
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/gallery" activeClassName="active">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/timetable" activeClassName="active">TimeTable</NavLink> 
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contactus" activeClassName="active">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/joinus" activeClassName="active">Join Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/timetable" element={<Timetable />} /> 
                    <Route path="/contactus" element={<ContactUs />} /> 
                    <Route path="/joinus" element={<JoinUs />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
