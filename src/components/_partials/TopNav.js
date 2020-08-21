import React from 'react';
import { useLocation } from 'react-router-dom';

// Scalable TopNav, display the header corresponding to the current URI
function TopNav() {
    let location = useLocation();
    let pageTitle = location.pathname.replace("/", "");
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

    return (
        <nav className="top-nav">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12 m10 offset-m1">
                            <h1 className="header pink-text text-accent-3">{pageTitle}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TopNav;