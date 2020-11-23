import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

        
            <nav class="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Darshana</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" exact to="/" activeClassName="menu-active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service" activeClassName="menu-active">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" activeClassName="menu-active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" activeClassName="menu-active">Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;