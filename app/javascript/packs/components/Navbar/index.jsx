import React from 'react';
import { Link } from "react-router-dom";
import login from '../../tools/api-calls';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">FormYou</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">A propos</Link>
                <Link to="/" className="nav-item nav-link active">Les formations</Link>
                <Link to="/" className="nav-item nav-link active">Contact</Link>
                <button to="/" onClick={login} className="btn btn-danger" >Se connecter</button>
                </ul>

            </div>
        </nav>
    );

};

export default Navbar
