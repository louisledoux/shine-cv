import React from 'react';
import { SideNavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

// Partializing the SideNav so it can be called easily anywhere
const SideNavbar = () => {
    return (
        <ul id="main-nav" className="sidenav sidenav-fixed">
            <li className="brand-logo logo center">
                <Link to="/" className="flow-text" style={{fontSize: 20 + 'px'}}>Lettre de Motivation + CV</Link>
            </li>
            <li className="app-brand center">
                <Link to="/">
                    <p style={{fontSize: 16 + 'px'}}><img id="shine-logo" alt="Shine's logo" src="https://www.shine.fr/images/logo.svg"></img>{' - '}Special Edition</p>
                </Link>
            </li>
            <SideNavItem divider />
            <li>
                <Link className="waves-effect waves-teal" to="/motivation">Lettre de Motivation</Link>
            </li>
            <li>
                <Link className="waves-effect waves-purple" to="/curriculum">Curriculum Vitae</Link>
            </li>
            <SideNavItem divider />
            <li>
                <Link className="waves-effect waves-red" to="/contact">Contact</Link>
            </li>
      </ul>
    );
}

export default SideNavbar;