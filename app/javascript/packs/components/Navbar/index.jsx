import React from 'react';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">FormYou</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto">
                    <Link to="/" className="nav-item nav-link active"><FormattedMessage id="home" /></Link>
                    <Link to="/" className="nav-item nav-link "><FormattedMessage id="about" /></Link>
                    <Link to="/" className="nav-item nav-link "><FormattedMessage id="works" /></Link>
                </ul>
                
            </div>
        </nav>
    );

};

export default Navbar