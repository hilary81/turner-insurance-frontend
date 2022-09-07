import React, { useRef } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/turner_logo.png';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/findCar",
    display: "Find a Car",
  },
  {
    path: "/buyCar",
    display: "How to Buy",
  },

  {
    path: "/sellCar",
    display: "Sell your Car",
  },
  {
    path: "/finance",
    display: "Finance&Insurance",
  },
];

function Header() {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
  
    <header className="header">
        {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
            <div className="logo">
            <Navbar.Brand href='/home' className=" d-flex align-items-center gap-2" >
              <img 
                  src={Logo}
                  height="80"
                   alt="Turner-logo"
              />
        </Navbar.Brand>
          </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>New Zealand</h4>
                  <h6>Auckland City</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/logincontroller" className=" d-flex align-items-center gap-2">
                  <i className="ri-login-circle-line"></i> Login
                </Link>

                <Link to="/home" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i> FindUs
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
   
  );
}

export default Header;

