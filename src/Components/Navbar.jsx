import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="index.html">CSS - ITN</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    1ère
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/classe/1Foot">Foot</NavLink>
                    <NavLink className="dropdown-item" to="/classe/1Sciences">Sciences</NavLink>
                    </div>
                </li>
                <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    2ème
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/classe/2Foot">Foot</NavLink>
                    <NavLink className="dropdown-item" to="/classe/2Sciences">Sciences</NavLink>
                    <NavLink className="dropdown-item" to="/classe/2Economie">Economie</NavLink>
                    </div>
                </li>
                {/*<li className="nav-item active">
                    <a className="nav-link" href="troisieme.html">MyStoryBoard</a>
    </li>*/}
                </ul>
            </div>
            </nav>
        </>
     );
}
 
export default NavBar;