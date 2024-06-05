import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <header>
            <Navbar color="faded" className="bg-hero" light fixed="top">
                <div className="container">
                    <NavbarBrand href="/" className="me-auto">
                        reactstrap
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="me-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/about">About</Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#whyus">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">About</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#ourservice">Our Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whyus">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimonial">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-success" href="register.html">Register</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </Navbar>
        </header>
    )
}