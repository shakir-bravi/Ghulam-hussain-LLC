import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import logo from './nav-logo.png';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const navRef2 =useRef(null)

  // Function to handle click outside of nav
  const handleClickOutside = (event) => {
    if ((navRef.current || navRef2  )&& !( navRef.current.contains(event.target) || navRef2.current.contains(event.target) )) {
      setShowNav(false);
    }
  };

  // useEffect to add and clean up event listener
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>

      <nav>
        <div className="nav-logo">
          <img className="logo" src={logo} alt="" />
        </div>
        
        <div className="sml-links">
          <div ref={navRef2} onClick={() => setShowNav(!showNav)}>
            {showNav ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </div>
        </div>
        
        <div className="nav-links">
          {naLinks.map((l) => (
            <Link key={l.id} to={l.to} className="Link">
              {l.text}
            </Link>
          ))}
        </div>
      </nav>

      <div ref={navRef} className={`${showNav ? 'sml-nav' : 'sml-nav-clz'}`}>
        {naLinks.map((l) => (
          <div className="small-link-div" key={l.id}>
            <Link to={l.to} className="Link-sml">
              {l.icon} {l.text}
            </Link>
          </div>
        ))}
      </div>


      
    </>
  );
}

const naLinks = [
  { id: 0, text: 'Home', to: '/', icon: <i className="fa-solid fa-house"></i> },
  { id: 1, text: 'About', to: '/about', icon: <i className="fa-solid fa-building"></i> },
  { id: 2, text: 'Services', to: '/services', icon: <i className="fa-solid fa-screwdriver-wrench"></i> },
  { id: 3, text: 'Contact', to: '/contact', icon: <i className="fa-solid fa-phone"></i> },
];
