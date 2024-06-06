// import a useState hook
import { useState, useEffect } from "react";

// use an import function array
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

// use a function export component
export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // use a function that will determine what happens on scroll
        const onScroll = () => {
            // measure if the window has been scrolled 50px in the Y position
            if (window.scrollY > 50) {
                setScrolled(true);
            } else { 
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
      <Router>
        {/* // copy and paste below from bootstrap library: https://react-bootstrap.netlify.app/docs/components/navbar/ */}
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
           <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
          </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}