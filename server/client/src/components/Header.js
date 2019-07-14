import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="left brand-logo">HouseYou</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a >Login with Google</a></li>
                        {/* <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}
 
export default Header;