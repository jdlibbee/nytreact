import React from "react";

const Nav = () => (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">New York Times Scrubbed!</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="/">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </div>
        </nav>
    </div>
)

export default Nav;